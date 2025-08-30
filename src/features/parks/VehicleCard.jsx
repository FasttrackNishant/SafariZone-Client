export default function VehicleCard({ vehicle, selectedZone, sessionId, onBookSafari }) {
  
  // Dynamic price helper function
  const getVehiclePrice = (vehicle) => {
    if (!vehicle) return 'N/A';
    
    // Dynamic price key detection based on vehicle type
    const priceKey = `pricePer${vehicle.type}`;
    const price = vehicle[priceKey];
    
    // If specific price key doesn't exist, look for common alternatives
    if (!price) {
      const alternativeKeys = [
        'pricePerUnit',
        'pricePerVehicle', 
        'pricePerBooking',
        'totalPrice',
        'basePrice'
      ];
      
      for (const key of alternativeKeys) {
        if (vehicle[key]) {
          return vehicle[key].toLocaleString();
        }
      }
      
      return 'Contact for Price';
    }
    
    return price.toLocaleString();
  };

  const getVehicleIcon = (vehicleType) => {
    const iconMap = {
      'Jeep': '🚙',
      'Canter': '🚌',
      'Bus': '🚌',
      'Helicopter': '🚁',
      'Boat': '🛥️',
      'Walking': '🚶',
      'Bicycle': '🚲'
    };
    
    return iconMap[vehicleType] || '🚐';
  };

  return (
    <div className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">
            {getVehicleIcon(vehicle.type)}
          </span>
          <div>
            <h4 className="text-lg font-bold text-slate-200">{vehicle.type}</h4>
            <p className="text-slate-400 text-sm">Capacity: {vehicle.capacity} people</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-emerald-400 font-bold text-lg">
            ₹{vehicle.pricePerSeat?.toLocaleString() || 'N/A'}/seat
          </div>
          <div className="text-slate-400 text-sm">
            ₹{getVehiclePrice(vehicle)}/vehicle
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm">
          <span className="text-slate-400">Available: </span>
          <span className={`font-semibold ${
            (vehicle.availableSlots || 0) > 5 ? 'text-emerald-400' : 
            (vehicle.availableSlots || 0) > 2 ? 'text-amber-400' : 'text-red-400'
          }`}>
            {vehicle.availableSlots || 0}/{vehicle.totalSlots || 0} slots
          </span>
        </div>
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < ((vehicle.availableSlots || 0) / (vehicle.totalSlots || 1)) * 5 
                  ? 'bg-emerald-400' 
                  : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => onBookSafari(selectedZone, sessionId, vehicle.type.toLowerCase())}
        disabled={(vehicle.availableSlots || 0) === 0}
        className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
          (vehicle.availableSlots || 0) > 0
            ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white hover:scale-105 shadow-lg hover:shadow-emerald-500/25'
            : 'bg-slate-600 text-slate-400 cursor-not-allowed'
        }`}
      >
        {(vehicle.availableSlots || 0) > 0 ? 'Book Now' : 'Sold Out'}
      </button>
    </div>
  );
}
