export default function SafariRulesSection({ bookingData, isVisible }) {
  return (
    <div 
      id="safari-rules"
      data-animate
      className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform transition-all duration-1500 ${
        isVisible['safari-rules'] ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
        Important Safari Rules
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {bookingData.safariRules.map((rule, index) => (
          <div key={index} className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-xl">
            <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
              <span className="text-white text-xs font-bold">!</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{rule}</p>
          </div>
        ))}
      </div>

      <div className="flex items-start space-x-3 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-xl">
        <input type="checkbox" className="mt-1" required />
        <p className="text-slate-300 text-sm">
          I have read and agree to all the safari rules and terms & conditions. I understand that violation of any rule may result in cancellation of the safari without refund.
        </p>
      </div>
    </div>
  );
}
