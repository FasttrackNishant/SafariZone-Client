import React, { useState } from 'react';

export default function SafariManagement({ safaris }) {
  const [selectedSafari, setSelectedSafari] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredSafaris = safaris.filter(safari => 
    filterStatus === 'all' || safari.status.toLowerCase().includes(filterStatus)
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'Confirmed': return 'bg-emerald-500/20 text-emerald-400';
      case 'Checked In': return 'bg-blue-500/20 text-blue-400';
      case 'In Progress': return 'bg-orange-500/20 text-orange-400';
      case 'Completed': return 'bg-green-500/20 text-green-400';
      case 'Cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Safari Management
          </h2>
          
          <div className="flex gap-4 mt-4 lg:mt-0">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="checked">Checked In</option>
              <option value="progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
            
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300">
              + New Booking
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-1">{safaris.length}</div>
            <div className="text-slate-400 text-sm">Total Safaris Today</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {safaris.filter(s => s.status === 'Checked In').length}
            </div>
            <div className="text-slate-400 text-sm">Checked In</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">
              {safaris.filter(s => s.checkInStatus === 'Pending').length}
            </div>
            <div className="text-slate-400 text-sm">Pending Check-in</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">
              {safaris.reduce((sum, s) => sum + s.seatsBooked, 0)}
            </div>
            <div className="text-slate-400 text-sm">Total Tourists</div>
          </div>
        </div>
      </div>

      {/* Safari List */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <div className="space-y-4">
          {filteredSafaris.map((safari) => (
            <div 
              key={safari.bookingId} 
              className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12 gap-4 items-center">
                <div className="lg:col-span-3">
                  <h3 className="text-lg font-semibold text-slate-200">{safari.touristName}</h3>
                  <p className="text-slate-400 text-sm">ID: {safari.bookingId}</p>
                  <p className="text-slate-400 text-sm">📞 {safari.contactNumber}</p>
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-slate-200 font-medium">{safari.zone}</p>
                  <p className="text-slate-400 text-sm">{safari.session}</p>
                  <p className="text-slate-400 text-sm">{safari.time}</p>
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-slate-200">🚙 {safari.vehicleId}</p>
                  <p className="text-slate-400 text-sm">👨‍✈️ Driver: {safari.driverId}</p>
                  <p className="text-slate-400 text-sm">🧑‍🏫 Guide: {safari.guideId}</p>
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-slate-200">👥 {safari.totalPassengers} passengers</p>
                  <p className="text-slate-400 text-sm">💺 {safari.seatsBooked} seats</p>
                  {safari.specialRequests && (
                    <p className="text-amber-400 text-sm">⚠️ {safari.specialRequests}</p>
                  )}
                </div>
                
                <div className="lg:col-span-2">
                  <div className="flex flex-col space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-center ${getStatusColor(safari.status)}`}>
                      {safari.status}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-center ${
                      safari.checkInStatus === 'Completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {safari.checkInStatus === 'Completed' ? 'Checked In' : 'Check-in Pending'}
                    </span>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="flex flex-col space-y-2">
                    <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-semibold transition-all duration-300">
                      View Details
                    </button>
                    <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-xs font-semibold transition-all duration-300">
                      Check In
                    </button>
                    <button className="px-3 py-1 bg-slate-600 hover:bg-slate-500 rounded-lg text-xs font-semibold transition-all duration-300">
                      Modify
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
