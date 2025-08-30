export default function SafariDetailsSection({ 
  bookingData, 
  selectedDate, 
  setSelectedDate, 
  bookingType, 
  setBookingType, 
  isVisible, 
  errors 
}) {
  return (
    <div 
      id="safari-details"
      data-animate
      className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform transition-all duration-1500 ${
        isVisible['safari-details'] ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`}
    >
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
        Safari Details
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-slate-700/30 rounded-2xl p-4">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl">🏞️</span>
            <div>
              <h3 className="font-semibold text-slate-200">Location</h3>
              <p className="text-slate-400 text-sm">{bookingData.parkName}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-700/30 rounded-2xl p-4">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl">🌅</span>
            <div>
              <h3 className="font-semibold text-slate-200">Session</h3>
              <p className="text-slate-400 text-sm">{bookingData.sessionName}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-700/30 rounded-2xl p-4">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl">{bookingData.vehicleDetails.icon}</span>
            <div>
              <h3 className="font-semibold text-slate-200">Vehicle</h3>
              <p className="text-slate-400 text-sm">{bookingData.vehicleDetails.type} (Capacity: {bookingData.vehicleDetails.capacity})</p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-700/30 rounded-2xl p-4">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-2xl">⏰</span>
            <div>
              <h3 className="font-semibold text-slate-200">Timing</h3>
              <p className="text-slate-400 text-sm">{bookingData.safariDetails.startTime} - {bookingData.safariDetails.endTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-slate-200 mb-3">Select Safari Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white text-lg"
        />
        {errors.date && <p className="text-red-400 text-sm mt-2">{errors.date}</p>}
      </div>

      {/* Booking Type */}
      <div className="mb-6">
        <label className="block text-lg font-semibold text-slate-200 mb-3">Booking Type</label>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => setBookingType('per-seat')}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              bookingType === 'per-seat' 
                ? 'border-emerald-500 bg-emerald-500/10' 
                : 'border-slate-600 bg-slate-700/30'
            }`}
          >
            <h3 className="font-semibold text-slate-200 mb-2">Per Seat Booking</h3>
            <p className="text-slate-400 text-sm">₹{bookingData.pricing.pricePerSeat}/person</p>
            <p className="text-slate-500 text-xs">Share vehicle with others</p>
          </button>
          
          <button
            onClick={() => setBookingType('full-vehicle')}
            className={`p-4 rounded-xl border-2 transition-all duration-300 ${
              bookingType === 'full-vehicle' 
                ? 'border-emerald-500 bg-emerald-500/10' 
                : 'border-slate-600 bg-slate-700/30'
            }`}
          >
            <h3 className="font-semibold text-slate-200 mb-2">Full Vehicle Booking</h3>
            <p className="text-slate-400 text-sm">₹{bookingData.pricing.pricePerVehicle}/vehicle</p>
            <p className="text-slate-500 text-xs">Private vehicle for your group</p>
          </button>
        </div>
      </div>
    </div>
  );
}
