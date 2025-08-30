import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../main/navbar/Navbar";
import Footer from "../main/footer/Footer";

export default function PackagesPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [isVisible, setIsVisible] = useState({});

  // Package Data
  const packages = [
    {
      id: 1,
      name: "Weekend Wildlife Escape",
      duration: "2 Days, 1 Night",
      price: 8999,
      originalPrice: 11999,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      park: "Tadoba Andhari",
      category: "weekend",
      popular: true,
      highlights: ["2 Safari Rides", "Accommodation", "All Meals", "Expert Guide"],
      inclusions: ["Hotel Stay", "Safari Jeep", "Forest Entry Fees", "Photography Guide"],
      bestTime: "Oct - Mar",
      groupSize: "2-6 People"
    },
    {
      id: 2,
      name: "Photography Master Class",
      duration: "3 Days, 2 Nights",
      price: 15999,
      originalPrice: 19999,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=800&q=80",
      park: "Melghat Reserve",
      category: "photography",
      highlights: ["Professional Guide", "Equipment Provided", "4 Safari Sessions", "Photo Editing Workshop"],
      inclusions: ["Camera Equipment", "Editing Software", "Print Portfolio", "Certificate"],
      bestTime: "Nov - Feb",
      groupSize: "4-8 People"
    },
    {
      id: 3,
      name: "Family Adventure Package",
      duration: "2 Days, 1 Night",
      price: 12999,
      originalPrice: 16999,
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=800&q=80",
      park: "Sanjay Gandhi National Park",
      category: "family",
      highlights: ["Kid-Friendly Safaris", "Educational Tours", "Safety First", "Family Activities"],
      inclusions: ["Child Safety Gear", "Educational Materials", "Snacks & Drinks", "Activity Books"],
      bestTime: "Year Round",
      groupSize: "2-10 People"
    },
    {
      id: 4,
      name: "Luxury Safari Experience",
      duration: "3 Days, 2 Nights",
      price: 25999,
      originalPrice: 32999,
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
      park: "Tadoba Andhari",
      category: "luxury",
      premium: true,
      highlights: ["5-Star Resort", "Private Safari", "Spa Services", "Fine Dining"],
      inclusions: ["Luxury Accommodation", "Private Jeep", "Personal Butler", "Helicopter Transfer"],
      bestTime: "Oct - Mar",
      groupSize: "2-4 People"
    },
    {
      id: 5,
      name: "Multi-Park Explorer",
      duration: "5 Days, 4 Nights",
      price: 22999,
      originalPrice: 28999,
      rating: 4.8,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1592784201029-bdb351d47eff?auto=format&fit=crop&w=800&q=80",
      park: "All Parks",
      category: "adventure",
      highlights: ["3 National Parks", "6 Safari Rides", "Cultural Tours", "Transportation"],
      inclusions: ["Inter-park Travel", "All Accommodations", "Local Guides", "Cultural Experiences"],
      bestTime: "Nov - Mar",
      groupSize: "4-12 People"
    },
    {
      id: 6,
      name: "Corporate Team Building",
      duration: "2 Days, 1 Night",
      price: 18999,
      originalPrice: 23999,
      rating: 4.6,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1695367255234-2cb7fbc6425b?auto=format&fit=crop&w=800&q=80",
      park: "Sanjay Gandhi National Park",
      category: "corporate",
      highlights: ["Team Activities", "Conference Facilities", "Team Challenges", "Networking Events"],
      inclusions: ["Meeting Rooms", "Team Building Activities", "Corporate Discounts", "Event Coordination"],
      bestTime: "Year Round",
      groupSize: "10-50 People"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Packages', icon: '🌿' },
    { id: 'weekend', name: 'Weekend Trips', icon: '🏕️' },
    { id: 'photography', name: 'Photography', icon: '📸' },
    { id: 'family', name: 'Family Fun', icon: '👨‍👩‍👧‍👦' },
    { id: 'luxury', name: 'Luxury', icon: '✨' },
    { id: 'adventure', name: 'Adventure', icon: '🗺️' },
    { id: 'corporate', name: 'Corporate', icon: '🏢' }
  ];

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
    if (selectedCategory === 'all') {
      setFilteredPackages(packages);
    } else {
      setFilteredPackages(packages.filter(pkg => pkg.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleBookNow = (packageId) => {
    navigate(`/book-safari?package=${packageId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white overflow-x-hidden">
      <Navbar />

      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-slate-900/70 to-emerald-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse opacity-30"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: i % 3 === 0 ? '#fb923c' : i % 3 === 1 ? '#10b981' : '#fbbf24',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-[fadeInUp_1s_ease-out]">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none">
              <span className="relative">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
                  Safari Packages
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 blur-lg opacity-20 -z-10"></div>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-200 mb-8 font-light leading-relaxed">
              Discover curated <span className="text-orange-400 font-bold">wildlife experiences</span> designed for every adventurer. 
              From weekend getaways to luxury expeditions in Maharashtra's pristine forests.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: '6+', label: 'Unique Packages' },
                { number: '3', label: 'National Parks' },
                { number: '500+', label: 'Happy Travelers' },
                { number: '4.8★', label: 'Average Rating' }
              ].map((stat, index) => (
                <div key={index} className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30">
                  <div className="text-2xl font-bold text-emerald-400">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div 
            id="categories"
            data-animate
            className={`transform transition-all duration-1500 ${
              isVisible.categories ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Choose Your Adventure
              </h2>
              <p className="text-slate-400 text-xl">Filter packages by your interests and preferences</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg shadow-emerald-500/25'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-600/30 hover:border-emerald-500/30'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div 
            id="packages"
            data-animate
            className={`transform transition-all duration-1500 ${
              isVisible.packages ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
            }`}
          >
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className="group bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20 transform transition-all duration-700 hover:border-emerald-500/40"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Package Image */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {pkg.popular && (
                        <span className="px-3 py-1 bg-orange-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                          🔥 Popular
                        </span>
                      )}
                      {pkg.premium && (
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                          ✨ Premium
                        </span>
                      )}
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-2xl px-4 py-2">
                      <div className="text-emerald-400 font-bold text-lg">₹{pkg.price.toLocaleString()}</div>
                      {pkg.originalPrice && (
                        <div className="text-slate-400 text-xs line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="absolute bottom-4 left-4 flex items-center bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-white text-sm font-semibold ml-1">{pkg.rating}</span>
                      <span className="text-slate-300 text-xs ml-1">({pkg.reviews})</span>
                    </div>
                  </div>

                  {/* Package Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-emerald-300 transition-colors">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center justify-between text-slate-400 text-sm">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {pkg.duration}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          {pkg.park}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-emerald-400 mb-3">Package Highlights</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {pkg.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-center text-slate-300 text-xs">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Package Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
                      <div>
                        <span className="text-slate-400">Best Time:</span>
                        <div className="text-slate-200 font-semibold">{pkg.bestTime}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Group Size:</span>
                        <div className="text-slate-200 font-semibold">{pkg.groupSize}</div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={() => handleBookNow(pkg.id)}
                        className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>🎯</span>
                        <span>Book Now</span>
                      </button>
                      
                      <button
                        onClick={() => navigate(`/package-details/${pkg.id}`)}
                        className="w-full py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white font-semibold rounded-xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <span>📋</span>
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 py-24 border-t border-slate-700/30">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Let us create a custom safari experience tailored to your preferences and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300"
            >
              💬 Contact Us
            </button>
            <button
              onClick={() => navigate('/custom-package')}
              className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white font-bold text-lg rounded-2xl border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
            >
              🎨 Custom Package
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
