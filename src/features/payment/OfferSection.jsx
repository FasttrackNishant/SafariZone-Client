export default function OfferSection({ 
  offers, 
  promoCode, 
  setPromoCode, 
  appliedOffer, 
  onApplyCode, 
  onRemoveOffer, 
  isVisible 
}) {
  return (
    <div 
      id="offers-section"
      data-animate
      className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform transition-all duration-1500 ${
        isVisible['offers-section'] ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`}
    >
      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
        Available Offers
      </h3>
      
      {/* Available Offers */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {offers.map((offer) => (
          <div key={offer.id} className="p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
            <h4 className="font-semibold text-slate-200 mb-2">{offer.title}</h4>
            <p className="text-slate-400 text-sm mb-2">{offer.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-bold">{offer.code}</span>
              <span className="text-orange-400 text-sm">{offer.discount}% OFF</span>
            </div>
          </div>
        ))}
      </div>

      {/* Promo Code Input */}
      <div className="flex space-x-3">
        <input
          type="text"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white"
          disabled={!!appliedOffer}
        />
        {appliedOffer ? (
          <button
            onClick={onRemoveOffer}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={onApplyCode}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300"
          >
            Apply
          </button>
        )}
      </div>

      {/* Applied Offer Display */}
      {appliedOffer && (
        <div className="mt-4 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded-xl">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-emerald-400 font-semibold">{appliedOffer.title}</h4>
              <p className="text-slate-300 text-sm">Code: {appliedOffer.code}</p>
            </div>
            <div className="text-emerald-400 font-bold">
              -₹{appliedOffer.discountAmount.toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
