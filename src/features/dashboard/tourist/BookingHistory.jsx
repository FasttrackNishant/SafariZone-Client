import React, { useState } from 'react';

export default function BookingHistory({ bookings }) {
  const [filter, setFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredBookings = bookings.filter(booking => {
    const statusMatch = filter === 'all' || booking.status.toLowerCase() === filter;
    const ratingMatch = !ratingFilter || booking.rating >= parseInt(ratingFilter);
    return statusMatch && ratingMatch;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-emerald-500/20 text-emerald-400';
      case 'Cancelled': return 'bg-red-500/20 text-red-400';
      case 'Pending': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const renderStars = (rating) => {
    if (!rating) return '-';
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 lg:mb-0">
          Booking History
        </h2>
        
        {/* Filters */}
        <div className="flex gap-4">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="pending">Pending</option>
          </select>
          
          <select 
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white"
          >
            <option value="">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-600">
              <th className="px-4 py-3 text-slate-300 font-semibold">Booking ID</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Park</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Zone</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Date</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Session</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Vehicle</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Seats</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Amount</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Status</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Rating</th>
              <th className="px-4 py-3 text-slate-300 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.bookingId} className="border-b border-slate-700/50 hover:bg-slate-700/20">
                <td className="px-4 py-4 text-slate-200 font-mono text-sm">{booking.bookingId}</td>
                <td className="px-4 py-4 text-slate-200">{booking.parkName}</td>
                <td className="px-4 py-4 text-slate-300">{booking.zoneName}</td>
                <td className="px-4 py-4 text-slate-300">{booking.date}</td>
                <td className="px-4 py-4 text-slate-300">{booking.sessionName}</td>
                <td className="px-4 py-4 text-slate-300">{booking.vehicleType}</td>
                <td className="px-4 py-4 text-slate-300">{booking.seatsBooked}</td>
                <td className="px-4 py-4 text-emerald-400 font-semibold">₹{booking.totalAmount?.toLocaleString()}</td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-amber-400">{renderStars(booking.rating)}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-semibold transition-all duration-300">
                      View Details
                    </button>
                    {booking.status === 'Completed' && !booking.rating && (
                      <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-xs font-semibold transition-all duration-300">
                        Rate & Review
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredBookings.length === 0 && (
          <div className="text-center py-8 text-slate-400">
            <p className="text-lg">No bookings found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
