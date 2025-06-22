'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Brush,
  Download,
  Eraser,
  Highlighter,
  Minus,
  Paintbrush,
  Palette,
  PenTool,
  Plus,
  RotateCcw,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Circle,
  Type,
  Layers,
  Grid,
  Eye,
  EyeOff,
  Move,
  Hand
} from 'lucide-react';

interface Point {
  x: number;
  y: number;
}

interface DrawingPath {
  points: Point[];
  color: string;
  width: number;
  tool: string;
  opacity?: number;
  id: string;
}

interface Layer {
  id: string;
  name: string;
  visible: boolean;
  paths: DrawingPath[];
  opacity: number;
}

type BrushTool = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  opacity: number;
  lineCap: CanvasLineCap;
  globalCompositeOperation: GlobalCompositeOperation;
  minWidth: number;
  maxWidth: number;
  defaultWidth: number;
  cursor: string;
};

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [currentTool, setCurrentTool] = useState('pen');
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  
  // Layer management
  const [layers, setLayers] = useState<Layer[]>([
    { id: '1', name: 'Layer 1', visible: true, paths: [], opacity: 1 }
  ]);
  const [activeLayerId, setActiveLayerId] = useState('1');
  
  // History management for undo/redo
  const [history, setHistory] = useState<Layer[][]>([[...layers]]);
  const [historyIndex, setHistoryIndex] = useState(0);
  
  // Zoom and pan state
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastPanPoint, setLastPanPoint] = useState({ x: 0, y: 0 });
  
  // UI state
  const [showGrid, setShowGrid] = useState(false);
  const [showCursor] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showLayers, setShowLayers] = useState(false);
  const [customColor, setCustomColor] = useState('#000000');

  const brushTools = React.useMemo<BrushTool[]>(
    () => [
      {
        id: 'pen',
        name: 'Pen',
        icon: PenTool,
        opacity: 1,
        lineCap: 'round',
        globalCompositeOperation: 'source-over',
        minWidth: 1,
        maxWidth: 10,
        defaultWidth: 3,
        cursor: 'crosshair',
      },
      {
        id: 'brush',
        name: 'Brush',
        icon: Brush,
        opacity: 0.8,
        lineCap: 'round',
        globalCompositeOperation: 'source-over',
        minWidth: 5,
        maxWidth: 50,
        defaultWidth: 15,
        cursor: 'crosshair',
      },
      {
        id: 'marker',
        name: 'Marker',
        icon: Paintbrush,
        opacity: 0.7,
        lineCap: 'square',
        globalCompositeOperation: 'source-over',
        minWidth: 8,
        maxWidth: 25,
        defaultWidth: 12,
        cursor: 'crosshair',
      },
      {
        id: 'highlighter',
        name: 'Highlighter',
        icon: Highlighter,
        opacity: 0.3,
        lineCap: 'square',
        globalCompositeOperation: 'multiply',
        minWidth: 10,
        maxWidth: 40,
        defaultWidth: 20,
        cursor: 'crosshair',
      },
      {
        id: 'pencil',
        name: 'Pencil',
        icon: Type,
        opacity: 0.6,
        lineCap: 'round',
        globalCompositeOperation: 'source-over',
        minWidth: 1,
        maxWidth: 5,
        defaultWidth: 2,
        cursor: 'crosshair',
      },
      {
        id: 'spray',
        name: 'Spray',
        icon: Circle,
        opacity: 0.4,
        lineCap: 'round',
        globalCompositeOperation: 'source-over',
        minWidth: 10,
        maxWidth: 60,
        defaultWidth: 25,
        cursor: 'crosshair',
      },
      {
        id: 'eraser',
        name: 'Eraser',
        icon: Eraser,
        opacity: 1,
        lineCap: 'round',
        globalCompositeOperation: 'destination-out',
        minWidth: 5,
        maxWidth: 50,
        defaultWidth: 15,
        cursor: 'crosshair',
      },
    ],
    []
  );

  const colors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00',
    '#FF00FF', '#00FFFF', '#FFA500', '#800080', '#FFC0CB', '#A52A2A',
    '#808080', '#C0C0C0', '#800000', '#008000', '#000080', '#808000',
    '#800080', '#008080', '#FF6B35', '#F7931E', '#FFD23F', '#06FFA5',
  ];

  const getCurrentTool = () => brushTools.find((tool) => tool.id === currentTool) || brushTools[0];
  const getActiveLayer = () => layers.find(layer => layer.id === activeLayerId) || layers[0];

  // History management functions
  const saveToHistory = useCallback((newLayers: Layer[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(JSON.stringify(newLayers)));
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setLayers([...history[newIndex]]);
    }
  }, [historyIndex, history]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setLayers([...history[newIndex]]);
    }
  }, [historyIndex, history]);

  // Zoom functions
  const zoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev * 1.2, 5));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev / 1.2, 0.1));
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPanOffset({ x: 0, y: 0 });
  }, []);

  // Layer functions
  const addLayer = () => {
    const newLayer: Layer = {
      id: Date.now().toString(),
      name: `Layer ${layers.length + 1}`,
      visible: true,
      paths: [],
      opacity: 1
    };
    setLayers([...layers, newLayer]);
    setActiveLayerId(newLayer.id);
  };

  const deleteLayer = (layerId: string) => {
    if (layers.length > 1) {
      const newLayers = layers.filter(layer => layer.id !== layerId);
      setLayers(newLayers);
      if (activeLayerId === layerId) {
        setActiveLayerId(newLayers[0].id);
      }
    }
  };

  const toggleLayerVisibility = (layerId: string) => {
    setLayers(layers.map(layer => 
      layer.id === layerId ? { ...layer, visible: !layer.visible } : layer
    ));
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'y')) {
        e.preventDefault();
      }

      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        undo();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        redo();
      }

      if ((e.ctrlKey || e.metaKey) && e.key === '=') {
        e.preventDefault();
        zoomIn();
      } else if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        zoomOut();
      } else if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
        resetZoom();
      }

      if (!e.ctrlKey && !e.metaKey && !e.altKey) {
        switch (e.key) {
          case 'p': setCurrentTool('pen'); break;
          case 'b': setCurrentTool('brush'); break;
          case 'm': setCurrentTool('marker'); break;
          case 'h': setCurrentTool('highlighter'); break;
          case 'e': setCurrentTool('eraser'); break;
          case 'l': setCurrentTool('pencil'); break;
          case 's': setCurrentTool('spray'); break;
          case 'g': setShowGrid(!showGrid); break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, zoomIn, zoomOut, resetZoom, showGrid]);

  const getCanvasCoordinates = (
    e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>
  ): Point => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    let clientX: number, clientY: number;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = (clientX - rect.left - panOffset.x) / zoom;
    const y = (clientY - rect.top - panOffset.y) / zoom;

    return { x, y };
  };

  const drawPath = useCallback((ctx: CanvasRenderingContext2D, path: DrawingPath) => {
    if (path.points.length < 2) return;

    const tool = brushTools.find((t) => t.id === path.tool) || brushTools[0];

    ctx.save();
    ctx.strokeStyle = path.color;
    ctx.lineWidth = path.width;
    ctx.lineCap = tool.lineCap;
    ctx.lineJoin = 'round';
    ctx.globalAlpha = path.opacity || tool.opacity;
    ctx.globalCompositeOperation = tool.globalCompositeOperation;

    if (path.tool === 'spray') {
      // Spray effect
      path.points.forEach(point => {
        for (let i = 0; i < 5; i++) {
          const offsetX = (Math.random() - 0.5) * path.width;
          const offsetY = (Math.random() - 0.5) * path.width;
          ctx.beginPath();
          ctx.arc(point.x + offsetX, point.y + offsetY, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    } else {
      ctx.beginPath();
      ctx.moveTo(path.points[0].x, path.points[0].y);

      for (let i = 1; i < path.points.length; i++) {
        ctx.lineTo(path.points[i].x, path.points[i].y);
      }

      ctx.stroke();
    }
    
    ctx.restore();
  }, [brushTools]);

  const drawGrid = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
    if (!showGrid) return;
    
    ctx.save();
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.5;
    
    const gridSize = 20 * zoom;
    const offsetX = panOffset.x % gridSize;
    const offsetY = panOffset.y % gridSize;
    
    ctx.beginPath();
    for (let x = offsetX; x < width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = offsetY; y < height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();
    ctx.restore();
  }, [showGrid, zoom, panOffset]);

  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid
    drawGrid(ctx, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(panOffset.x, panOffset.y);
    ctx.scale(zoom, zoom);

    // Draw all layers
    layers.forEach(layer => {
      if (layer.visible) {
        ctx.save();
        ctx.globalAlpha = layer.opacity;
        layer.paths.forEach(path => drawPath(ctx, path));
        ctx.restore();
      }
    });

    // Draw current path
    if (currentPath.length > 0) {
      const tool = getCurrentTool();
      drawPath(ctx, {
        points: currentPath,
        color: currentColor,
        width: strokeWidth,
        tool: currentTool,
        opacity: tool.opacity,
        id: 'current'
      });
    }

    ctx.restore();
  }, [layers, currentPath, currentColor, strokeWidth, drawPath, zoom, panOffset, getCurrentTool, drawGrid]);

  useEffect(() => {
    redrawCanvas();
  }, [redrawCanvas]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect && showCursor) {
      setCursorPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      setZoom(prev => Math.min(Math.max(prev * delta, 0.1), 5));
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    if (currentTool === 'hand' || ('button' in e && e.button === 1)) {
      setIsPanning(true);
      const point = 'touches' in e ? 
        { x: e.touches[0].clientX, y: e.touches[0].clientY } :
        { x: e.clientX, y: e.clientY };
      setLastPanPoint(point);
      return;
    }

    setIsDrawing(true);
    const point = getCanvasCoordinates(e);
    setCurrentPath([point]);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    handleMouseMove(e as React.MouseEvent<HTMLCanvasElement>);
    
    if (isPanning) {
      const currentPoint = 'touches' in e ? 
        { x: e.touches[0].clientX, y: e.touches[0].clientY } :
        { x: e.clientX, y: e.clientY };
      
      const deltaX = currentPoint.x - lastPanPoint.x;
      const deltaY = currentPoint.y - lastPanPoint.y;
      
      setPanOffset(prev => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY
      }));
      
      setLastPanPoint(currentPoint);
      return;
    }

    if (!isDrawing) return;

    const point = getCanvasCoordinates(e);
    setCurrentPath(prev => [...prev, point]);
  };

  const stopDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    
    if (isPanning) {
      setIsPanning(false);
      return;
    }

    if (!isDrawing) return;

    setIsDrawing(false);
    if (currentPath.length > 0) {
      const tool = getCurrentTool();
      const newPath: DrawingPath = {
        points: currentPath,
        color: currentColor,
        width: strokeWidth,
        tool: currentTool,
        opacity: tool.opacity,
        id: Date.now().toString()
      };
      
      const newLayers = layers.map(layer => 
        layer.id === activeLayerId 
          ? { ...layer, paths: [...layer.paths, newPath] }
          : layer
      );
      
      setLayers(newLayers);
      saveToHistory(newLayers);
      setCurrentPath([]);
    }
  };

  const clearCanvas = () => {
    const newLayers = layers.map(layer => 
      layer.id === activeLayerId ? { ...layer, paths: [] } : layer
    );
    setLayers(newLayers);
    saveToHistory(newLayers);
    setCurrentPath([]);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');

    if (tempCtx) {
      tempCtx.fillStyle = '#ffffff';
      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

      layers.forEach(layer => {
        if (layer.visible) {
          tempCtx.save();
          tempCtx.globalAlpha = layer.opacity;
          layer.paths.forEach(path => drawPath(tempCtx, path));
          tempCtx.restore();
        }
      });

      const dataURL = tempCanvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = `drawing-${Date.now()}.png`;
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const adjustStrokeWidth = (increment: boolean) => {
    const tool = getCurrentTool();
    if (increment && strokeWidth < tool.maxWidth) {
      setStrokeWidth(strokeWidth + 1);
    } else if (!increment && strokeWidth > tool.minWidth) {
      setStrokeWidth(strokeWidth - 1);
    }
  };

  const handleToolChange = (toolId: string) => {
    const tool = brushTools.find((t) => t.id === toolId);
    if (tool) {
      setCurrentTool(toolId);
      if (strokeWidth < tool.minWidth || strokeWidth > tool.maxWidth) {
        setStrokeWidth(tool.defaultWidth);
      }
    }
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-blue-100 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Brush className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Canvas Drawing
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Active: {getActiveLayer().name}</span>
            <span>•</span>
            <span>Tool: {getCurrentTool().name}</span>
            <span>•</span>
            <span>Zoom: {Math.round(zoom * 100)}%</span>
          </div>
        </div>
      </header>

      {/* Toolbar */}
      <div className="bg-white border-b-2 border-gray-200 px-6 py-4 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left side - Tools and Colors */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Brush Tools */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700">Tools:</span>
              <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
                {brushTools.map((tool) => {
                  const IconComponent = tool.icon;
                  return (
                    <button
                      key={tool.id}
                      className={`rounded-lg border-2 p-3 transition-all duration-200 hover:scale-110 shadow-sm ${
                        currentTool === tool.id
                          ? 'border-blue-500 bg-blue-500 text-white shadow-lg transform scale-105'
                          : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50'
                      }`}
                      onClick={() => handleToolChange(tool.id)}
                      title={`${tool.name} (${tool.id[0]})`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </button>
                  );
                })}
                <button
                  className={`rounded-lg border-2 p-3 transition-all duration-200 hover:scale-110 shadow-sm ${
                    currentTool === 'hand'
                      ? 'border-blue-500 bg-blue-500 text-white shadow-lg transform scale-105'
                      : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50'
                  }`}
                  onClick={() => setCurrentTool('hand')}
                  title="Hand Tool - Pan (Space)"
                >
                  <Hand className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Color Palette */}
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-gray-700" />
              <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`h-8 w-8 rounded-lg border-2 transition-all duration-200 hover:scale-110 shadow-sm ${
                      currentColor === color ? 'border-gray-800 shadow-lg ring-2 ring-blue-300' : 'border-gray-300'
                    } ${currentTool === 'eraser' ? 'cursor-not-allowed opacity-50' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => currentTool !== 'eraser' && setCurrentColor(color)}
                    disabled={currentTool === 'eraser'}
                  />
                ))}
                <input
                  type="color"
                  value={customColor}
                  onChange={(e) => {
                    setCustomColor(e.target.value);
                    if (currentTool !== 'eraser') setCurrentColor(e.target.value);
                  }}
                  className="h-8 w-8 rounded-lg border-2 border-gray-300 cursor-pointer"
                  title="Custom Color"
                />
              </div>
            </div>

            {/* Stroke Width */}
            <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg">
              <span className="text-sm font-semibold text-gray-700">Size:</span>
              <button
                onClick={() => adjustStrokeWidth(false)}
                className="rounded-full bg-white p-2 transition-colors hover:bg-gray-200 shadow-sm"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm font-bold">{strokeWidth}</span>
              <button
                onClick={() => adjustStrokeWidth(true)}
                className="rounded-full bg-white p-2 transition-colors hover:bg-gray-200 shadow-sm"
              >
                <Plus className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2">
                <div
                  className="rounded-full border-2 border-gray-400 shadow-sm"
                  style={{
                    width: Math.min(Math.max(strokeWidth, 8), 24) + 'px',
                    height: Math.min(Math.max(strokeWidth, 8), 24) + 'px',
                    backgroundColor: currentTool === 'eraser' ? '#ff6b6b' : currentColor,
                    opacity: getCurrentTool().opacity,
                  }}
                />
                <span className="text-xs text-gray-600">{getCurrentTool().name}</span>
              </div>
            </div>
          </div>

          {/* Right side - Controls */}
          <div className="flex flex-wrap items-center gap-4">
            {/* History Controls */}
            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={undo}
                disabled={historyIndex <= 0}
                className={`rounded-lg border-2 p-2 transition-all duration-200 ${
                  historyIndex <= 0
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                    : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50 hover:scale-105'
                }`}
                title="Undo (Ctrl+Z)"
              >
                <Undo className="h-5 w-5" />
              </button>
              <button
                onClick={redo}
                disabled={historyIndex >= history.length - 1}
                className={`rounded-lg border-2 p-2 transition-all duration-200 ${
                  historyIndex >= history.length - 1
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                    : 'border-gray-300 bg-white hover:border-blue-300 hover:bg-blue-50 hover:scale-105'
                }`}
                title="Redo (Ctrl+Y)"
              >
                <Redo className="h-5 w-5" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={zoomOut}
                className="rounded-lg border-2 border-gray-300 bg-white p-2 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105"
                title="Zoom Out (Ctrl+-)"
              >
                <ZoomOut className="h-5 w-5" />
              </button>
              <span className="w-16 text-center text-sm font-bold bg-white px-2 py-1 rounded border">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={zoomIn}
                className="rounded-lg border-2 border-gray-300 bg-white p-2 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105"
                title="Zoom In (Ctrl+=)"
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              <button
                onClick={resetZoom}
                className="rounded-lg border-2 border-gray-300 bg-white p-2 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:scale-105"
                title="Reset Zoom (Ctrl+0)"
              >
                <RotateCw className="h-4 w-4" />
              </button>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
              <button
                onClick={() => setShowGrid(!showGrid)}
                className={`rounded-lg border-2 p-2 transition-all duration-200 ${
                  showGrid
                    ? 'border-green-500 bg-green-500 text-white'
                    : 'border-gray-300 bg-white hover:border-green-300 hover:bg-green-50'
                }`}
                title="Toggle Grid (G)"
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setShowLayers(!showLayers)}
                className={`rounded-lg border-2 p-2 transition-all duration-200 ${
                  showLayers
                    ? 'border-purple-500 bg-purple-500 text-white'
                    : 'border-gray-300 bg-white hover:border-purple-300 hover:bg-purple-50'
                }`}
                title="Toggle Layers Panel"
              >
                <Layers className="h-5 w-5" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={clearCanvas}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 text-white transition-all duration-200 hover:from-red-600 hover:to-red-700 hover:scale-105 shadow-lg"
              >
                <RotateCcw className="h-4 w-4" />
                Clear Layer
              </button>

              <button
                onClick={downloadImage}
                className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-white transition-all duration-200 hover:from-blue-600 hover:to-blue-700 hover:scale-105 shadow-lg"
              >
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Tool Info Bar */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="font-medium">Current: {getCurrentTool().name}</span>
              {currentTool === 'eraser' && <span className="text-red-600">• Erase mode active</span>}
              {currentTool === 'highlighter' && <span className="text-yellow-600">• Semi-transparent overlay</span>}
              {currentTool === 'spray' && <span className="text-blue-600">• Spray paint effect</span>}
              {currentTool === 'hand' && <span className="text-purple-600">• Pan mode - click and drag</span>}
            </div>
          </div>
          <div className="text-xs text-gray-500">
            <span className="hidden sm:inline">
              Shortcuts: Undo (Ctrl+Z) • Redo (Ctrl+Y) • Zoom (Ctrl +/-) • Grid (G) • Tools (P/B/M/H/E/L/S) • Pan (Middle click)
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Canvas Container */}
        <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 relative">
          <div 
            className="relative bg-white rounded-2xl shadow-2xl border-4 border-gray-300 overflow-hidden"
            style={{ maxWidth: '90vw', maxHeight: '80vh' }}
          >
            <canvas
              ref={canvasRef}
              width={1200}
              height={800}
              className="block touch-none"
              style={{ 
                cursor: getCurrentTool().cursor,
                width: '100%',
                height: '100%',
                maxWidth: '1200px',
                maxHeight: '800px'
              }}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              onWheel={handleWheel}
              onContextMenu={(e) => e.preventDefault()}
            />
            
            {/* Custom Cursor */}
            {showCursor && currentTool !== 'hand' && (
              <div
                ref={cursorRef}
                className="pointer-events-none absolute rounded-full border-2 border-gray-800 bg-transparent"
                style={{
                  left: cursorPosition.x - strokeWidth / 2,
                  top: cursorPosition.y - strokeWidth / 2,
                  width: Math.min(strokeWidth * zoom, 50),
                  height: Math.min(strokeWidth * zoom, 50),
                  borderColor: currentTool === 'eraser' ? '#ff6b6b' : currentColor,
                  opacity: 0.7,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1000,
                }}
              />
            )}
          </div>

          {/* Drawing Status Indicator */}
          {isDrawing && (
            <div className="absolute top-8 right-8 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Drawing with {getCurrentTool().name}</span>
              </div>
            </div>
          )}

          {/* Pan Mode Indicator */}
          {(isPanning || currentTool === 'hand') && (
            <div className="absolute top-8 left-8 bg-purple-600 bg-opacity-90 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Move className="w-4 h-4" />
                <span className="text-sm font-medium">Pan Mode Active</span>
              </div>
            </div>
          )}
        </div>

        {/* Layers Panel */}
        {showLayers && (
          <div className="w-80 bg-white border-l-2 border-gray-200 shadow-lg overflow-y-auto">
            <div className="p-4 border-b-2 border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Layers</h3>
                <button
                  onClick={addLayer}
                  className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                  title="Add Layer"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <div className="space-y-2">
                {layers.map((layer) => (
                  <div
                    key={layer.id}
                    className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                      activeLayerId === layer.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveLayerId(layer.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLayerVisibility(layer.id);
                          }}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          {layer.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                        </button>
                        <span className="font-medium text-sm">{layer.name}</span>
                      </div>
                      {layers.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteLayer(layer.id);
                          }}
                          className="text-red-500 hover:text-red-700 p-1"
                          title="Delete Layer"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      {layer.paths.length} paths • Opacity: {Math.round(layer.opacity * 100)}%
                    </div>
                    <div className="mt-2">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={layer.opacity}
                        onChange={(e) => {
                          const newOpacity = parseFloat(e.target.value);
                          setLayers(layers.map(l => 
                            l.id === layer.id ? { ...l, opacity: newOpacity } : l
                          ));
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-200 px-6 py-3 shadow-lg">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span>Canvas: 1200 × 800px</span>
            <span>•</span>
            <span>Paths: {layers.reduce((acc, layer) => acc + layer.paths.length, 0)}</span>
            <span>•</span>
            <span>Layers: {layers.length}</span>
          </div>
          <div className="hidden md:block">
            Advanced Drawing Studio - Click and drag to draw • Use middle mouse or hand tool to pan • Ctrl+scroll to zoom
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isDrawing ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <span className="text-xs">{isDrawing ? 'Drawing' : 'Ready'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DrawingCanvas;