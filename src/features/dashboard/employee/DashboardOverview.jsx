import React from 'react';

export default function DashboardOverview({ data }) {
  const todayStats = {
    totalSafaris: data.todaysSafaris?.length || 0,
    checkedIn: data.todaysSafaris?.filter(s => s.checkInStatus === 'Completed').length || 0,
    revenue: data.analytics?.today?.revenue || 0,
    occupancyRate: data.analytics?.today?.occupancyRate || 0,
    satisfaction: data.analytics?.today?.averageRating || 0
  };

  const activeAlerts = data.parkOperations?.emergencyAlerts?.filter(alert => alert.status === 'Active').length || 0;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
          Dashboard Overview
        </h2>
        <div className="flex items-center space-x-4">
          <img 
            src={data.employee?.profilePicture} 
            alt={data.employee?.name}
            className="w-16 h-16 rounded-full border-2 border-emerald-500"
          />
          <div>
            <h3 className="text-2xl font-semibold text-slate-200">
              Welcome back, {data.employee?.name}!
            </h3>
            <p className="text-emerald-400 text-lg">{data.employee?.role} - {data.employee?.department}</p>
            <p className="text-slate-400">Shift: {data.employee?.shift}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">🎯</div>
          <div className="text-2xl font-bold text-emerald-400 mb-1">{todayStats.totalSafaris}</div>
          <div className="text-slate-300 text-sm">Total Safaris Today</div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">✅</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">{todayStats.checkedIn}</div>
          <div className="text-slate-300 text-sm">Checked In</div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">💰</div>
          <div className="text-2xl font-bold text-purple-400 mb-1">₹{todayStats.revenue.toLocaleString()}</div>
          <div className="text-slate-300 text-sm">Revenue Today</div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">📊</div>
          <div className="text-2xl font-bold text-orange-400 mb-1">{todayStats.occupancyRate}%</div>
          <div className="text-slate-300 text-sm">Occupancy Rate</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-slate-200 mb-6">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <button className="p-6 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl hover:bg-emerald-500/30 transition-all duration-300">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-emerald-400 font-semibold mb-1">New Booking</div>
            <div className="text-slate-400 text-sm">Create new safari booking</div>
          </button>
          
          <button className="p-6 bg-blue-500/20 border border-blue-500/30 rounded-2xl hover:bg-blue-500/30 transition-all duration-300">
            <div className="text-3xl mb-2">🔧</div>
            <div className="text-blue-400 font-semibold mb-1">Vehicle Check</div>
            <div className="text-slate-400 text-sm">Inspect vehicle status</div>
          </button>
          
          <button className="p-6 bg-red-500/20 border border-red-500/30 rounded-2xl hover:bg-red-500/30 transition-all duration-300">
            <div className="text-3xl mb-2">🚨</div>
            <div className="text-red-400 font-semibold mb-1">Emergency Alert</div>
            <div className="text-slate-400 text-sm">{activeAlerts} Active Alerts</div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-slate-200 mb-6">Recent Activity</h3>
        <div className="space-y-4">
          {data.todaysSafaris?.slice(0, 3).map((safari) => (
            <div key={safari.bookingId} className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <span className="text-emerald-400">🚙</span>
              </div>
              <div className="flex-1">
                <p className="text-slate-200 font-semibold">{safari.touristName}</p>
                <p className="text-slate-400 text-sm">{safari.zone} - {safari.session}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-300 text-sm">{safari.time}</p>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  safari.status === 'Confirmed' ? 'bg-emerald-500/20 text-emerald-400' :
                  safari.status === 'Checked In' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-slate-500/20 text-slate-400'
                }`}>
                  {safari.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
