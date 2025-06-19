// "use client"

// import { useState } from "react"
// import { Menu, X, Zap, Cpu, Layers, Users, ArrowRight, CheckCircle, Star } from "lucide-react"

// export default function CircuitCanvasLanding() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
//                 <Cpu className="w-5 h-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-white">CircuitCanvas</span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#circuit-design" className="text-gray-300 hover:text-blue-400 transition-colors">
//                 Circuit Design
//               </a>
//               <a href="#circuit-canvas" className="text-gray-300 hover:text-blue-400 transition-colors">
//                 Circuit Canvas
//               </a>
//               <a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors">
//                 Features
//               </a>
//               <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">
//                 Pricing
//               </a>
//               <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105">
//                 Get Started
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
//                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="#circuit-design" className="block px-3 py-2 text-gray-300 hover:text-blue-400">
//                 Circuit Design
//               </a>
//               <a href="#circuit-canvas" className="block px-3 py-2 text-gray-300 hover:text-blue-400">
//                 Circuit Canvas
//               </a>
//               <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-blue-400">
//                 Features
//               </a>
//               <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:text-blue-400">
//                 Pricing
//               </a>
//               <button className="w-full mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-8">
//               <Zap className="w-4 h-4 mr-2" />
//               Next-Gen Circuit Design Platform
//             </div>

//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               Design Circuits
//               <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
//                 Like Never Before
//               </span>
//             </h1>

//             <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
//               Revolutionary online platform for circuit design and prototyping. Create, simulate, and collaborate on
//               electronic circuits with our intuitive canvas-based interface.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
//                 Start Designing
//                 <ArrowRight className="w-5 h-5 ml-2 inline" />
//               </button>
//               <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all">
//                 Watch Demo
//               </button>
//             </div>
//           </div>

//           {/* Hero Visual */}
//           <div className="mt-16 relative">
//             <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20 p-8 backdrop-blur-sm">
//               <div className="grid grid-cols-3 md:grid-cols-6 gap-4 opacity-60">
//                 {Array.from({ length: 18 }).map((_, i) => (
//                   <div
//                     key={i}
//                     className="h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-lg border border-blue-400/30 flex items-center justify-center"
//                   >
//                     <div
//                       className="w-6 h-6 bg-blue-400/40 rounded-full animate-pulse"
//                       style={{ animationDelay: `${i * 0.1}s` }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//               Powerful Features for
//               <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
//                 Modern Circuit Design
//               </span>
//             </h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Everything you need to design, simulate, and prototype electronic circuits in one comprehensive platform.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Layers className="w-8 h-8" />,
//                 title: "Intuitive Canvas",
//                 description:
//                   "Drag-and-drop interface with smart component placement and automatic routing capabilities.",
//               },
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "Real-time Simulation",
//                 description: "Test your circuits instantly with our advanced simulation engine and real-time feedback.",
//               },
//               {
//                 icon: <Users className="w-8 h-8" />,
//                 title: "Team Collaboration",
//                 description: "Work together with your team in real-time, share designs, and manage project versions.",
//               },
//               {
//                 icon: <Cpu className="w-8 h-8" />,
//                 title: "Component Library",
//                 description: "Access thousands of electronic components with detailed specifications and 3D models.",
//               },
//               {
//                 icon: <CheckCircle className="w-8 h-8" />,
//                 title: "Design Validation",
//                 description: "Automated design rule checking and electrical rule verification for error-free circuits.",
//               },
//               {
//                 icon: <Star className="w-8 h-8" />,
//                 title: "Export Options",
//                 description: "Export to popular formats including Gerber, PDF, and manufacturing-ready files.",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
//               >
//                 <div className="text-blue-400 mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
//                 <p className="text-gray-300 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Circuit Design Section */}
//       <section id="circuit-design" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Professional Circuit Design Tools</h2>
//               <p className="text-lg text-gray-300 mb-8 leading-relaxed">
//                 Create complex electronic circuits with our professional-grade design tools. From simple prototypes to
//                 advanced PCB layouts, our platform handles it all.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Schematic capture with intelligent routing",
//                   "PCB layout with multi-layer support",
//                   "3D visualization and component placement",
//                   "Design rule checking and validation",
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-center text-gray-300">
//                     <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all">
//                 Explore Design Tools
//               </button>
//             </div>
//             <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-green-500/20 p-8">
//               <div className="space-y-4">
//                 {Array.from({ length: 4 }).map((_, i) => (
//                   <div key={i} className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
//                       <div className="w-6 h-6 bg-green-400/60 rounded-full" />
//                     </div>
//                     <div className="flex-1 h-2 bg-gradient-to-r from-green-400/30 to-blue-400/30 rounded-full" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Circuit Canvas Section */}
//       <section id="circuit-canvas" className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 p-8">
//               <div className="grid grid-cols-4 gap-3">
//                 {Array.from({ length: 16 }).map((_, i) => (
//                   <div
//                     key={i}
//                     className="aspect-square bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg border border-cyan-400/30 flex items-center justify-center"
//                   >
//                     <div
//                       className="w-3 h-3 bg-cyan-400/60 rounded-full animate-pulse"
//                       style={{ animationDelay: `${i * 0.2}s` }}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interactive Circuit Canvas</h2>
//               <p className="text-lg text-gray-300 mb-8 leading-relaxed">
//                 Our revolutionary canvas interface makes circuit design intuitive and enjoyable. Drag, drop, connect,
//                 and simulate with ease.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 {[
//                   "Infinite canvas with zoom and pan",
//                   "Smart component snapping and alignment",
//                   "Real-time collaboration and sharing",
//                   "Undo/redo with full version history",
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-center text-gray-300">
//                     <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//               <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all">
//                 Try Canvas Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Choose Your Plan</h2>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Start free and scale as you grow. All plans include our core features with different usage limits.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 name: "Starter",
//                 price: "Free",
//                 description: "Perfect for students and hobbyists",
//                 features: ["5 projects", "Basic components", "Community support", "Export to PDF"],
//               },
//               {
//                 name: "Professional",
//                 price: "$29/month",
//                 description: "For professional designers and teams",
//                 features: [
//                   "Unlimited projects",
//                   "Advanced components",
//                   "Priority support",
//                   "All export formats",
//                   "Team collaboration",
//                 ],
//                 popular: true,
//               },
//               {
//                 name: "Enterprise",
//                 price: "Custom",
//                 description: "For large organizations",
//                 features: [
//                   "Custom deployment",
//                   "Advanced security",
//                   "Dedicated support",
//                   "Custom integrations",
//                   "SLA guarantee",
//                 ],
//               },
//             ].map((plan, index) => (
//               <div
//                 key={index}
//                 className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
//                   plan.popular ? "border-blue-500 ring-2 ring-blue-500/20" : "border-gray-700"
//                 } hover:border-blue-500/50 transition-all`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
//                   <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
//                   <p className="text-gray-300">{plan.description}</p>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-gray-300">
//                       <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className={`w-full py-3 rounded-lg font-semibold transition-all ${
//                     plan.popular
//                       ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
//                       : "border border-gray-600 text-gray-300 hover:bg-gray-800"
//                   }`}
//                 >
//                   {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Designing?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Join thousands of engineers and designers who trust CircuitCanvas for their electronic design needs.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
//               Start Free Trial
//               <ArrowRight className="w-5 h-5 ml-2 inline" />
//             </button>
//             <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all">
//               Schedule Demo
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
//                   <Cpu className="w-5 h-5 text-white" />
//                 </div>
//                 <span className="text-xl font-bold text-white">CircuitCanvas</span>
//               </div>
//               <p className="text-gray-400 mb-4">
//                 Next-generation circuit design and prototyping platform for modern engineers.
//               </p>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Product</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Circuit Design
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Circuit Canvas
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Simulation
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Collaboration
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Company</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Blog
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Careers
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="text-white font-semibold mb-4">Support</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Help Center
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Community
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-blue-400 transition-colors">
//                     Status
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 CircuitCanvas. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Cpu, Layers, Code, Sparkles, ArrowRight, Play, Users, Award, Github, Twitter, Linkedin, CircuitBoard } from 'lucide-react';

const CircuitCanvas: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Intuitive Design",
      description: "Drag-and-drop interface with smart components"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Real-time Simulation",
      description: "Test your circuits instantly with our advanced engine"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Professional Tools",
      description: "Export-ready designs for manufacturing"
    }
  ];

  const stats = [
    { number: "50K+", label: "Circuits Created" },
    { number: "15K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse">⭐</div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000">💫</div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000">⭐</div>
      </div>

      {/* Navigation */}
      <nav className={`relative z-50 p-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-30 animate-ping"></div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CircuitCanvas
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#design" className="hover:text-cyan-400 transition-colors duration-300 relative group">
              Circuit Design
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#canvas" className="hover:text-purple-400 transition-colors duration-300 relative group">
              Circuit Canvas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Next-Gen
              </span>
              <br />
              <span className="text-white">Circuit Design</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Design, simulate, and prototype circuits with our revolutionary canvas-based platform. 
              Where innovation meets intuition.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Start Creating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-cyan-400/10 flex items-center space-x-2">
                <Code className="w-5 h-5" />
                <span>View Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Circuit Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="design" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to bring your circuit ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  activeFeature === index ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                <div className="text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canvas Section */}
      <section id="canvas" className="relative z-10 px-6 py-32 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interactive Canvas
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our revolutionary canvas interface makes circuit design as intuitive as drawing. 
                Drag, drop, connect, and watch your circuits come to life in real-time.
              </p>
              <div className="space-y-4">
                {['Smart Component Library', 'Real-time Collaboration', 'Advanced Simulation'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-12 rounded-lg bg-gradient-to-r transition-all duration-1000 ${
                        i % 3 === 0 ? 'from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30' :
                        i % 3 === 1 ? 'from-purple-500/20 to-purple-600/20 border border-purple-500/30' :
                        'from-pink-500/20 to-pink-600/20 border border-pink-500/30'
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                <div className="h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Revolutionize Your Designs?
          </h3>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of engineers and designers who are already creating the future with CircuitCanvas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-4 rounded-full text-xl font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center space-x-3">
              <Users className="w-6 h-6" />
              <span>Start for Free</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group border border-gray-600 hover:border-cyan-400 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-cyan-400/10 flex items-center space-x-3">
              <Award className="w-6 h-6" />
              <span>Enterprise</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Zap className="w-8 h-8 text-cyan-400" />
                <h4 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  CircuitCanvas
                </h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering the next generation of circuit designers with intuitive, powerful tools.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4 text-cyan-400">Product</h5>
              <div className="space-y-2">
                {['Features', 'Pricing', 'Documentation', 'API'].map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4 text-purple-400">Company</h5>
              <div className="space-y-2">
                {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4 text-pink-400">Connect</h5>
              <div className="flex space-x-4">
                {[Github, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CircuitCanvas. All rights reserved. Built with ⚡ and innovation.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default CircuitCanvas;