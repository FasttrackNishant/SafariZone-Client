export default function UpcomingTrips({ trips }) {
  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
          Upcoming Trips
        </h2>
        <button className="text-emerald-400 hover:text-emerald-300 font-semibold">
          View All →
        </button>
      </div>

      <div className="space-y-6">
        {trips.map((trip) => (
          <div key={trip.bookingId} className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1 mb-4 lg:mb-0">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-slate-200">{trip.parkName}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    trip.status === 'Confirmed' 
                      ? 'bg-emerald-500/20 text-emerald-400' 
                      : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {trip.status}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-400">
                  <div>📅 {trip.date}</div>
                  <div>🕐 {trip.timeSlot}</div>
                  <div>🎯 {trip.zoneName}</div>
                  <div>🚙 {trip.vehicleType} ({trip.seatsBooked} seats)</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition-all duration-300">
                  Download Ticket
                </button>
                <button className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg font-semibold transition-all duration-300">
                  Modify Booking
                </button>
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all duration-300">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
