import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../main/navbar/Navbar";
import Footer from "../main/footer/Footer";
import packageData from './packagedata.json';

export default function PackageDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [package_, setPackage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [guests, setGuests] = useState(2);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    try {
      console.log('Package ID:', id);
      console.log('Package data:', packageData);
      
      if (!packageData || !packageData.packages) {
        throw new Error('Invalid package data structure');
      }
      
      const packageInfo = packageData.packages.find(pkg => pkg.id === parseInt(id));
      console.log('Found package:', packageInfo);
      
      if (packageInfo) {
        setPackage(packageInfo);
        setError(null);
      } else {
        setError(`Package with ID ${id} not found`);
      }
    } catch (err) {
      console.error('Error loading package:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            setIsVisible(prev => ({ ...prev, [target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (package_?.gallery && package_.gallery.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % package_.gallery.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [package_]);

  const handleBookNow = () => {
    navigate(`/book-package/${package_.id}?guests=${guests}&date=${selectedDate}`);
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading package details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !package_) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
          <p className="text-xl text-slate-400 mb-8">{error || 'The requested package could not be found.'}</p>
          <button
            onClick={() => navigate('/packages')}
            className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300"
          >
            View All Packages
          </button>
        </div>
      </div>
    );
  }

  // Safe access to pricing with fallbacks
  const basePrice = package_.pricing?.basePrice || package_.price || 0;
  const totalPrice = basePrice * guests;
  const discountAmount = package_.originalPrice ? (package_.originalPrice - package_.price) * guests : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-x-hidden">
      <Navbar />

      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section with Image Gallery */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {package_.gallery && package_.gallery.length > 0 ? (
            package_.gallery.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                }`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${package_.image})` }}
            />
          )}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-emerald-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-[fadeInUp_1s_ease-out]">
            {/* Package Badges */}
            <div className="flex justify-center space-x-4 mb-6">
              {package_.popular && (
                <span className="px-4 py-2 bg-orange-500/90 text-white text-sm font-bold rounded-full backdrop-blur-sm">
                  🔥 Popular Choice
                </span>
              )}
              {package_.premium && (
                <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-sm font-bold rounded-full backdrop-blur-sm">
                  ✨ Premium Experience
                </span>
              )}
              <span className="px-4 py-2 bg-emerald-600/90 text-white text-sm font-bold rounded-full backdrop-blur-sm">
                ⭐ {package_.rating} ({package_.reviews} Reviews)
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none">
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  {package_.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 blur-lg opacity-20 -z-10"></div>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-200 mb-8 font-light leading-relaxed">
              {package_.description}
            </p>

            {/* Quick Package Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
                <div className="text-2xl font-bold text-emerald-400">{package_.duration}</div>
                <div className="text-slate-400 text-sm">Duration</div>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
                <div className="text-2xl font-bold text-orange-400">₹{package_.price.toLocaleString()}</div>
                <div className="text-slate-400 text-sm">Per Person</div>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
                <div className="text-2xl font-bold text-amber-400">{package_.groupSize}</div>
                <div className="text-slate-400 text-sm">Group Size</div>
              </div>
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
                <div className="text-2xl font-bold text-teal-400">{package_.bestTime}</div>
                <div className="text-slate-400 text-sm">Best Time</div>
              </div>
            </div>

            {/* Quick Booking */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 max-w-md mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-1">
                  <label className="block text-sm text-slate-300 mb-2">Guests</label>
                  <select 
                    value={guests} 
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i+1} value={i+1}>{i+1} Guest{i > 0 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm text-slate-300 mb-2">Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                  />
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-emerald-400">
                  ₹{totalPrice.toLocaleString()}
                  {discountAmount > 0 && (
                    <span className="text-lg text-slate-400 line-through ml-2">
                      ₹{(package_.originalPrice * guests).toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="text-sm text-slate-400">Total for {guests} guest{guests > 1 ? 's' : ''}</div>
              </div>
              <button
                onClick={handleBookNow}
                disabled={!selectedDate}
                className={`w-full py-3 font-bold rounded-xl shadow-lg transform transition-all duration-300 ${
                  selectedDate 
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white hover:scale-105 shadow-emerald-500/25'
                    : 'bg-slate-600 text-slate-400 cursor-not-allowed'
                }`}
              >
                {selectedDate ? 'Book This Package' : 'Select Date to Book'}
              </button>
            </div>
          </div>
        </div>

        {/* Image indicators - only show if gallery exists */}
        {package_.gallery && package_.gallery.length > 1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {package_.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-orange-400 scale-125' : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Rest of your component content... */}
      
      <Footer />
    </div>
  );
}
