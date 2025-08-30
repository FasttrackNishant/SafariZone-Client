import React, { useState } from 'react';

export default function ParkOperations({ operations }) {
  const [selectedAlert, setSelectedAlert] = useState(null);

  const getAlertColor = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Medium': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Low': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Active': return 'bg-red-500/20 text-red-400';
      case 'Resolved': return 'bg-emerald-500/20 text-emerald-400';
      case 'In Progress': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
          Park Operations
        </h2>

        {/* Current Occupancy */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-700/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Zone Occupancy</h3>
            {Object.entries(operations.currentOccupancy || {}).map(([zone, data]) => (
              <div key={zone} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300 capitalize">{zone.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-slate-200">{data.current}/{data.maximum}</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      (data.current / data.maximum) > 0.8 ? 'bg-red-500' :
                      (data.current / data.maximum) > 0.6 ? 'bg-orange-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${(data.current / data.maximum) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-700/30 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-200 mb-4">Weather Conditions</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400">Temperature:</span>
                <span className="text-slate-200">{operations.weatherConditions?.temperature}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Humidity:</span>
                <span className="text-slate-200">{operations.weatherConditions?.humidity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Wind Speed:</span>
                <span className="text-slate-200">{operations.weatherConditions?.windSpeed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Visibility:</span>
                <span className="text-slate-200">{operations.weatherConditions?.visibility}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Rain Forecast:</span>
                <span className="text-slate-200">{operations.weatherConditions?.rainForecast}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Alerts */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-red-400">Emergency Alerts</h3>
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition-all duration-300">
            + New Alert
          </button>
        </div>

        <div className="space-y-4">
          {operations.emergencyAlerts?.map((alert) => (
            <div 
              key={alert.id}
              className={`p-6 rounded-2xl border transition-all duration-300 ${getAlertColor(alert.priority)}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">
                    {alert.type === 'Animal Sighting' ? '🐅' :
                     alert.type === 'Vehicle Breakdown' ? '🔧' :
                     alert.type === 'Weather Alert' ? '🌧️' : '⚠️'}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{alert.type}</h4>
                    <p className="text-sm opacity-75">{alert.location}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    alert.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                    alert.priority === 'Medium' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {alert.priority} Priority
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(alert.status)}`}>
                    {alert.status}
                  </span>
                </div>
              </div>
              
              <p className="text-sm mb-3">{alert.description}</p>
              
              <div className="bg-black/20 rounded-lg p-3 mb-3">
                <p className="text-xs font-semibold mb-1">Recommended Action:</p>
                <p className="text-sm">{alert.action}</p>
              </div>
              
              <div className="flex items-center justify-between text-xs opacity-75">
                <span>Reported by: {alert.reportedBy}</span>
                <span>{new Date(alert.timestamp).toLocaleString()}</span>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-semibold transition-all duration-300">
                  View Details
                </button>
                {alert.status === 'Active' && (
                  <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-xs font-semibold transition-all duration-300">
                    Mark Resolved
                  </button>
                )}
                <button className="px-3 py-1 bg-orange-600 hover:bg-orange-700 rounded-lg text-xs font-semibold transition-all duration-300">
                  Update Status
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {!operations.emergencyAlerts?.length && (
          <div className="text-center py-8 text-slate-400">
            <div className="text-4xl mb-2">✅</div>
            <p className="text-lg">No active emergency alerts</p>
            <p className="text-sm">All systems operating normally</p>
          </div>
        )}
      </div>

      {/* Tourist Flow Analysis */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h3 className="text-2xl font-bold text-blue-400 mb-6">Tourist Flow Analysis</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {operations.touristFlow?.map((flow, index) => (
            <div key={index} className="bg-slate-700/30 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">
                {index === 0 ? '🌅' : index === 1 ? '☀️' : '🌆'}
              </div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">{flow.timeSlot}</h4>
              <div className="text-3xl font-bold text-emerald-400 mb-1">{flow.count}</div>
              <div className="text-slate-400 text-sm">Visitors</div>
              <div className="w-full bg-slate-600 rounded-full h-2 mt-3">
                <div 
                  className="h-2 rounded-full bg-emerald-500"
                  style={{ width: `${(flow.count / 60) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
