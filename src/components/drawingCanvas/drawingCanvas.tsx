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
};

const DrawingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [currentTool, setCurrentTool] = useState('pen');
  const [paths, setPaths] = useState<DrawingPath[]>([]);
  const [currentPath, setCurrentPath] = useState<Point[]>([]);
  
  // History management for undo/redo
  const [history, setHistory] = useState<DrawingPath[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);
  
  // Zoom and pan state
  const [zoom, setZoom] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [lastPanPoint, setLastPanPoint] = useState({ x: 0, y: 0 });

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
      },
      {
        id: 'brush',
        name: 'Brush',
        icon: Brush,
        opacity: 0.8,
        lineCap: 'round',
        globalCompositeOperation: 'source-over',
        minWidth: 5,
        maxWidth: 30,
        defaultWidth: 10,
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
        defaultWidth: 10,
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
        defaultWidth: 11,
      },
    ],
    []
  );

  const colors = [
    '#000000',
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#FF00FF',
    '#00FFFF',
    '#FFA500',
    '#800080',
    '#FFC0CB',
  ];

  const getCurrentTool = () => brushTools.find((tool) => tool.id === currentTool) || brushTools[0];

  // History management functions
  const saveToHistory = useCallback((newPaths: DrawingPath[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push([...newPaths]);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setPaths([...history[newIndex]]);
    }
  }, [historyIndex, history]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setPaths([...history[newIndex]]);
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

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default for our shortcuts
      if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'y')) {
        e.preventDefault();
      }

      // Undo/Redo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        undo();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        redo();
      }

      // Zoom
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

      // Tool shortcuts
      if (!e.ctrlKey && !e.metaKey) {
        switch (e.key) {
          case 'p':
            setCurrentTool('pen');
            break;
          case 'b':
            setCurrentTool('brush');
            break;
          case 'm':
            setCurrentTool('marker');
            break;
          case 'h':
            setCurrentTool('highlighter');
            break;
          case 'e':
            setCurrentTool('eraser');
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [undo, redo, zoomIn, zoomOut, resetZoom]);

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

    // Account for zoom and pan
    const x = (clientX - rect.left - panOffset.x) / zoom;
    const y = (clientY - rect.top - panOffset.y) / zoom;

    return { x, y };
  };

  const drawPath = useCallback(
    (ctx: CanvasRenderingContext2D, path: DrawingPath) => {
      if (path.points.length < 2) return;

      const tool = brushTools.find((t) => t.id === path.tool) || brushTools[0];

      ctx.save();
      ctx.strokeStyle = path.color;
      ctx.lineWidth = path.width;
      ctx.lineCap = tool.lineCap;
      ctx.lineJoin = 'round';
      ctx.globalAlpha = path.opacity || tool.opacity;
      ctx.globalCompositeOperation = tool.globalCompositeOperation;

      ctx.beginPath();
      ctx.moveTo(path.points[0].x, path.points[0].y);

      for (let i = 1; i < path.points.length; i++) {
        ctx.lineTo(path.points[i].x, path.points[i].y);
      }

      ctx.stroke();
      ctx.restore();
    },
    [brushTools]
  );

  const redrawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply zoom and pan transformations
    ctx.save();
    ctx.translate(panOffset.x, panOffset.y);
    ctx.scale(zoom, zoom);

    // Draw all completed paths
    paths.forEach((path) => drawPath(ctx, path));

    // Draw current path if drawing
    if (currentPath.length > 0) {
      const tool = getCurrentTool();
      drawPath(ctx, {
        points: currentPath,
        color: currentColor,
        width: strokeWidth,
        tool: currentTool,
        opacity: tool.opacity,
      });
    }

    ctx.restore();
  }, [paths, currentPath, currentColor, strokeWidth, drawPath, zoom, panOffset, getCurrentTool]);

  useEffect(() => {
    redrawCanvas();
  }, [redrawCanvas]);

  // Mouse wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.9 : 1.1;
      setZoom(prev => Math.min(Math.max(prev * delta, 0.1), 5));
    }
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();

    // Check for middle mouse button for panning
    if ('button' in e && e.button === 1) {
      setIsPanning(true);
      const point =
        'touches' in e && e instanceof TouchEvent
          ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
          : { x: e.clientX, y: e.clientY };
      setLastPanPoint(point);
      return;
    }

    setIsDrawing(true);
    const point = getCanvasCoordinates(e);
    setCurrentPath([point]);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    
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
    setCurrentPath((prev) => [...prev, point]);
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
      const newPath = {
        points: currentPath,
        color: currentColor,
        width: strokeWidth,
        tool: currentTool,
        opacity: tool.opacity,
      };
      
      const newPaths = [...paths, newPath];
      setPaths(newPaths);
      saveToHistory(newPaths);
      setCurrentPath([]);
    }
  };

  const clearCanvas = () => {
    const newPaths: DrawingPath[] = [];
    setPaths(newPaths);
    setCurrentPath([]);
    saveToHistory(newPaths);
    
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a temporary canvas with white background for download
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');

    if (tempCtx) {
      // Fill with white background
      tempCtx.fillStyle = '#ffffff';
      tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

      // Draw all paths without zoom/pan transformations
      paths.forEach((path) => drawPath(tempCtx, path));

      // Get data URL
      const dataURL = tempCanvas.toDataURL('image/png', 1.0);

      // Download the image
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
      // Adjust stroke width to tool's default if current width is outside tool's range
      if (strokeWidth < tool.minWidth || strokeWidth > tool.maxWidth) {
        setStrokeWidth(tool.defaultWidth);
      }
    }
  };

  return (
    <div className=" max-w-7xl items-center justify-center bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Drawing Canvas</h1>
      </header>

      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left side - Tools and Colors */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Brush Tools */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Tools:</span>
              <div className="flex gap-1">
                {brushTools.map((tool) => {
                  const IconComponent = tool.icon;
                  return (
                    <button
                      key={tool.id}
                      className={`rounded-lg border-2 p-2 transition-all hover:scale-105 ${
                        currentTool === tool.id
                          ? 'border-blue-500 bg-blue-50 text-blue-600'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      onClick={() => handleToolChange(tool.id)}
                      title={`${tool.name} (${tool.id[0]})`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Color Palette */}
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-gray-600" />
              <div className="flex gap-1">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`h-8 w-8 rounded-full border-2 transition-all hover:scale-110 ${
                      currentColor === color ? 'border-gray-800 shadow-lg' : 'border-gray-300'
                    } ${currentTool === 'eraser' ? 'cursor-not-allowed opacity-50' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => currentTool !== 'eraser' && setCurrentColor(color)}
                    disabled={currentTool === 'eraser'}
                  />
                ))}
              </div>
            </div>

            {/* Stroke Width */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Size:</span>
              <button
                onClick={() => adjustStrokeWidth(false)}
                className="rounded-full bg-gray-200 p-1 transition-colors hover:bg-gray-300"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm font-medium">{strokeWidth}</span>
              <button
                onClick={() => adjustStrokeWidth(true)}
                className="rounded-full bg-gray-200 p-1 transition-colors hover:bg-gray-300"
              >
                <Plus className="h-4 w-4" />
              </button>
              <div
                className="ml-2 rounded-full border border-gray-300"
                style={{
                  width: Math.max(strokeWidth, 6) + 'px',
                  height: Math.max(strokeWidth, 6) + 'px',
                  backgroundColor: currentTool === 'eraser' ? '#ff6b6b' : currentColor,
                  opacity: getCurrentTool().opacity,
                }}
              />
            </div>
          </div>

          {/* Right side - Controls */}
          <div className="flex flex-wrap items-center gap-4">
            {/* History Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={undo}
                disabled={historyIndex <= 0}
                className={`rounded-lg border-2 p-2 transition-all hover:scale-105 ${
                  historyIndex <= 0
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                title="Undo (Ctrl+Z)"
              >
                <Undo className="h-5 w-5" />
              </button>
              <button
                onClick={redo}
                disabled={historyIndex >= history.length - 1}
                className={`rounded-lg border-2 p-2 transition-all hover:scale-105 ${
                  historyIndex >= history.length - 1
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                title="Redo (Ctrl+Y)"
              >
                <Redo className="h-5 w-5" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={zoomOut}
                className="rounded-lg border-2 border-gray-300 p-2 transition-all hover:scale-105 hover:border-gray-400"
                title="Zoom Out (Ctrl+-)"
              >
                <ZoomOut className="h-5 w-5" />
              </button>
              <span className="w-16 text-center text-sm font-medium">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={zoomIn}
                className="rounded-lg border-2 border-gray-300 p-2 transition-all hover:scale-105 hover:border-gray-400"
                title="Zoom In (Ctrl+=)"
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              <button
                onClick={resetZoom}
                className="rounded-lg border-2 border-gray-300 p-2 transition-all hover:scale-105 hover:border-gray-400"
                title="Reset Zoom (Ctrl+0)"
              >
                <RotateCw className="h-4 w-4" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={clearCanvas}
                className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
              >
                <RotateCcw className="h-4 w-4" />
                Clear
              </button>

              <button
                onClick={downloadImage}
                className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
              >
                <Download className="h-4 w-4" />
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Tool Info */}
        <div className="mt-3 text-center">
          <div className="text-sm text-gray-500">
            Current tool: <span className="font-medium text-gray-700">{getCurrentTool().name}</span>
            {currentTool === 'eraser' && ' - Click and drag to erase'}
            {currentTool === 'highlighter' && ' - Semi-transparent overlay effect'}
          </div>
          <div className="mt-1 text-xs text-gray-400">
            Shortcuts: Undo (Ctrl+Z) • Redo (Ctrl+Y) • Zoom (Ctrl+/- or mouse wheel) • Tools (P/B/M/H/E) • Pan (middle mouse)
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 p-6 items-center justify-center bg-gray-50 flex overflow-hidden" ref={containerRef}>
        <div className="h-full bg-white rounded-lg border-2 border-gray-300 shadow-lg overflow-hidden">
          <canvas
            ref={canvasRef}
            width={1200}
            height={800}
            className="block touch-none w-full h-full"
            style={{ 
              cursor: isPanning ? 'grabbing' : (currentTool === 'eraser' ? 'crosshair' : 'crosshair'),
              imageRendering: 'pixelated'
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
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-6 py-3">
        <div className="text-center text-sm text-gray-500">
          Click and drag to draw • Middle mouse to pan • Ctrl+scroll to zoom • Touch and drag on mobile
        </div>
      </footer>
    </div>
  );
};

export default DrawingCanvas;