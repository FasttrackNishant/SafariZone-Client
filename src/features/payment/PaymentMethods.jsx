export default function PaymentMethods({ methods, selectedMethod, onMethodSelect, isVisible }) {
  return (
    <div 
      id="payment-methods"
      data-animate
      className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform transition-all duration-1500 ${
        isVisible['payment-methods'] ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`}
    >
      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
        Choose Payment Method
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onMethodSelect(method.id)}
            disabled={!method.enabled}
            className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
              selectedMethod === method.id
                ? 'border-emerald-500 bg-emerald-500/10'
                : 'border-slate-600 bg-slate-700/30 hover:border-slate-500'
            } ${!method.enabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{method.icon}</span>
              <div>
                <h4 className="font-semibold text-slate-200">{method.name}</h4>
                <p className="text-slate-400 text-sm">{method.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
