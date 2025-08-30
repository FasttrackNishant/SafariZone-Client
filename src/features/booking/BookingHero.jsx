export default function BookingHero({ bookingData, parkId, navigate }) {
  return (
    <section className="relative pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <button 
              onClick={() => navigate('/parks')}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Parks
            </button>
            <span className="text-slate-400">→</span>
            <button 
              onClick={() => navigate(`/park/${parkId}`)}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {bookingData.parkName}
            </button>
            <span className="text-slate-400">→</span>
            <span className="text-emerald-400">Book Safari</span>
          </div>
          
          <h1 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Book Your Safari
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Complete your booking for {bookingData.zoneName} - {bookingData.sessionName}
          </p>
        </div>
      </div>
    </section>
  );
}
