import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
export default function ContactUs() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      detail: "+91 98765 43210",
      gradient: "from-emerald-500 to-teal-600",
      description: "Call us during business hours",
      action: "Call Now"
    },
    {
      icon: "✉️", 
      title: "Email",
      detail: "support@safarizone.com",
      gradient: "from-orange-500 to-amber-600",
      description: "Send us your questions anytime",
      action: "Send Email"
    },
    {
      icon: "📍",
      title: "Location",
      detail: "Nagpur, Maharashtra, India",
      gradient: "from-blue-500 to-indigo-600",
      description: "Visit our safari headquarters",
      action: "Get Directions"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black min-h-screen text-white overflow-x-hidden">
      <Navbar />

      {/* Enhanced Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Enhanced Hero Section */}
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
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse opacity-40"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: i % 3 === 0 ? '#fb923c' : i % 3 === 1 ? '#10b981' : '#fbbf24',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-[fadeInUp_1s_ease-out]">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-none">
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 blur-lg opacity-20 -z-10"></div>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-slate-200 mb-8 font-light leading-relaxed">
              Ready for your <span className="text-emerald-400 font-bold">wildlife adventure</span>? 
              We're here to help plan your perfect safari experience in Maharashtra's pristine wilderness.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold text-base rounded-2xl shadow-xl hover:shadow-emerald-500/25 hover:scale-105 transform transition-all duration-300 hover:from-emerald-500 hover:to-teal-600 overflow-hidden border border-emerald-500/20 min-w-[180px]"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>💬</span>
                  <span>Send Message</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <button 
                onClick={() => navigate('/packages')}
                className="group px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold text-base rounded-2xl shadow-xl hover:shadow-orange-500/25 hover:scale-105 transform transition-all duration-300 hover:from-orange-400 hover:to-amber-500 border border-orange-500/20 min-w-[180px]"
              >
                <span className="flex items-center space-x-2">
                  <span>🦁</span>
                  <span>View Packages</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div 
          id="contact-info"
          data-animate
          className={`transform transition-all duration-1500 ${
            isVisible['contact-info'] ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Multiple ways to reach our wildlife experts and start planning your adventure
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-700 hover:border-emerald-500/50 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-xl text-slate-200 mb-2 font-semibold">
                    {info.detail}
                  </p>
                  <p className="text-slate-400 text-sm mb-6">
                    {info.description}
                  </p>
                  <button className="px-6 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300">
                    {info.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="bg-gradient-to-b from-slate-900/50 to-slate-800/50 py-24 border-y border-slate-700/30">
        <div className="max-w-4xl mx-auto px-6">
          <div 
            id="contact-form"
            data-animate
            className={`transform transition-all duration-1500 ${
              isVisible['contact-form'] ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-slate-400 text-xl">
                Tell us about your dream safari and we'll make it happen
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                  >
                    <option value="">Select a topic</option>
                    <option value="safari-booking">Safari Booking</option>
                    <option value="package-inquiry">Package Inquiry</option>
                    <option value="group-booking">Group Booking</option>
                    <option value="general-support">General Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your safari plans, questions, or how we can help..."
                  ></textarea>
                </div>
                
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-emerald-600 bg-slate-700 border-slate-600 rounded focus:ring-emerald-500 focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="text-sm text-slate-300">
                    Subscribe to our newsletter for safari tips and exclusive offers
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="group relative w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transform transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>🚀</span>
                    <span>Send Message</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
