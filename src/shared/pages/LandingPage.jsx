  // import Navbar from "../../features/main/navbar/Navbar";
  // import tadobaImg from "../../assets/tadoba.jpg"
  // import sanjaygandhi from "../../assets/sanjay_gandhi.jpg"
  // import melgath from "../../assets/melghtat.jpg"
  // import { useState, useEffect, useRef } from "react";

  // const heroImages = [
  //   "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80", // Tiger
  //   "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?q=80&w=2070&auto=format&fit=crop&w=1600&q=80", // Safari Jeep
  //   "https://images.unsplash.com/photo-1592784201029-bdb351d47eff?q=80&w=2234&auto=format&fit=crop&w=1600&q=80", // Jungle sunset
  // ];

  // const parks = [
  //   {
  //     "name": "Tadoba Andhari Tiger Reserve",
  //     "location": "Chandrapur, Maharashtra",
  //     "img": tadobaImg,
  //     "desc": "The jewel of Maharashtra's wildlife, famous for thrilling tiger sightings and dense forests.",
  //     "highlights": ["Tiger Sightings", "Dense Forests", "Night Safaris"],
  //     "rating": 4.8,
  //     "visitors": "50K+"
  //   },
  //   {
  //     "name": "Sanjay Gandhi National Park",
  //     "location": "Mumbai, Maharashtra", 
  //     "img": sanjaygandhi,
  //     "desc": "A unique urban national park, home to Kanheri Caves, lion and tiger safaris, and diverse flora and fauna.",
  //     "highlights": ["Urban Wildlife", "Kanheri Caves", "Diverse Flora"],
  //     "rating": 4.6,
  //     "visitors": "100K+"
  //   },
  //   {
  //     "name": "Melghat Tiger Reserve",
  //     "location": "Amravati, Maharashtra",
  //     "img": melgath,
  //     "desc": "Located in the Satpura ranges, it is one of India's first tiger reserves under Project Tiger, known for rugged terrain and rich biodiversity.",
  //     "highlights": ["Project Tiger", "Rugged Terrain", "Rich Biodiversity"],
  //     "rating": 4.7,
  //     "visitors": "30K+"
  //   }
  // ];

  // const features = [
  //   {
  //     icon: "🦁",
  //     title: "Wildlife Safaris",
  //     desc: "Encounter majestic tigers, leopards, and rare wildlife in their natural habitats.",
  //     gradient: "from-emerald-500 to-teal-600",
  //     delay: "0ms",
  //     stats: "500+ Species"
  //   },
  //   {
  //     icon: "📱",
  //     title: "Easy Booking",
  //     desc: "Secure and hassle-free online booking system for tourists worldwide.",
  //     gradient: "from-orange-500 to-amber-600", 
  //     delay: "200ms",
  //     stats: "1-Click Booking"
  //   },
  //   {
  //     icon: "👨‍🏫",
  //     title: "Expert Guides",
  //     desc: "Professional guides ensure your safari is safe, exciting, and unforgettable.",
  //     gradient: "from-blue-500 to-indigo-600",
  //     delay: "400ms",
  //     stats: "Certified Experts"
  //   }
  // ];

  // export default function LandingPage() {
  //   const [currentImage, setCurrentImage] = useState(0);
  //   const [isVisible, setIsVisible] = useState({});
  //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //   const observerRef = useRef();

  //   useEffect(() => {
  //     const interval = setInterval(
  //       () => setCurrentImage((prev) => (prev + 1) % heroImages.length),
  //       6000
  //     );
  //     return () => clearInterval(interval);
  //   }, []);

  //   // Mouse tracking for parallax effects
  //   useEffect(() => {
  //     const handleMouseMove = (e) => {
  //       setMousePosition({ 
  //         x: (e.clientX / window.innerWidth) * 100, 
  //         y: (e.clientY / window.innerHeight) * 100 
  //       });
  //     };
  //     window.addEventListener('mousemove', handleMouseMove);
  //     return () => window.removeEventListener('mousemove', handleMouseMove);
  //   }, []);

  //   // Intersection Observer for scroll animations
  //   useEffect(() => {
  //     observerRef.current = new IntersectionObserver(
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
  //     elements.forEach(el => observerRef.current?.observe(el));

  //     return () => observerRef.current?.disconnect();
  //   }, []);

  //   return (
  //     <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black min-h-screen text-white overflow-x-hidden relative">
  //       <Navbar />

  //       {/* Enhanced Background Orbs */}
  //       <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
  //         <div 
  //           className="absolute w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse"
  //           style={{
  //             left: `${20 + mousePosition.x * 0.05}%`,
  //             top: `${30 + mousePosition.y * 0.03}%`,
  //           }}
  //         ></div>
  //         <div 
  //           className="absolute w-[32rem] h-[32rem] bg-emerald-500/15 rounded-full blur-3xl animate-pulse delay-1000"
  //           style={{
  //             right: `${15 + mousePosition.x * 0.03}%`,
  //             bottom: `${20 + mousePosition.y * 0.04}%`,
  //           }}
  //         ></div>
  //         <div 
  //           className="absolute w-80 h-80 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-500"
  //           style={{
  //             left: `${50 + mousePosition.x * 0.02}%`,
  //             top: `${50 + mousePosition.y * 0.02}%`,
  //           }}
  //         ></div>
  //       </div>

  //       {/* Hero Section - Enhanced with better animations */}
  //       <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
  //         <div className="absolute inset-0">
  //           {heroImages.map((img, index) => (
  //             <div
  //               key={index}
  //               className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out transform ${
  //                 index === currentImage 
  //                   ? 'opacity-100 scale-110' 
  //                   : 'opacity-0 scale-105'
  //               }`}
  //               style={{ backgroundImage: `url(${img})` }}
  //             />
  //           ))}
  //         </div>
          
  //         {/* Enhanced gradient overlay with animated mesh */}
  //         <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-emerald-900/50"></div>
  //         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
  //         {/* Dynamic floating elements */}
  //         <div className="absolute inset-0 overflow-hidden pointer-events-none">
  //           {[...Array(25)].map((_, i) => (
  //             <div
  //               key={i}
  //               className="absolute rounded-full animate-pulse opacity-40"
  //               style={{
  //                 width: `${Math.random() * 4 + 1}px`,
  //                 height: `${Math.random() * 4 + 1}px`,
  //                 backgroundColor: i % 3 === 0 ? '#fb923c' : i % 3 === 1 ? '#10b981' : '#fbbf24',
  //                 left: `${Math.random() * 100}%`,
  //                 top: `${Math.random() * 100}%`,
  //                 animationDelay: `${Math.random() * 4}s`,
  //                 animationDuration: `${3 + Math.random() * 4}s`,
  //                 transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
  //               }}
  //             />
  //           ))}
  //         </div>

  //         <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
  //           <div className="animate-[fadeInUp_1.2s_ease-out]">
  //             <div className="relative mb-8">
  //               <h1 className="text-6xl sm:text-8xl lg:text-7xl font-black mb-4 tracking-tight leading-none">
  //                 Discover{" "}
  //                 <span className="relative">
  //                   <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent animate-pulse">
  //                     SafariZone
  //                   </span>
  //                   {/* Glow effect */}
  //                   <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 blur-2xl opacity-30 -z-10"></div>
  //                 </span>
  //               </h1>
  //               {/* Decorative elements */}
  //               <div className="absolute -top-8 -left-8 text-4xl opacity-60 animate-bounce delay-1000">🌿</div>
  //               <div className="absolute -top-4 -right-12 text-3xl opacity-60 animate-bounce delay-1500">🦅</div>
  //             </div>
              
  //             <p className="text-xl sm:text-3xl lg:text-4xl max-w-5xl mx-auto text-slate-200 mb-16 font-light leading-relaxed">
  //               Experience the <span className="text-emerald-400 font-bold relative">
  //                 untamed beauty
  //                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>
  //               </span> of Maharashtra's jungles.
  //               <br className="hidden sm:block" />
  //               Tigers, leopards, and <span className="text-amber-400 font-semibold">epic adventures</span> await your discovery.
  //             </p>
              
  //             <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
  //               <button className="group relative px-12 py-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-emerald-500/30 hover:scale-110 transform transition-all duration-500 hover:from-emerald-500 hover:to-teal-600 overflow-hidden border border-emerald-500/20">
  //                 <span className="relative z-10 flex items-center space-x-3">
  //                   <span>🌿</span>
  //                   <span>Book a Safari</span>
  //                   <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  //                   </svg>
  //                 </span>
  //                 {/* Enhanced shimmer effect */}
  //                 <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
  //                 {/* Pulse ring */}
  //                 <div className="absolute inset-0 rounded-3xl border-2 border-emerald-400/50 animate-ping"></div>
  //               </button>
                
  //               <button className="group px-12 py-6 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-orange-500/30 hover:scale-110 transform transition-all duration-500 hover:from-orange-400 hover:to-amber-500 border border-orange-500/20">
  //                 <span className="flex items-center space-x-3">
  //                   <span>🗺️</span>
  //                   <span>Explore Packages</span>
  //                   <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  //                   </svg>
  //                 </span>
  //               </button>
  //             </div>
  //           </div>

  //           {/* Enhanced image indicators */}
  //           <div className="flex justify-center space-x-4">
  //             {heroImages.map((_, index) => (
  //               <button
  //                 key={index}
  //                 onClick={() => setCurrentImage(index)}
  //                 className={`group relative transition-all duration-500 ${
  //                   index === currentImage 
  //                     ? 'w-12 h-3' 
  //                     : 'w-3 h-3 hover:w-6'
  //                 }`}
  //               >
  //                 <div className={`w-full h-full rounded-full transition-all duration-500 ${
  //                   index === currentImage 
  //                     ? 'bg-gradient-to-r from-orange-400 to-amber-500' 
  //                     : 'bg-white/30 hover:bg-white/50'
  //                 }`} />
  //                 {index === currentImage && (
  //                   <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full blur-sm animate-pulse"></div>
  //                 )}
  //               </button>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Enhanced Features Section */}
  //       <section className="max-w-7xl mx-auto px-6 py-32 relative">
  //         <div 
  //           id="features"
  //           data-animate
  //           className={`transform transition-all duration-1500 ${
  //             isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
  //           }`}
  //         >
  //           <div className="text-center mb-20">
  //             <h2 className="text-6xl font-black mb-6 relative">
  //               <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
  //                 Why Choose SafariZone?
  //               </span>
  //               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
  //             </h2>
  //             <p className="text-center text-slate-400 text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
  //               Embark on extraordinary adventures with our world-class safari experiences
  //             </p>
  //             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto rounded-full"></div>
  //           </div>
            
  //           <div className="grid lg:grid-cols-3 gap-12">
  //             {features.map((feature, idx) => (
  //               <div
  //                 key={idx}
  //                 className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 text-center hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-700 hover:border-emerald-500/40 overflow-hidden"
  //                 style={{ animationDelay: feature.delay }}
  //               >
  //                 {/* Animated background gradient */}
  //                 <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}></div>
                  
  //                 {/* Floating orb */}
  //                 <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-700`}></div>
                  
  //                 <div className="relative z-10">
  //                   <div className="text-7xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
  //                     {feature.icon}
  //                   </div>
  //                   <h3 className="text-3xl font-bold mb-4 text-emerald-300 group-hover:text-emerald-200 transition-colors">
  //                     {feature.title}
  //                   </h3>
  //                   <p className="text-slate-300 leading-relaxed text-lg mb-6 group-hover:text-slate-200 transition-colors">
  //                     {feature.desc}
  //                   </p>
  //                   <div className="inline-flex items-center px-4 py-2 bg-slate-700/50 rounded-full text-emerald-400 text-sm font-semibold">
  //                     <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
  //                     {feature.stats}
  //                   </div>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Enhanced Parks Section */}
  //       <section className="bg-gradient-to-b from-slate-900/50 to-black py-32 relative overflow-hidden">
  //         {/* Enhanced background pattern */}
  //         <div className="absolute inset-0 opacity-10">
  //           <svg className="w-full h-full" viewBox="0 0 100 100">
  //             <defs>
  //               <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
  //                 <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#gradient)" strokeWidth="0.5"/>
  //                 <circle cx="0" cy="0" r="0.5" fill="url(#gradient)" opacity="0.3"/>
  //               </pattern>
  //               <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
  //                 <stop offset="0%" stopColor="#10b981"/>
  //                 <stop offset="100%" stopColor="#f59e0b"/>
  //               </linearGradient>
  //             </defs>
  //             <rect width="100" height="100" fill="url(#grid)" />
  //           </svg>
  //         </div>

  //         <div className="max-w-7xl mx-auto px-6 relative z-10">
  //           <div 
  //             id="parks"
  //             data-animate
  //             className={`text-center mb-20 transform transition-all duration-1500 ${
  //               isVisible.parks ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
  //             }`}
  //           >
  //             <h2 className="text-6xl font-black mb-6 relative">
  //               <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
  //                 Explore National Parks
  //               </span>
  //               <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
  //             </h2>
  //             <p className="text-slate-400 text-2xl max-w-4xl mx-auto leading-relaxed">
  //               Discover the magnificent wildlife reserves of Maharashtra, each offering unique experiences and breathtaking encounters
  //             </p>
  //           </div>
            
  //           <div className="grid lg:grid-cols-3 gap-12">
  //             {parks.map((park, idx) => (
  //               <div
  //                 key={idx}
  //                 className="group bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transform transition-all duration-700 hover:border-orange-500/40"
  //                 style={{ animationDelay: `${idx * 200}ms` }}
  //               >
  //                 <div className="relative overflow-hidden">
  //                   <img
  //                     src={park.img}
  //                     alt={park.name}
  //                     className="w-full h-72 object-cover group-hover:scale-120 transition-transform duration-1000"
  //                   />
  //                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
  //                   {/* Enhanced floating highlights */}
  //                   <div className="absolute top-4 left-4 flex flex-wrap gap-2">
  //                     {park.highlights.map((highlight, hIdx) => (
  //                       <span
  //                         key={hIdx}
  //                         className="px-3 py-1 bg-emerald-600/90 text-white text-xs font-bold rounded-full backdrop-blur-sm hover:bg-emerald-500 transition-colors border border-emerald-400/30"
  //                       >
  //                         {highlight}
  //                       </span>
  //                     ))}
  //                   </div>

  //                   {/* Rating and visitors */}
  //                   <div className="absolute top-4 right-4 flex flex-col space-y-2">
  //                     <div className="flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
  //                       <span className="text-yellow-400 text-sm">⭐</span>
  //                       <span className="text-white text-xs font-semibold ml-1">{park.rating}</span>
  //                     </div>
  //                     <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
  //                       <span className="text-slate-200 text-xs font-semibold">{park.visitors}</span>
  //                     </div>
  //                   </div>
  //                 </div>
                  
  //                 <div className="p-8">
  //                   <h3 className="text-2xl font-bold text-orange-300 mb-3 group-hover:text-orange-200 transition-colors">
  //                     {park.name}
  //                   </h3>
  //                   <div className="flex items-center text-slate-400 mb-4">
  //                     <svg className="w-5 h-5 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
  //                       <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  //                     </svg>
  //                     <span className="font-medium">{park.location}</span>
  //                   </div>
  //                   <p className="text-slate-300 mb-8 leading-relaxed">
  //                     {park.desc}
  //                   </p>
                    
  //                   <button className="group/btn relative w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold rounded-2xl shadow-lg hover:shadow-emerald-500/30 hover:from-emerald-500 hover:to-teal-600 transform hover:scale-105 transition-all duration-500 overflow-hidden">
  //                     <span className="relative z-10 flex items-center justify-center space-x-2">
  //                       <span>View Details</span>
  //                       <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  //                       </svg>
  //                     </span>
  //                     <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
  //                   </button>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>

  //       {/* Enhanced Footer */}
  //       <footer className="bg-gradient-to-r from-black via-slate-900 to-black border-t border-slate-700/50 py-20 relative overflow-hidden">
  //         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
  //         <div className="max-w-7xl mx-auto px-6 relative z-10">
  //           <div className="text-center mb-16">
  //             <div className="flex items-center justify-center space-x-4 mb-6">
  //               <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl">
  //                 <span className="text-3xl">🦁</span>
  //               </div>
  //               <h3 className="text-4xl font-black bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
  //                 SafariZone
  //               </h3>
  //             </div>
  //             <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
  //               Creating unforgettable wildlife experiences in the heart of Maharashtra's pristine forests
  //             </p>
  //           </div>
            
  //           <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-700/50 pt-10">
  //             <p className="text-slate-400 text-lg">
  //               &copy; {new Date().getFullYear()}{" "}
  //               <span className="text-orange-400 font-bold">SafariZone</span>.
  //               All rights reserved.
  //             </p>

  //             <div className="flex space-x-10 mt-6 md:mt-0">
  //               {[
  //                 { name: 'Facebook', icon: '📘' },
  //                 { name: 'Instagram', icon: '📷' },
  //                 { name: 'Twitter', icon: '🐦' }
  //               ].map((social) => (
  //                 <a
  //                   key={social.name}
  //                   href="#"
  //                   className="group flex items-center space-x-2 text-slate-400 hover:text-orange-400 transform hover:scale-110 transition-all duration-300 font-medium px-4 py-2 rounded-xl hover:bg-slate-800/30"
  //                 >
  //                   <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
  //                   <span>{social.name}</span>
  //                 </a>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </footer>
  //     </div>
  //   );
  // }
