import PassengerCard from './PassengerCard';

export default function PassengerDetailsSection({ 
  passengers, 
  passengerHandlers, 
  bookingData, 
  safariBookingData, 
  isVisible, 
  errors 
}) {
  return (
    <div 
      id="passenger-details"
      data-animate
      className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 transform transition-all duration-1500 ${
        isVisible['passenger-details'] ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
          Passenger Details
        </h2>
        <button
          onClick={passengerHandlers.add}
          disabled={passengers.length >= bookingData.passengerLimits.maxPassengersPerVehicle}
          className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
            passengers.length < bookingData.passengerLimits.maxPassengersPerVehicle
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'bg-slate-600 text-slate-400 cursor-not-allowed'
          }`}
        >
          + Add Passenger
        </button>
      </div>

      {passengers.map((passenger, index) => (
        <PassengerCard
          key={passenger.id}
          passenger={passenger}
          index={index}
          passengers={passengers}
          passengerHandlers={passengerHandlers}
          safariBookingData={safariBookingData}
          errors={errors}
        />
      ))}
    </div>
  );
}
