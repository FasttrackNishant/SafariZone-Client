import React, { useState } from 'react';

export default function CheckInSystem({ safaris }) {
  const [scanMode, setScanMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredSafaris = safaris.filter(safari =>
    safari.bookingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    safari.touristName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheckIn = (bookingId) => {
    // Handle check-in logic here
    console.log(`Checking in booking: ${bookingId}`);
    alert(`Tourist checked in successfully for booking ${bookingId}`);
  };

  const getCheckInStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-emerald-500/20 text-emerald-400';
      case 'Pending': return 'bg-orange-500/20 text-orange-400';
      case 'Not Checked In': return 'bg-red-500/20 text-red-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            Tourist Check-In / Check-Out System
          </h2>
          
          <div className="flex gap-4 mt-4 lg:mt-0">
            <button
              onClick={() => setScanMode(!scanMode)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                scanMode 
                  ? 'bg-orange-600 hover:bg-orange-700' 
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              {scanMode ? '📱 Exit QR Mode' : '📱 QR Scanner'}
            </button>
          </div>
        </div>

        {/* Check-in Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">{safaris.length}</div>
            <div className="text-slate-400 text-sm">Total Bookings</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-1">
              {safaris.filter(s => s.checkInStatus === 'Completed').length}
            </div>
            <div className="text-slate-400 text-sm">Checked In</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-orange-400 mb-1">
              {safaris.filter(s => s.checkInStatus === 'Pending').length}
            </div>
            <div className="text-slate-400 text-sm">Pending</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-red-400 mb-1">
              {safaris.filter(s => s.checkInStatus === 'Not Checked In').length}
            </div>
            <div className="text-slate-400 text-sm">Not Checked In</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by Booking ID or Tourist Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white"
          />
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all duration-300">
            🔍 Search
          </button>
        </div>
      </div>

      {/* QR Scanner Mode */}
      {scanMode && (
        <div className="bg-gradient-to-br from-orange-800/20 to-orange-900/20 border border-orange-500/30 rounded-3xl p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4">QR Code Scanner Active</h3>
            <p className="text-slate-300 mb-6">Point your camera at the tourist's QR code to check them in automatically</p>
            <div className="inline-block p-8 border-2 border-dashed border-orange-500/50 rounded-2xl">
              <div className="w-32 h-32 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <span className="text-4xl text-orange-400">📷</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Check-in Table */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="px-4 py-3 text-slate-300 font-semibold">Booking ID</th>
                <th className="px-4 py-3 text-slate-300 font-semibold">Tourist Name</th>
                <th className="px-4 py-3 text-slate-300 font-semibold">Contact</th>
                <th className="px-4 py-3 text-slate-300 font-semibold">Safari Time</th>
                <th className="px-4 py-3 text-slate-300 font-semibold">Vehicle</th>
                <th className="px-4 py-3 text-slate-300 font-semibold">Passengers</th>
                <th className="px-4 py-3 text-slate-300 font-semibold">Check-In Status</th>
                <th className="px-4 py-3 text-slate-300 font-semibold">Check-In Time</th>
                <th className="px-4 py-3 text-slate-300 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSafaris.map((safari) => (
                <tr key={safari.bookingId} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                  <td className="px-4 py-4 text-slate-200 font-mono text-sm">{safari.bookingId}</td>
                  <td className="px-4 py-4 text-slate-200">{safari.touristName}</td>
                  <td className="px-4 py-4 text-slate-300">{safari.contactNumber}</td>
                  <td className="px-4 py-4 text-slate-300">{safari.time}</td>
                  <td className="px-4 py-4 text-slate-300">{safari.vehicleId}</td>
                  <td className="px-4 py-4 text-slate-300">{safari.totalPassengers}</td>
                  <td className="px-4 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCheckInStatusColor(safari.checkInStatus)}`}>
                      {safari.checkInStatus}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-slate-300">{safari.checkInTime || '-'}</td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      {safari.checkInStatus !== 'Completed' && (
                        <button
                          onClick={() => handleCheckIn(safari.bookingId)}
                          className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-xs font-semibold transition-all duration-300"
                        >
                          ✓ Check In
                        </button>
                      )}
                      <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-semibold transition-all duration-300">
                        👁️ View Details
                      </button>
                      {safari.checkInStatus === 'Completed' && (
                        <button className="px-3 py-1 bg-orange-600 hover:bg-orange-700 rounded-lg text-xs font-semibold transition-all duration-300">
                          📋 Check Out
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {filteredSafaris.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              <p className="text-lg">No bookings found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
