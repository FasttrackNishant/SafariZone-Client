export default function BookingSidebar({ 
  bookingData, 
  selectedDate, 
  passengers, 
  bookingType, 
  calculateTotalPrice, 
  handleBooking, 
  navigate 
}) {
  return (
    <div className="sticky top-24">
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6">
        <h3 className="text-2xl font-bold text-slate-200 mb-6">Booking Summary</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className="text-slate-400">Date:</span>
            <span className="text-slate-200">{selectedDate || 'Not selected'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Safari:</span>
            <span className="text-slate-200">{bookingData.sessionName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Vehicle:</span>
            <span className="text-slate-200">{bookingData.vehicleDetails.type}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Passengers:</span>
            <span className="text-slate-200">{passengers.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Booking Type:</span>
            <span className="text-slate-200">
              {bookingType === 'per-seat' ? 'Per Seat' : 'Full Vehicle'}
            </span>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-4 mb-6">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">
                {bookingType === 'per-seat' 
                  ? `Safari (${passengers.length} x ₹${bookingData.pricing.pricePerSeat})`
                  : 'Safari (Full Vehicle)'
                }
              </span>
              <span className="text-slate-200">
                ₹{bookingType === 'per-seat' 
                  ? (bookingData.pricing.pricePerSeat * passengers.length).toLocaleString()
                  : bookingData.pricing.pricePerVehicle.toLocaleString()
                }
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Forest Entry Fee ({passengers.length} x ₹{bookingData.pricing.forestEntryFee})</span>
              <span className="text-slate-200">₹{(bookingData.pricing.forestEntryFee * passengers.length).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Guide Fee ({passengers.length} x ₹{bookingData.pricing.guideFee})</span>
              <span className="text-slate-200">₹{(bookingData.pricing.guideFee * passengers.length).toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center font-bold text-xl border-t border-slate-600 pt-4 mt-4">
            <span className="text-slate-200">Total Amount</span>
            <span className="text-emerald-400">₹{calculateTotalPrice().toLocaleString()}</span>
          </div>
        </div>

        <button
          onClick={handleBooking}
          disabled={!selectedDate}
          className={`w-full py-4 font-bold text-lg rounded-xl shadow-lg transform transition-all duration-300 ${
            selectedDate 
              ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white hover:scale-105 shadow-emerald-500/25'
              : 'bg-slate-600 text-slate-400 cursor-not-allowed'
          }`}
        >
          {selectedDate ? 'Proceed to Payment' : 'Select Date First'}
        </button>

        {/* Contact Help */}
        <div className="mt-6 p-4 bg-slate-700/30 rounded-xl">
          <h4 className="font-semibold text-slate-200 mb-2">Need Help?</h4>
          <p className="text-slate-400 text-sm mb-3">Have questions about your booking?</p>
          <button 
            onClick={() => navigate('/contact')}
            className="w-full py-2 bg-slate-600/50 hover:bg-slate-600 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
