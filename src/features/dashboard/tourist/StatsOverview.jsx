export default function StatsOverview({ stats }) {
  const statCards = [
    { label: 'Total Trips', value: stats.totalTrips, icon: '🎯', color: 'emerald' },
    { label: 'Total Spent', value: `₹${stats.totalSpent.toLocaleString()}`, icon: '💰', color: 'blue' },
    { label: 'Loyalty Points', value: stats.loyaltyPoints, icon: '⭐', color: 'amber' },
    { label: 'Favorite Park', value: stats.favoriteDestination, icon: '🏞️', color: 'green' }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((stat, index) => (
        <div key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl font-bold text-slate-200 mb-1">{stat.value}</div>
          <div className="text-slate-400 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
