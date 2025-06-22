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

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Zap, Cpu, Layers, Code, Sparkles, ArrowRight, Play, Users, Award, Github, Twitter, Linkedin, CircuitBoard } from 'lucide-react';

// const CircuitCanvas: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setActiveFeature(prev => (prev + 1) % 3);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const features = [
//     {
//       icon: <CircuitBoard className="w-8 h-8" />,
//       title: "Intuitive Design",
//       description: "Drag-and-drop interface with smart components"
//     },
//     {
//       icon: <Cpu className="w-8 h-8" />,
//       title: "Real-time Simulation",
//       description: "Test your circuits instantly with our advanced engine"
//     },
//     {
//       icon: <Layers className="w-8 h-8" />,
//       title: "Professional Tools",
//       description: "Export-ready designs for manufacturing"
//     }
//   ];

//   const stats = [
//     { number: "50K+", label: "Circuits Created" },
//     { number: "15K+", label: "Active Users" },
//     { number: "99.9%", label: "Uptime" },
//     { number: "24/7", label: "Support" }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse">⭐</div>
//         <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000">💫</div>
//         <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000">⭐</div>
//       </div>

//       {/* Navigation */}
//       <nav className={`relative z-50 p-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-3">
//             <div className="relative">
//               <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
//               <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-30 animate-ping"></div>
//             </div>
//             <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               CircuitCanvas
//             </h1>
//           </div>
          
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#design" className="hover:text-cyan-400 transition-colors duration-300 relative group">
//               Circuit Design
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
//             </a>
//             <a href="#canvas" className="hover:text-purple-400 transition-colors duration-300 relative group">
//               Circuit Canvas
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
//             </a>
//             <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="relative z-10 px-6 pt-20 pb-32">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
//                 Next-Gen
//               </span>
//               <br />
//               <span className="text-white">Circuit Design</span>
//             </h2>
            
//             <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
//               Design, simulate, and prototype circuits with our revolutionary canvas-based platform. 
//               Where innovation meets intuition.
//             </p>
            
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//               <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center space-x-2">
//                 <Play className="w-5 h-5" />
//                 <span>Start Creating</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
              
//               <button className="group border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-cyan-400/10 flex items-center space-x-2">
//                 <Code className="w-5 h-5" />
//                 <span>View Demo</span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Floating Circuit Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className={`absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-float`}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 0.5}s`,
//                 animationDuration: `${3 + i}s`
//               }}
//             ></div>
//           ))}
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="design" className="relative z-10 px-6 py-32">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//               Powerful Features
//             </h3>
//             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//               Everything you need to bring your circuit ideas to life
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className={`group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
//                   activeFeature === index ? 'ring-2 ring-cyan-400/50' : ''
//                 }`}
//               >
//                 <div className="text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
//                   {feature.title}
//                 </h4>
//                 <p className="text-gray-300 leading-relaxed">
//                   {feature.description}
//                 </p>
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Canvas Section */}
//       <section id="canvas" className="relative z-10 px-6 py-32 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 Interactive Canvas
//               </h3>
//               <p className="text-xl text-gray-300 mb-8 leading-relaxed">
//                 Our revolutionary canvas interface makes circuit design as intuitive as drawing. 
//                 Drag, drop, connect, and watch your circuits come to life in real-time.
//               </p>
//               <div className="space-y-4">
//                 {['Smart Component Library', 'Real-time Collaboration', 'Advanced Simulation'].map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-3">
//                     <Sparkles className="w-5 h-5 text-purple-400" />
//                     <span className="text-gray-300">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="relative">
//               <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 shadow-2xl">
//                 <div className="grid grid-cols-3 gap-4 mb-6">
//                   {[...Array(9)].map((_, i) => (
//                     <div
//                       key={i}
//                       className={`h-12 rounded-lg bg-gradient-to-r transition-all duration-1000 ${
//                         i % 3 === 0 ? 'from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30' :
//                         i % 3 === 1 ? 'from-purple-500/20 to-purple-600/20 border border-purple-500/30' :
//                         'from-pink-500/20 to-pink-600/20 border border-pink-500/30'
//                       }`}
//                       style={{ animationDelay: `${i * 0.1}s` }}
//                     ></div>
//                   ))}
//                 </div>
//                 <div className="h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
//               </div>
              
//               <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-ping"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="relative z-10 px-6 py-20">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-300 text-lg">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative z-10 px-6 py-32">
//         <div className="max-w-4xl mx-auto text-center">
//           <h3 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Ready to Revolutionize Your Designs?
//           </h3>
//           <p className="text-xl text-gray-300 mb-12 leading-relaxed">
//             Join thousands of engineers and designers who are already creating the future with CircuitCanvas.
//           </p>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
//             <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-4 rounded-full text-xl font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center space-x-3">
//               <Users className="w-6 h-6" />
//               <span>Start for Free</span>
//               <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
//             </button>
            
//             <button className="group border border-gray-600 hover:border-cyan-400 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-cyan-400/10 flex items-center space-x-3">
//               <Award className="w-6 h-6" />
//               <span>Enterprise</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative z-10 px-6 py-16 border-t border-slate-800">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-4 gap-12">
//             <div>
//               <div className="flex items-center space-x-3 mb-6">
//                 <Zap className="w-8 h-8 text-cyan-400" />
//                 <h4 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
//                   CircuitCanvas
//                 </h4>
//               </div>
//               <p className="text-gray-400 leading-relaxed">
//                 Empowering the next generation of circuit designers with intuitive, powerful tools.
//               </p>
//             </div>
            
//             <div>
//               <h5 className="text-lg font-semibold mb-4 text-cyan-400">Product</h5>
//               <div className="space-y-2">
//                 {['Features', 'Pricing', 'Documentation', 'API'].map((item) => (
//                   <a key={item} href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </div>
            
//             <div>
//               <h5 className="text-lg font-semibold mb-4 text-purple-400">Company</h5>
//               <div className="space-y-2">
//                 {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
//                   <a key={item} href="#" className="block text-gray-400 hover:text-white transition-colors duration-300">
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </div>
            
//             <div>
//               <h5 className="text-lg font-semibold mb-4 text-pink-400">Connect</h5>
//               <div className="flex space-x-4">
//                 {[Github, Twitter, Linkedin].map((Icon, index) => (
//                   <a
//                     key={index}
//                     href="#"
//                     className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110"
//                   >
//                     <Icon className="w-5 h-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 CircuitCanvas. All rights reserved. Built with ⚡ and innovation.</p>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         @keyframes gradient-x {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
        
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }
        
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 3s ease infinite;
//         }
        
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
        
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
        
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default CircuitCanvas;

'use client';
import React, { useState, useEffect } from 'react';
import { 
  Zap, Cpu, Layers, Sparkles, ArrowRight, Play, Users, 
  Github, Twitter, Linkedin, Menu, X, Shield, Rocket, Globe,
  Monitor, Smartphone, Tablet, Brain, Star,
  CheckCircle, ArrowUp, MessageCircle, Download, Share2, Settings,
  CircuitBoard,
  CloudLightning
} from 'lucide-react';

const CircuitCanvas: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 6);
    }, 4000);
    
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(featureInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const features = [
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Intuitive Design",
      description: "Drag-and-drop interface with smart components and AI-powered suggestions"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Real-time Simulation",
      description: "Test your circuits instantly with our advanced physics engine"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Professional Tools",
      description: "Export-ready designs for manufacturing and 3D visualization"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Assistant",
      description: "Get intelligent suggestions and automated error detection"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cloud Sync",
      description: "Access your projects anywhere with real-time collaboration"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards"
    }
  ];

  const stats = [
    { number: "150K+", label: "Circuits Created", icon: <CircuitBoard className="w-6 h-6" /> },
    { number: "50K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Rocket className="w-6 h-6" /> },
    { number: "200+", label: "Countries", icon: <Globe className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Hardware Engineer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      content: "CircuitCanvas has revolutionized our design process. The AI suggestions are incredibly accurate.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Electronics Professor",
      company: "MIT",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "My students love the intuitive interface. It's made teaching circuit design so much more engaging.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Product Manager",
      company: "InnovateTech",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "The collaboration features are game-changing. Our team can work together seamlessly from anywhere.",
      rating: 5
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: ["5 Projects", "Basic Components", "Community Support", "2GB Storage"],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      features: ["Unlimited Projects", "Advanced Components", "Priority Support", "50GB Storage", "AI Assistant", "Real-time Collaboration"],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      features: ["Everything in Pro", "Custom Components", "Dedicated Support", "Unlimited Storage", "SSO Integration", "Advanced Analytics"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Enhanced Navigation with Mobile Menu */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-30 animate-ping"></div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                CircuitCanvas
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
                <a
                href="#features"
                className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                href="#canvas"
                className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                Canvas
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                href="#pricing"
                className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a
                href="#testimonials"
                className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-2 rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
              <div className="space-y-4">
                <a
                  href="#features"
                  className="block py-2 px-4 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#canvas"
                  className="block py-2 px-4 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Canvas
                </a>
                <a
                  href="#pricing"
                  className="block py-2 px-4 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="block py-2 px-4 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 rounded-full hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative z-10 px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                New: AI-Powered Circuit Analysis
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Revolutionary
              </span>
              <br />
              <span className="text-white">Circuit Design</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Design, simulate, and prototype circuits with our AI-powered canvas platform. 
              Where cutting-edge technology meets intuitive design.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Start Creating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-cyan-400/10 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Device Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Monitor className="w-5 h-5 text-gray-400" />
                    <Tablet className="w-5 h-5 text-gray-400" />
                    <Smartphone className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-6 gap-4 mb-6">
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-16 rounded-xl transition-all duration-1000 ${
                        i % 4 === 0 ? 'bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 border border-cyan-500/50' :
                        i % 4 === 1 ? 'bg-gradient-to-br from-purple-500/30 to-purple-600/30 border border-purple-500/50' :
                        i % 4 === 2 ? 'bg-gradient-to-br from-pink-500/30 to-pink-600/30 border border-pink-500/50' :
                        'bg-gradient-to-br from-green-500/30 to-green-600/30 border border-green-500/50'
                      }`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    ></div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                      <CloudLightning className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-gray-400">Simulation Running</span>
                  </div>
                  <div className="h-2 w-32 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-ping animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-60 animate-float ${
                i % 3 === 0 ? 'w-2 h-2 bg-cyan-400' :
                i % 3 === 1 ? 'w-3 h-3 bg-purple-400' : 'w-1 h-1 bg-pink-400'
              }`}
              style={{
                // left: `${Math.random() * 100}%`,
                // top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Powerful Features
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to bring your circuit ideas to life with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                  activeFeature === index ? 'ring-2 ring-cyan-400/50 shadow-2xl shadow-cyan-500/20' : ''
                }`}
              >
                <div className="text-cyan-400 mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Canvas Section */}
      <section id="canvas" className="relative z-10 px-6 py-32 bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered Canvas
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the future of circuit design with our revolutionary AI-powered canvas. 
                Intelligent suggestions, real-time optimization, and seamless collaboration.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Brain className="w-6 h-6" />, title: 'Smart Component Library', desc: 'AI-curated components for your specific needs' },
                  { icon: <Users className="w-6 h-6" />, title: 'Real-time Collaboration', desc: 'Work together with your team in real-time' },
                  { icon: <CloudLightning className="w-6 h-6" />, title: 'Advanced Simulation', desc: 'Physics-based simulation with instant feedback' },
                  { icon: <Shield className="w-6 h-6" />, title: 'Error Prevention', desc: 'AI-powered error detection and suggestions' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                      </h5>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Try Canvas Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl">
                {/* Canvas Toolbar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700/50">
                  <div className="flex items-center space-x-4">
                    <div className="flex space-x-2">
                      {[Settings, Download, Share2].map((Icon, i) => (
                        <button key={i} className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-300">
                          <Icon className="w-4 h-4" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live</span>
                  </div>
                </div>

                {/* Canvas Grid */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-16 rounded-xl transition-all duration-1000 ${
                        i % 5 === 0 ? 'bg-gradient-to-br from-cyan-500/40 to-cyan-600/40 border border-cyan-500/60 shadow-lg shadow-cyan-500/20' :
                        i % 5 === 1 ? 'bg-gradient-to-br from-purple-500/40 to-purple-600/40 border border-purple-500/60 shadow-lg shadow-purple-500/20' :
                        i % 5 === 2 ? 'bg-gradient-to-br from-pink-500/40 to-pink-600/40 border border-pink-500/60 shadow-lg shadow-pink-500/20' :
                        i % 5 === 3 ? 'bg-gradient-to-br from-green-500/40 to-green-600/40 border border-green-500/60 shadow-lg shadow-green-500/20' :
                        'bg-gradient-to-br from-slate-600/40 to-slate-700/40 border border-slate-600/60'
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
                
                {/* Status Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-400">AI Analyzing...</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Circuit Valid</span>
                    </div>
                  </div>
                  <div className="h-2 w-40 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Floating Action Buttons */}
              <div className="absolute -top-6 -right-6 flex flex-col space-y-3">
                {[MessageCircle, Star, Download].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border transition-all duration-500 transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20 ring-2 ring-cyan-400/20' 
                    : 'border-slate-700/50 hover:border-cyan-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
                  <div className="mb-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 shadow-lg hover:shadow-xl hover:shadow-purple-500/30'
                    : 'border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-32 bg-gradient-to-r from-slate-900/80 to-purple-900/80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Our Users Say
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied engineers and designers worldwide
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-8 py-12">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl text-gray-300 mb-8 italic leading-relaxed">
                        {testimonial.content}
                      </blockquote>
                      
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-cyan-400/50"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-gray-400">{testimonial.role}</div>
                          <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110">
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Innovate?
              </h3>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Join the revolution in circuit design. Start building the future today with CircuitCanvas.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="group bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-4 rounded-full text-xl font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 flex items-center space-x-3">
                  <Rocket className="w-6 h-6" />
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="group border border-gray-600 hover:border-cyan-400 px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:bg-cyan-400/10 flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6" />
                  <span>Contact Sales</span>
                </button>
              </div>
              
              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 px-6 py-20 border-t border-slate-800/50 bg-gradient-to-br from-slate-900/90 to-purple-900/90">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-30 animate-ping"></div>
                </div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  CircuitCanvas
                </h4>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering the next generation of circuit designers with AI-powered, 
                intuitive tools that make innovation accessible to everyone.
              </p>
              <div className="flex space-x-4">
                {[
                  { Icon: Github, href: '#', label: 'GitHub' },
                  { Icon: Twitter, href: '#', label: 'Twitter' },
                  { Icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map(({ Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    aria-label={label}
                    className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-6 text-cyan-400">Product</h5>
              <div className="space-y-3">
                {['Features', 'Pricing', 'Documentation', 'API', 'Integrations', 'Changelog'].map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-6 text-purple-400">Company</h5>
              <div className="space-y-3">
                {['About', 'Blog', 'Careers', 'Press', 'Partners', 'Contact'].map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-6 text-pink-400">Support</h5>
              <div className="space-y-3">
                {['Help Center', 'Community', 'Tutorials', 'Status', 'Security', 'Privacy'].map((item) => (
                  <a key={item} href="#" className="block text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800/50 mt-16 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2025 CircuitCanvas. All rights reserved. Built with ⚡ and innovation.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform ${
          showScrollTop ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        } hover:scale-110`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Enhanced Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1e293b;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }
      `}</style>
    </div>
  )}
  export default CircuitCanvas;