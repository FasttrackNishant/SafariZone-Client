import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import parkData from "./parks.json";
import Navbar from "../main/navbar/Navbar";
import Footer from "../main/footer/Footer";
import LoadingSpinner from "../utils/components/LoadingSpinner";
import ParkHeroSection from "./ParkHeroSection";
import ParkHighlights from "./ParkHighlights";
import SafariZonesSection from "./SafariZonesSection";
import ParkRules from "./ParkRules";
import BackgroundOrbs from "./BackgroundOrbs";

export default function ParkDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [park, setPark] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const parkInfo = parkData.parks[id];
    console.log(parkInfo);
    if (parkInfo) {
      setPark(parkInfo);
      setSelectedZone(parkInfo.zones[0].zoneId);
    }
  }, [id]);

  // Fixed Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.id;
          if (entry.isIntersecting && elementId) {
            console.log('Revealing section:', elementId);
            setIsVisible(prev => ({ ...prev, [elementId]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('[data-animate]');
      console.log('Found elements to observe:', elements.length);
      elements.forEach(el => {
        if (el.id) {
          console.log('Observing element:', el.id);
          observer.observe(el);
        }
      });
    };

    const timeoutId = setTimeout(observeElements, 100);
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (park?.images) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % park.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [park]);

  const handleBookSafari = (zoneId, sessionId, vehicleType) => {
    navigate(`/book-safari/${park.parkId}/${zoneId}/${sessionId}/${vehicleType}`);
  };

  if (!park) {
    return <LoadingSpinner loadingText="Loading park details.." />;
  }

  const currentZone = park.zones.find(zone => zone.zoneId === selectedZone);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-x-hidden">
      <Navbar />
      <BackgroundOrbs />
      
      <ParkHeroSection 
        park={park}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      
      <ParkHighlights 
        highlights={park.highlights}
        isVisible={isVisible.highlights}
      />
      
      <SafariZonesSection 
        zones={park.zones}
        selectedZone={selectedZone}
        setSelectedZone={setSelectedZone}
        currentZone={currentZone}
        isVisible={isVisible.safaris}
        onBookSafari={handleBookSafari}
      />
      
      <ParkRules 
        rules={park.rules}
        isVisible={isVisible.rules}
      />
      
      <Footer />
    </div>
  );
}


// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router";
// import parkData from "./parks.json";
// import Navbar from "../main/navbar/Navbar";
// import Footer from "../main/footer/Footer";

// export default function ParkDetailPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [park, setPark] = useState(null);
//   const [selectedZone, setSelectedZone] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState({});

//   useEffect(() => {
//     const parkInfo = parkData.parks[id];
//     console.log(parkInfo)
//     if (parkInfo) {
//       setPark(parkInfo);
//       setSelectedZone(parkInfo.zones[0].zoneId);
//     }
//   }, [id]);

//   // Fixed Intersection Observer
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const elementId = entry.target.id;
//           if (entry.isIntersecting && elementId) {
//             console.log('Revealing section:', elementId); // Debug log
//             setIsVisible(prev => ({ ...prev, [elementId]: true }));
//             // Optional: unobserve after revealing
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { 
//         threshold: 0.1,
//         rootMargin: '0px 0px -100px 0px' // Trigger 100px before element is fully visible
//       }
//     );

//     // Wait for DOM to be ready before observing
//     const observeElements = () => {
//       const elements = document.querySelectorAll('[data-animate]');
//       console.log('Found elements to observe:', elements.length); // Debug log
//       elements.forEach(el => {
//         if (el.id) {
//           console.log('Observing element:', el.id); // Debug log
//           observer.observe(el);
//         }
//       });
//     };

//     // Use timeout to ensure DOM is ready
//     const timeoutId = setTimeout(observeElements, 100);
    
//     return () => {
//       clearTimeout(timeoutId);
//       observer.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     if (park?.images) {
//       const interval = setInterval(() => {
//         setCurrentImageIndex((prev) => (prev + 1) % park.images.length);
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [park]);

//   const handleBookSafari = (zoneId, sessionId, vehicleType) => {
//     navigate(`/book-safari/${park.parkId}/${zoneId}/${sessionId}/${vehicleType}`);
//   };

//   if (!park) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-xl">Loading park details...</p>
//         </div>
//       </div>
//     );
//   }

//   const currentZone = park.zones.find(zone => zone.zoneId === selectedZone);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-x-hidden">
//       <Navbar />

//       {/* Enhanced Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
//       </div>

//       {/* Hero Section with Image Carousel */}
//       <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           {park.images.map((img, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out ${
//                 index === currentImageIndex
//                   ? 'opacity-100 scale-105'
//                   : 'opacity-0 scale-100'
//               }`}
//               style={{ backgroundImage: `url(${img})` }}
//             />
//           ))}
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-emerald-900/50"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

//         <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//           <div className="animate-[fadeInUp_1s_ease-out]">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none">
//               <span className="relative">
//                 <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
//                   {park.name}
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 blur-lg opacity-20 -z-10"></div>
//               </span>
//             </h1>

//             <div className="flex items-center justify-center space-x-2 mb-6">
//               <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//               </svg>
//               <span className="text-xl text-emerald-400 font-semibold">{park.location}</span>
//             </div>

//             <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-200 mb-8 font-light leading-relaxed">
//               {park.description}
//             </p>

//             {/* Quick Park Stats */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
//                 <div className="text-2xl font-bold text-emerald-400">Est. {park.established}</div>
//                 <div className="text-slate-400 text-sm">Established</div>
//               </div>
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
//                 <div className="text-2xl font-bold text-orange-400">{park.area}</div>
//                 <div className="text-slate-400 text-sm">Total Area</div>
//               </div>
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
//                 <div className="text-2xl font-bold text-amber-400">{park.zones.length}</div>
//                 <div className="text-slate-400 text-sm">Safari Zones</div>
//               </div>
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
//                 <div className="text-2xl font-bold text-teal-400">{park.bestTime}</div>
//                 <div className="text-slate-400 text-sm">Best Time</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Image indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {park.images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentImageIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentImageIndex
//                   ? 'bg-orange-400 scale-125'
//                   : 'bg-white/40 hover:bg-white/60'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Park Highlights */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <div
//           id="highlights"
//           data-animate
//           className={`transform transition-all duration-1500 ${
//             isVisible.highlights ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
//           }`}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-black mb-6 relative">
//               <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
//                 Park Highlights
//               </span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {park.highlights.map((highlight, index) => (
//               <div
//                 key={index}
//                 className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-700 hover:border-emerald-500/50"
//                 style={{ animationDelay: `${index * 150}ms` }}
//               >
//                 <div className="text-4xl mb-4">🌿</div>
//                 <h3 className="text-lg font-bold text-emerald-300 mb-2">{highlight}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Safari Zones & Bookings */}
//       <section className="bg-gradient-to-b from-slate-900/50 to-slate-800/50 py-24 border-y border-slate-700/30">
//         <div className="max-w-7xl mx-auto px-6">
//           <div
//             id="safaris"
//             data-animate
//             className={`transform transition-all duration-1500 ${
//               isVisible.safaris ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
//             }`}
//           >
//             <div className="text-center mb-16">
//               <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
//                 Available Safaris
//               </h2>
//               <p className="text-slate-400 text-xl">Choose your zone and book your wildlife adventure</p>
//             </div>

//             {/* Zone Selection */}
//             <div className="flex justify-center mb-12">
//               <div className="bg-slate-800/50 rounded-2xl p-1 border border-slate-700/30">
//                 {park.zones.map((zone) => (
//                   <button
//                     key={zone.zoneId}
//                     onClick={() => setSelectedZone(zone.zoneId)}
//                     className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                       selectedZone === zone.zoneId
//                         ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg'
//                         : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
//                     }`}
//                   >
//                     {zone.name}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Selected Zone Info */}
//             {currentZone && (
//               <div className="mb-12">
//                 <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center">
//                   <h3 className="text-3xl font-bold text-orange-400 mb-4">{currentZone.name}</h3>
//                   <p className="text-slate-300 text-lg max-w-3xl mx-auto">{currentZone.description}</p>
//                 </div>
//               </div>
//             )}

//             {/* Safari Sessions */}
//             <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//               {currentZone?.safaris.map((safari, index) => (
//                 <div
//                   key={safari.sessionId}
//                   className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-700 hover:border-emerald-500/50"
//                   style={{ animationDelay: `${index * 200}ms` }}
//                 >
//                   <div className="text-center mb-6">
//                     <div className="text-5xl mb-4">
//                       {safari.sessionId === 'morning' ? '🌅' : safari.sessionId === 'evening' ? '🌇' : '🌙'}
//                     </div>
//                     <h3 className="text-2xl font-bold text-emerald-300 mb-2">{safari.name}</h3>
//                     <p className="text-slate-400 mb-2">{safari.timing}</p>
//                     <p className="text-slate-500 text-sm">Duration: {safari.duration}</p>
//                   </div>

//                   <div className="space-y-4">
//                     {safari.vehicles.map((vehicle, vIndex) => (
//                       <div
//                         key={vIndex}
//                         className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30"
//                       >
//                         <div className="flex items-center justify-between mb-4">
//                           <div className="flex items-center space-x-3">
//                             <span className="text-2xl">
//                               {vehicle.type === 'Jeep' ? '🚙' : '🚌'}
//                             </span>
//                             <div>
//                               <h4 className="text-lg font-bold text-slate-200">{vehicle.type}</h4>
//                               <p className="text-slate-400 text-sm">Capacity: {vehicle.capacity} people</p>
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <div className="text-emerald-400 font-bold text-lg">
//                               ₹{vehicle.pricePerSeat.toLocaleString()}/seat
//                             </div>
//                             <div className="text-slate-400 text-sm">
//                               ₹{(vehicle.type === 'Jeep' ? vehicle.pricePerJeep : vehicle.pricePerCanter).toLocaleString()}/vehicle
//                             </div>
//                           </div>
//                         </div>

//                         <div className="flex items-center justify-between mb-4">
//                           <div className="text-sm">
//                             <span className="text-slate-400">Available: </span>
//                             <span className={`font-semibold ${
//                               vehicle.availableSlots > 5 ? 'text-emerald-400' : 
//                               vehicle.availableSlots > 2 ? 'text-amber-400' : 'text-red-400'
//                             }`}>
//                               {vehicle.availableSlots}/{vehicle.totalSlots} slots
//                             </span>
//                           </div>
//                           <div className="flex items-center space-x-1">
//                             {[...Array(5)].map((_, i) => (
//                               <div
//                                 key={i}
//                                 className={`w-2 h-2 rounded-full ${
//                                   i < (vehicle.availableSlots / vehicle.totalSlots) * 5 
//                                     ? 'bg-emerald-400' 
//                                     : 'bg-slate-600'
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                         </div>

//                         <button
//                           onClick={() => handleBookSafari(selectedZone, safari.sessionId, vehicle.type.toLowerCase())}
//                           disabled={vehicle.availableSlots === 0}
//                           className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
//                             vehicle.availableSlots > 0
//                               ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white hover:scale-105 shadow-lg hover:shadow-emerald-500/25'
//                               : 'bg-slate-600 text-slate-400 cursor-not-allowed'
//                           }`}
//                         >
//                           {vehicle.availableSlots > 0 ? 'Book Now' : 'Sold Out'}
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Park Rules */}
//       <section className="max-w-7xl mx-auto px-6 py-24">
//         <div
//           id="rules"
//           data-animate
//           className={`transform transition-all duration-1500 ${
//             isVisible.rules ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
//           }`}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
//               Important Guidelines
//             </h2>
//             <p className="text-slate-400 text-xl">Please follow these rules for a safe and enjoyable safari</p>
//           </div>

//           <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10">
//             <div className="grid md:grid-cols-2 gap-6">
//               {park.rules.map((rule, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30"
//                 >
//                   <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
//                     <span className="text-white text-xs font-bold">!</span>
//                   </div>
//                   <p className="text-slate-300 leading-relaxed">{rule}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
