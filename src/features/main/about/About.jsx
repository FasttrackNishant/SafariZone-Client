import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import BackgroundOrbs from "./BackgroundOrbs";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import StatsSection from "./StatsSection";
import Footer from "../footer/Footer";
import DeveloperSection from "./DeveloperSection";

export default function About() {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <BackgroundOrbs />
      <HeroSection visibleSections={visibleSections} />
      <MissionSection visibleSections={visibleSections} />
      <StatsSection visibleSections={visibleSections} />
      <DeveloperSection visibleSections={visibleSections} />
      <Footer />
    </div>
  );
}




// import { useState, useEffect } from "react";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";

// export default function About() {
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const elements = document.querySelectorAll('[data-animate]');
//     elements.forEach(el => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black min-h-screen text-white overflow-x-hidden">
//       <Navbar />

//       {/* Enhanced Background Orbs */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
//       </div>

//       {/* Enhanced Hero Section */}
//       <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-cover bg-center scale-105"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')",
//           }}
//         />
        
//         {/* Enhanced Overlays */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-emerald-900/50"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
//         {/* Floating Particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(15)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute rounded-full animate-pulse opacity-40"
//               style={{
//                 width: `${Math.random() * 3 + 1}px`,
//                 height: `${Math.random() * 3 + 1}px`,
//                 backgroundColor: i % 3 === 0 ? '#fb923c' : i % 3 === 1 ? '#10b981' : '#fbbf24',
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 animationDuration: `${2 + Math.random() * 3}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//           <div className="animate-[fadeInUp_1s_ease-out]">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none">
//               About{" "}
//               <span className="relative">
//                 <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   SafariZone
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 blur-lg opacity-20 -z-10"></div>
//               </span>
//             </h1>
            
//             <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-200 font-light leading-relaxed">
//               Connecting people with <span className="text-emerald-400 font-bold">nature</span>, 
//               adventure, and conservation in the heart of Maharashtra's pristine wilderness.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <div 
//           id="mission"
//           data-animate
//           className={`transform transition-all duration-1500 ${
//             isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
//           }`}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-black mb-6 relative">
//               <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
//                 Our Mission
//               </span>
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full mb-8"></div>
//           </div>
          
//           <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 lg:p-12 shadow-2xl">
//             <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-5xl mx-auto text-center">
//               SafariZone was created with a <span className="text-orange-400 font-semibold">vision to make Maharashtra's wildlife sanctuaries</span> and national parks accessible to everyone. From booking safaris online to providing seamless digital experiences, our mission is to blend <span className="text-emerald-400 font-semibold">adventure with conservation</span> – ensuring nature is preserved while creating unforgettable memories for generations to come.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Stats Section */}
//       <section className="bg-gradient-to-b from-slate-900/50 to-slate-800/50 py-24 border-y border-slate-700/30">
//         <div className="max-w-7xl mx-auto px-6">
//           <div 
//             id="stats"
//             data-animate
//             className={`transform transition-all duration-1500 ${
//               isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
//             }`}
//           >
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 { 
//                   number: "50K+", 
//                   label: "Happy Visitors", 
//                   icon: "👥", 
//                   color: "from-emerald-500 to-teal-600",
//                   delay: "0ms"
//                 },
//                 { 
//                   number: "500+", 
//                   label: "Wildlife Species", 
//                   icon: "🦁", 
//                   color: "from-orange-500 to-amber-600",
//                   delay: "200ms"
//                 },
//                 { 
//                   number: "3", 
//                   label: "National Parks", 
//                   icon: "🌲", 
//                   color: "from-blue-500 to-indigo-600",
//                   delay: "400ms"
//                 }
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-700 hover:border-slate-500/50 overflow-hidden"
//                   style={{ animationDelay: stat.delay }}
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}></div>
//                   <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-700`}></div>
                  
//                   <div className="relative z-10">
//                     <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                       {stat.icon}
//                     </div>
//                     <h3 className="text-4xl font-black text-slate-100 mb-2 group-hover:text-white transition-colors">
//                       {stat.number}
//                     </h3>
//                     <p className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
//                       {stat.label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Developer Section */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <div 
//           id="developer"
//           data-animate
//           className={`transform transition-all duration-1500 ${
//             isVisible.developer ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
//           }`}
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-4xl sm:text-5xl font-black mb-6 relative">
//               <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                 Behind SafariZone
//               </span>
//               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
//             </h2>
//           </div>
          
//           <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 lg:p-12 shadow-2xl">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="mb-8">
//                 <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
//                   <span className="text-4xl">🚀</span>
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-200 mb-4">Project Vision</h3>
//                 <p className="text-lg text-slate-300 leading-relaxed mb-6">
//                   SafariZone is a <span className="text-emerald-400 font-semibold">full-stack demonstration project</span> designed to showcase modern web development, cloud integration, and enterprise-grade architecture patterns.
//                 </p>
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-8 mb-10">
//                 <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
//                   <h4 className="text-xl font-bold text-emerald-300 mb-3">🛠️ Tech Stack</h4>
//                   <ul className="text-slate-300 text-sm space-y-2">
//                     <li>• React + Vite + TailwindCSS</li>
//                     <li>• JWT + Azure AD Integration</li>
//                     <li>• Microservices Architecture</li>
//                     <li>• Cloud-Ready Deployment</li>
//                   </ul>
//                 </div>
//                 <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
//                   <h4 className="text-xl font-bold text-orange-300 mb-3">🎯 Features</h4>
//                   <ul className="text-slate-300 text-sm space-y-2">
//                     <li>• Modern UI/UX Design</li>
//                     <li>• Responsive Architecture</li>
//                     <li>• Authentication System</li>
//                     <li>• Booking Management</li>
//                   </ul>
//                 </div>
//               </div>
              
//               <div className="border-t border-slate-600/30 pt-8">
//                 <p className="text-xl font-bold text-slate-200 mb-2">
//                   Crafted with ❤️ by{" "}
//                   <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent font-black">
//                     DevNishant
//                   </span>
//                 </p>
//                 <p className="text-slate-400 text-sm">
//                   Demonstrating enterprise-level development skills for modern web applications
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Footer */}
//      <Footer/>
//     </div>
//   );
// }
