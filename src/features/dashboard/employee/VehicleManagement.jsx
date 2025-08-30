import React, { useState } from 'react';

export default function VehicleManagement({ vehicles }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Available': return 'bg-emerald-500/20 text-emerald-400';
      case 'In Use': return 'bg-blue-500/20 text-blue-400';
      case 'In Maintenance': return 'bg-red-500/20 text-red-400';
      case 'Out of Service': return 'bg-slate-500/20 text-slate-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getFuelLevelColor = (level) => {
    if (level > 50) return 'text-green-400';
    if (level > 20) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Vehicle Management
          </h2>
          
          <div className="flex gap-4 mt-4 lg:mt-0">
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300">
              + Add Vehicle
            </button>
            <button 
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                maintenanceMode 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-orange-600 hover:bg-orange-700'
              }`}
            >
              {maintenanceMode ? 'Exit Maintenance' : 'Maintenance Mode'}
            </button>
          </div>
        </div>

        {/* Fleet Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">{vehicles.length}</div>
            <div className="text-slate-400 text-sm">Total Vehicles</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-1">
              {vehicles.filter(v => v.status === 'Available').length}
            </div>
            <div className="text-slate-400 text-sm">Available</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {vehicles.filter(v => v.status === 'In Use').length}
            </div>
            <div className="text-slate-400 text-sm">In Use</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-red-400 mb-1">
              {vehicles.filter(v => v.status === 'In Maintenance').length}
            </div>
            <div className="text-slate-400 text-sm">Maintenance</div>
          </div>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div 
            key={vehicle.id}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">
                  {vehicle.type === 'Jeep' ? '🚙' : vehicle.type === 'Canter' ? '🚌' : '🚐'}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200">{vehicle.id}</h3>
                  <p className="text-slate-400 text-sm">{vehicle.registrationNumber}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(vehicle.status)}`}>
                {vehicle.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Type:</span>
                <span className="text-slate-200">{vehicle.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Capacity:</span>
                <span className="text-slate-200">{vehicle.capacity} passengers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200">{vehicle.currentLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Driver:</span>
                <span className="text-slate-200">{vehicle.driverId || 'Unassigned'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Fuel Level:</span>
                <span className={`font-semibold ${getFuelLevelColor(vehicle.fuelLevel)}`}>
                  {vehicle.fuelLevel}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">KMs Driven:</span>
                <span className="text-slate-200">{vehicle.kmsDriven.toLocaleString()} km</span>
              </div>
            </div>

            {/* Fuel Level Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-slate-400 mb-1">
                <span>Fuel Level</span>
                <span>{vehicle.fuelLevel}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${
                    vehicle.fuelLevel > 50 ? 'bg-green-500' :
                    vehicle.fuelLevel > 20 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${vehicle.fuelLevel}%` }}
                ></div>
              </div>
            </div>

            {/* Maintenance Info */}
            <div className="bg-slate-700/30 rounded-xl p-3 mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Last Maintenance:</span>
                <span className="text-slate-200">{vehicle.lastMaintenance}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Next Due:</span>
                <span className="text-orange-400">{vehicle.nextMaintenance}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-all duration-300">
                View Details
              </button>
              {vehicle.status === 'Available' ? (
                <button className="flex-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-semibold transition-all duration-300">
                  Assign
                </button>
              ) : (
                <button className="flex-1 px-3 py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-sm font-semibold transition-all duration-300">
                  Update
                </button>
              )}
            </div>

            {vehicle.maintenanceIssue && (
              <div className="mt-3 p-2 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-xs font-semibold">Issue:</p>
                <p className="text-slate-300 text-xs">{vehicle.maintenanceIssue}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
