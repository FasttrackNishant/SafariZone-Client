import React, { useState } from 'react';

export default function SupportSection({ supportData }) {
  const [chatActive, setChatActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const supportCategories = [
    { id: 'booking', label: 'Booking Issues', icon: '📋' },
    { id: 'payment', label: 'Payment Problems', icon: '💳' },
    { id: 'cancellation', label: 'Cancellations & Refunds', icon: '🔄' },
    { id: 'technical', label: 'Technical Support', icon: '🔧' },
    { id: 'general', label: 'General Inquiry', icon: '💬' }
  ];

  const faqData = [
    {
      question: "How can I cancel my booking?",
      answer: "You can cancel your booking up to 24 hours before the safari time. Go to 'My Trips' and click 'Cancel Booking'."
    },
    {
      question: "What ID proof is required for safari?",
      answer: "Valid government-issued photo ID is mandatory. Acceptable IDs include Aadhar Card, Passport, Driving License, PAN Card, or Voter ID."
    },
    {
      question: "Can I modify my booking date?",
      answer: "Yes, you can modify your booking date subject to availability. Additional charges may apply for date changes."
    },
    {
      question: "What is the refund policy?",
      answer: "Full refund for cancellations 24+ hours before safari. 50% refund for 24-48 hours prior. No refund within 24 hours."
    }
  ];

  const handleStartChat = () => {
    setChatActive(true);
    // Here you would integrate with your live chat system
    alert('Starting live chat with support agent...');
  };

  const handleEmergencyCall = () => {
    window.location.href = `tel:${supportData.emergencyContact}`;
  };

  return (
    <div className="space-y-8">
      {/* Support Overview */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Support Center
        </h2>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <button
            onClick={handleStartChat}
            disabled={!supportData.liveChatAvailable}
            className={`p-6 rounded-2xl border transition-all duration-300 ${
              supportData.liveChatAvailable
                ? 'border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400'
                : 'border-slate-600/30 bg-slate-700/30 text-slate-500 cursor-not-allowed'
            }`}
          >
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-semibold mb-1">Live Chat</h3>
            <p className="text-xs">
              {supportData.liveChatAvailable ? 'Available Now' : 'Currently Offline'}
            </p>
          </button>

          <button
            onClick={handleEmergencyCall}
            className="p-6 rounded-2xl border border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-all duration-300"
          >
            <div className="text-3xl mb-2">🚨</div>
            <h3 className="font-semibold mb-1">Emergency</h3>
            <p className="text-xs">SOS Contact</p>
          </button>

          <a
            href={supportData.faqUrl}
            className="p-6 rounded-2xl border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-all duration-300"
          >
            <div className="text-3xl mb-2">❓</div>
            <h3 className="font-semibold mb-1">FAQs</h3>
            <p className="text-xs">Quick Answers</p>
          </a>

          <a
            href={supportData.helpCenterUrl}
            className="p-6 rounded-2xl border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition-all duration-300"
          >
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold mb-1">Help Center</h3>
            <p className="text-xs">Detailed Guides</p>
          </a>
        </div>

        {/* Support Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-lg">📞</span>
                <div>
                  <p className="text-slate-300">Emergency Contact</p>
                  <p className="text-emerald-400 font-semibold">{supportData.emergencyContact}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">🕒</span>
                <div>
                  <p className="text-slate-300">Support Hours</p>
                  <p className="text-slate-400">{supportData.supportHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">Support Categories</h3>
            <div className="space-y-2">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                    selectedCategory === category.id
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-6">
          Frequently Asked Questions
        </h3>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <details key={index} className="bg-slate-700/30 rounded-2xl border border-slate-600/30">
              <summary className="p-4 cursor-pointer text-slate-200 font-semibold hover:text-emerald-400 transition-colors duration-300">
                {faq.question}
              </summary>
              <div className="px-4 pb-4 text-slate-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Emergency Guidelines */}
      <div className="bg-gradient-to-br from-red-800/20 to-red-900/20 border border-red-500/30 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-red-400 mb-4">Emergency Guidelines</h3>
        <div className="space-y-3 text-slate-300">
          <div className="flex items-start space-x-3">
            <span className="text-red-400 mt-1">🔴</span>
            <p><strong>Medical Emergency:</strong> Call emergency services immediately and then contact our support.</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-red-400 mt-1">🔴</span>
            <p><strong>Vehicle Breakdown:</strong> Stay safe, contact our emergency number for immediate assistance.</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-red-400 mt-1">🔴</span>
            <p><strong>Lost in Park:</strong> Stay calm, stay in your vehicle, and call our emergency contact.</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-red-400 mt-1">🔴</span>
            <p><strong>Wildlife Emergency:</strong> Do not exit vehicle, maintain distance, and follow guide instructions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
