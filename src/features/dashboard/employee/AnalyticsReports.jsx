import React, { useState } from 'react';

export default function AnalyticsReports({ analytics }) {
  const [activeTab, setActiveTab] = useState('today');
  const [reportType, setReportType] = useState('overview');

  const reportTabs = [
    { id: 'today', label: 'Today', icon: '📅' },
    { id: 'week', label: 'This Week', icon: '📊' },
    { id: 'month', label: 'This Month', icon: '📈' }
  ];

  const reportTypes = [
    { id: 'overview', label: 'Overview', icon: '👁️' },
    { id: 'revenue', label: 'Revenue', icon: '💰' },
    { id: 'vehicles', label: 'Vehicles', icon: '🚙' },
    { id: 'satisfaction', label: 'Satisfaction', icon: '⭐' }
  ];

  const getCurrentData = () => {
    switch(activeTab) {
      case 'today': return analytics.today;
      case 'week': return analytics.thisWeek;
      case 'month': return analytics.thisMonth;
      default: return analytics.today;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Analytics & Reports
          </h2>
          
          <div className="flex gap-4 mt-4 lg:mt-0">
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300">
              📊 Export Report
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all duration-300">
              📧 Email Report
            </button>
          </div>
        </div>

        {/* Time Period Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {reportTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Report Type Tabs */}
        <div className="flex flex-wrap gap-2">
          {reportTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setReportType(type.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                reportType === type.id
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              <span>{type.icon}</span>
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">📋</div>
          <div className="text-3xl font-bold text-emerald-400 mb-1">
            {getCurrentData()?.totalBookings || 0}
          </div>
          <div className="text-slate-300 text-sm">Total Bookings</div>
          <div className="text-xs text-emerald-400 mt-2">
            ↑ {Math.round(Math.random() * 20)}% vs last period
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">💰</div>
          <div className="text-3xl font-bold text-purple-400 mb-1">
            ₹{getCurrentData()?.revenue?.toLocaleString() || 0}
          </div>
          <div className="text-slate-300 text-sm">Revenue Generated</div>
          <div className="text-xs text-purple-400 mt-2">
            ↑ {Math.round(Math.random() * 15)}% vs last period
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">📊</div>
          <div className="text-3xl font-bold text-orange-400 mb-1">
            {getCurrentData()?.occupancyRate || 0}%
          </div>
          <div className="text-slate-300 text-sm">Occupancy Rate</div>
          <div className="text-xs text-orange-400 mt-2">
            ↑ {Math.round(Math.random() * 10)}% vs last period
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-2">⭐</div>
          <div className="text-3xl font-bold text-amber-400 mb-1">
            {getCurrentData()?.averageRating || 0}
          </div>
          <div className="text-slate-300 text-sm">Avg Rating</div>
          <div className="text-xs text-amber-400 mt-2">
            ↑ 0.2 vs last period
          </div>
        </div>
      </div>

      {/* Vehicle Utilization */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-blue-400 mb-6">Vehicle Utilization Report</h3>
        <div className="space-y-4">
          {analytics.vehicleUtilization?.map((vehicle) => (
            <div key={vehicle.vehicle} className="bg-slate-700/30 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-slate-200">{vehicle.vehicle}</h4>
                <span className="text-2xl font-bold text-blue-400">{vehicle.utilization}%</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full ${
                    vehicle.utilization > 80 ? 'bg-emerald-500' :
                    vehicle.utilization > 60 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${vehicle.utilization}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>Efficiency: {vehicle.utilization > 80 ? 'Excellent' : vehicle.utilization > 60 ? 'Good' : 'Poor'}</span>
                <span>{Math.round(vehicle.utilization * 8 / 100)} hours active today</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Reports */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-emerald-400 mb-6">Detailed Performance Metrics</h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Booking Trends</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                <span className="text-slate-300">Morning Safaris</span>
                <span className="text-emerald-400 font-semibold">65%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                <span className="text-slate-300">Evening Safaris</span>
                <span className="text-blue-400 font-semibold">30%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                <span className="text-slate-300">Night Safaris</span>
                <span className="text-purple-400 font-semibold">5%</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-200 mb-4">Revenue Breakdown</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                <span className="text-slate-300">Safari Bookings</span>
                <span className="text-emerald-400 font-semibold">₹{Math.round(getCurrentData()?.revenue * 0.75).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                <span className="text-slate-300">Additional Services</span>
                <span className="text-blue-400 font-semibold">₹{Math.round(getCurrentData()?.revenue * 0.15).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/30 rounded-lg">
                <span className="text-slate-300">Fees & Charges</span>
                <span className="text-purple-400 font-semibold">₹{Math.round(getCurrentData()?.revenue * 0.10).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
