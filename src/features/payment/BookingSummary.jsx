export default function BookingSummary({ 
  bookingDetails, 
  appliedOffer, 
  finalAmount, 
  onPayment, 
  isProcessing 
}) {
  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6">
      <h3 className="text-2xl font-bold text-slate-200 mb-6">Booking Summary</h3>
      
      {/* Safari Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-slate-400">Date:</span>
          <span className="text-slate-200">{bookingDetails.selectedDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Safari:</span>
          <span className="text-slate-200">{bookingDetails.sessionName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Zone:</span>
          <span className="text-slate-200">{bookingDetails.zoneName}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Vehicle:</span>
          <span className="text-slate-200">{bookingDetails.vehicleDetails.type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Passengers:</span>
          <span className="text-slate-200">{bookingDetails.passengers.length}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Booking Type:</span>
          <span className="text-slate-200">
            {bookingDetails.bookingType === 'per-seat' ? 'Per Seat' : 'Full Vehicle'}
          </span>
        </div>
      </div>

      {/* Passenger Details */}
      <div className="border-t border-slate-600 pt-4 mb-6">
        <h4 className="text-lg font-semibold text-slate-200 mb-3">Passengers</h4>
        {bookingDetails.passengers.map((passenger, index) => (
          <div key={passenger.id} className="text-sm text-slate-400 mb-1">
            {index + 1}. {passenger.firstName} {passenger.lastName} ({passenger.age} years)
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="border-t border-slate-600 pt-4 mb-6">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Safari Cost</span>
            <span className="text-slate-200">
              ₹{bookingDetails.bookingType === 'per-seat' 
                ? (bookingDetails.pricing.pricePerSeat * bookingDetails.passengers.length).toLocaleString()
                : bookingDetails.pricing.pricePerVehicle.toLocaleString()
              }
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Forest Entry Fee</span>
            <span className="text-slate-200">
              ₹{(bookingDetails.pricing.forestEntryFee * bookingDetails.passengers.length).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Guide Fee</span>
            <span className="text-slate-200">
              ₹{(bookingDetails.pricing.guideFee * bookingDetails.passengers.length).toLocaleString()}
            </span>
          </div>
          
          {appliedOffer && (
            <div className="flex justify-between text-emerald-400">
              <span>Discount ({appliedOffer.code})</span>
              <span>-₹{appliedOffer.discountAmount.toLocaleString()}</span>
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center font-bold text-xl border-t border-slate-600 pt-4 mt-4">
          <span className="text-slate-200">Total Amount</span>
          <span className="text-emerald-400">₹{finalAmount.toLocaleString()}</span>
        </div>
      </div>

      {/* Payment Button */}
      <button
        onClick={onPayment}
        disabled={isProcessing}
        className={`w-full py-4 font-bold text-lg rounded-xl shadow-lg transform transition-all duration-300 ${
          isProcessing
            ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white hover:scale-105 shadow-emerald-500/25'
        }`}
      >
        {isProcessing ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            Processing Payment...
          </div>
        ) : (
          `Pay ₹${finalAmount.toLocaleString()}`
        )}
      </button>

      {/* Security Note */}
      <div className="mt-4 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-xl">
        <div className="flex items-center space-x-2">
          <span className="text-emerald-400">🔐</span>
          <p className="text-emerald-400 text-xs">
            Your payment is secured with 256-bit SSL encryption
          </p>
        </div>
      </div>
    </div>
  );
}
