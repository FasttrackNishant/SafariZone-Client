import VehicleCard from './VehicleCard';

export default function SafariCard({ safari, index, selectedZone, onBookSafari }) {
  return (
    <div
      className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-700 hover:border-emerald-500/50"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">
          {safari.sessionId === 'morning' ? '🌅' : safari.sessionId === 'evening' ? '🌇' : '🌙'}
        </div>
        <h3 className="text-2xl font-bold text-emerald-300 mb-2">{safari.name}</h3>
        <p className="text-slate-400 mb-2">{safari.timing}</p>
        <p className="text-slate-500 text-sm">Duration: {safari.duration}</p>
      </div>

      <div className="space-y-4">
        {safari.vehicles.map((vehicle, vIndex) => (
          <VehicleCard
            key={vIndex}
            vehicle={vehicle}
            selectedZone={selectedZone}
            sessionId={safari.sessionId}
            onBookSafari={onBookSafari}
          />
        ))}
      </div>
    </div>
  );
}
