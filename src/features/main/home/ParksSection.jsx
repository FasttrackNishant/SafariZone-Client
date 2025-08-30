// sections/ParksSection.jsx
import { useNavigate } from "react-router";
import { Link } from "react-router";
import tadobaImg from "../../../assets/tadoba.jpg"
import sanjaygandhi from "../../../assets/sanjay_gandhi.jpg"
import melgath from "../../../assets/melghtat.jpg"

const parks = [
  {
    "id" : "tadoba",
    "name": "Tadoba Andhari Tiger Reserve",
    "location": "Chandrapur, Maharashtra",
    "img": tadobaImg,
    "desc": "The jewel of Maharashtra’s wildlife, Tadoba is renowned for its thrilling tiger sightings, dense teak and bamboo forests, diverse flora and fauna.",
    "highlights": ["Tiger Sightings", "Dense Forests", "Night Safaris"],
    "rating": 4.8,
    "visitors": "50K+"
  },
  {
    "id":"sanjay-gandhi",
    "name": "Sanjay Gandhi National Park",
    "location": "Mumbai, Maharashtra", 
    "img": sanjaygandhi,
    "desc": "A unique urban national park, home to Kanheri Caves, lion and tiger safaris, and diverse flora and fauna.",
    "highlights": ["Urban Wildlife", "Kanheri Caves", "Diverse Flora"],
    "rating": 4.6,
    "visitors": "100K+"
  },
  {
    "id":"melghat",
    "name": "Melghat Tiger Reserve",
    "location": "Amravati, Maharashtra",
    "img": melgath,
    "desc": "Located in the Satpura ranges, it is one of India's first tiger reserves under Project Tiger, known for rugged terrain and rich biodiversity.",
    "highlights": ["Project Tiger", "Rugged Terrain", "Rich Biodiversity"],
    "rating": 4.7,
    "visitors": "30K+"
  }
];

export default function ParksSection({ isVisible }) {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-slate-900/50 to-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#gradient)" strokeWidth="0.5"/>
              <circle cx="0" cy="0" r="0.5" fill="url(#gradient)" opacity="0.3"/>
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981"/>
              <stop offset="100%" stopColor="#f59e0b"/>
            </linearGradient>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div 
          id="parks"
          data-animate
          className={`text-center mb-16 transform transition-all duration-1500 ${
            isVisible.parks ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Explore National Parks
            </span>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover the magnificent wildlife reserves of Maharashtra, each offering unique experiences and breathtaking encounters
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {parks.map((park, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 transform transition-all duration-700 hover:border-orange-500/40"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={park.img}
                  alt={park.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {park.highlights.map((highlight, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-3 py-1 bg-emerald-600/90 text-white text-xs font-bold rounded-full backdrop-blur-sm hover:bg-emerald-500 transition-colors border border-emerald-400/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <div className="flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-yellow-400 text-sm">⭐</span>
                    <span className="text-white text-xs font-semibold ml-1">{park.rating}</span>
                  </div>
                  <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-slate-200 text-xs font-semibold">{park.visitors}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-300 mb-3 group-hover:text-orange-200 transition-colors">
                  {park.name}
                </h3>
                <div className="flex items-center text-slate-400 mb-4">
                  <svg className="w-4 h-4 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-sm">{park.location}</span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  {park.desc}
                </p>
                
                <button 
                  onClick={() => navigate(`/parks/${park.id.toLowerCase().replace(/\s+/g, '-')}`)}
                  className="group/btn relative w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-emerald-500/25 hover:from-emerald-500 hover:to-teal-600 transform hover:scale-105 transition-all duration-500 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>View Details</span>
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
