import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../main/navbar/Navbar';
import Footer from '../../main/footer/Footer';
import BackgroundOrbs from '../../booking/BackgroundOrbs';
import { parksData } from './parksData';

export default function ParksPage() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting && target.id) {
            setIsVisible(prev => ({ ...prev, [target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleBookSafari = (parkId) => {
    navigate(`/book-safari/${parkId}/core/morning/jeep`);
  };

  const nextImage = (parkId) => {
    const park = parksData.find(p => p.id === parkId);
    setSelectedImageIndex(prev => ({
      ...prev,
      [parkId]: ((prev[parkId] || 0) + 1) % park.images.length
    }));
  };

  const prevImage = (parkId) => {
    const park = parksData.find(p => p.id === parkId);
    setSelectedImageIndex(prev => ({
      ...prev,
      [parkId]: ((prev[parkId] || 0) - 1 + park.images.length) % park.images.length
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      <Navbar />
      <BackgroundOrbs />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            className="text-center mb-16"
            data-animate
            id="hero"
          >
            <h1 className={`text-6xl font-black mb-6 transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Explore Maharashtra's
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Wildlife Sanctuaries
              </span>
            </h1>
            <p className={`text-xl text-slate-300 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Discover the untamed beauty of nature across our premium national parks and tiger reserves.
              Experience wildlife like never before with our curated safari packages.
            </p>
          </div>
        </div>
      </section>

      {/* Parks Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="space-y-24">
          {parksData.map((park, index) => (
            <div
              key={park.id}
              data-animate
              id={`park-${park.id}`}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible[`park-${park.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden">
                {/* Park Header */}
                <div className="p-8 pb-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                        {park.name}
                      </h2>
                      <div className="flex items-center space-x-4 text-slate-300">
                        <span className="flex items-center">
                          📍 {park.location}
                        </span>
                        <span className="flex items-center">
                          📅 Est. {park.established}
                        </span>
                        <span className="flex items-center">
                          📏 {park.area}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400 text-xl">⭐</span>
                        <span className="text-xl font-bold text-slate-200">{park.rating}</span>
                      </div>
                      <div className="text-slate-400">
                        👥 {park.visitors} visitors
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Image Gallery */}
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={park.images[selectedImageIndex[park.id] || 0]}
                        alt={park.name}
                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={() => prevImage(park.id)}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => nextImage(park.id)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
                      >
                        →
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {park.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedImageIndex(prev => ({ ...prev, [park.id]: i }))}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              (selectedImageIndex[park.id] || 0) === i 
                                ? 'bg-emerald-400 w-6' 
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-4 gap-2">
                      {park.images.slice(0, 4).map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedImageIndex(prev => ({ ...prev, [park.id]: i }))}
                          className={`rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            (selectedImageIndex[park.id] || 0) === i 
                              ? 'border-emerald-400' 
                              : 'border-transparent'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${park.name} ${i + 1}`}
                            className="w-full h-16 object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Park Information */}
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {park.desc}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-xl font-semibold text-slate-200 mb-3 flex items-center">
                        ✨ Highlights
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {park.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold border border-emerald-500/30"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-200 mb-2 flex items-center">
                          🕒 Safari Timings
                        </h4>
                        <div className="space-y-1 text-slate-300">
                          <p>Morning: {park.safariTiming.morning}</p>
                          <p>Evening: {park.safariTiming.evening}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-200 mb-2 flex items-center">
                          💰 Entry Fee
                        </h4>
                        <p className="text-slate-300">{park.entryFee}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-200 mb-2 flex items-center">
                          🌤️ Best Time
                        </h4>
                        <p className="text-slate-300">{park.bestTimeToVisit}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-200 mb-2 flex items-center">
                          📱 Booking
                        </h4>
                        <p className="text-slate-300">{park.bookingInfo.advanceBooking} in advance</p>
                      </div>
                    </div>

                    {/* Activities */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-200 mb-3 flex items-center">
                        🎯 Activities
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {park.activities.map((activity, i) => (
                          <div key={i} className="flex items-center space-x-2 text-slate-300">
                            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                            <span className="text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Wildlife */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-200 mb-3 flex items-center">
                        🦁 Wildlife
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {park.wildlife.map((animal, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-xs"
                          >
                            {animal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="p-8 pt-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Facilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-200 mb-3 flex items-center">
                        🏪 Facilities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {park.facilities.map((facility, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-200 mb-3 flex items-center">
                        📞 Contact Information
                      </h4>
                      <div className="space-y-1 text-slate-300 text-sm">
                        <p>📱 {park.contact.phone}</p>
                        <p>✉️ {park.contact.email}</p>
                        <p>
                          🌐 <a 
                            href={park.contact.website} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-emerald-400 hover:text-emerald-300 underline"
                          >
                            Visit Website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <button
                      onClick={() => handleBookSafari(park.id)}
                      className="flex-1 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>🎫</span>
                      <span>Book Safari Now</span>
                    </button>
                    
                    <button
                      onClick={() => navigate(`/park/${park.id}`)}
                      className="flex-1 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl border border-slate-600 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>📋</span>
                      <span>View Details</span>
                    </button>

                    <button className="flex-1 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                      <span>❤️</span>
                      <span>Add to Wishlist</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
