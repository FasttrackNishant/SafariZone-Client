import React, { useState } from 'react';

export default function StaffManagement({ staff }) {
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredStaff = staff.filter(member => {
    const roleMatch = filterRole === 'all' || member.role === filterRole;
    const statusMatch = filterStatus === 'all' || member.status === filterStatus;
    return roleMatch && statusMatch;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'On Duty': return 'bg-emerald-500/20 text-emerald-400';
      case 'On Leave': return 'bg-red-500/20 text-red-400';
      case 'Off Duty': return 'bg-slate-500/20 text-slate-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getRoleIcon = (role) => {
    switch(role) {
      case 'Driver': return '🚗';
      case 'Guide': return '🧑‍🏫';
      case 'Park Ranger': return '🌲';
      case 'Maintenance Staff': return '🔧';
      default: return '👤';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Staff Management
          </h2>
          
          <div className="flex gap-4 mt-4 lg:mt-0">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white"
            >
              <option value="all">All Roles</option>
              <option value="Driver">Drivers</option>
              <option value="Guide">Guides</option>
              <option value="Park Ranger">Rangers</option>
              <option value="Maintenance Staff">Maintenance</option>
            </select>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white"
            >
              <option value="all">All Status</option>
              <option value="On Duty">On Duty</option>
              <option value="Off Duty">Off Duty</option>
              <option value="On Leave">On Leave</option>
            </select>
            
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300">
              + Add Staff
            </button>
          </div>
        </div>

        {/* Staff Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">{staff.length}</div>
            <div className="text-slate-400 text-sm">Total Staff</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-1">
              {staff.filter(s => s.status === 'On Duty').length}
            </div>
            <div className="text-slate-400 text-sm">On Duty</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-red-400 mb-1">
              {staff.filter(s => s.status === 'On Leave').length}
            </div>
            <div className="text-slate-400 text-sm">On Leave</div>
          </div>
          <div className="bg-slate-700/30 rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold text-slate-400 mb-1">
              {staff.filter(s => s.status === 'Off Duty').length}
            </div>
            <div className="text-slate-400 text-sm">Off Duty</div>
          </div>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((member) => (
          <div 
            key={member.id}
            className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{getRoleIcon(member.role)}</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-200">{member.name}</h3>
                  <p className="text-slate-400 text-sm">{member.role}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(member.status)}`}>
                {member.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-slate-400">Contact:</span>
                <span className="text-slate-200">{member.contactNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Shift:</span>
                <span className="text-slate-200">{member.shiftTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Experience:</span>
                <span className="text-slate-200">{member.experience}</span>
              </div>
              
              {member.vehicleAssigned && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Vehicle:</span>
                  <span className="text-emerald-400">{member.vehicleAssigned}</span>
                </div>
              )}
              
              {member.languages && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Languages:</span>
                  <span className="text-slate-200">{member.languages.join(', ')}</span>
                </div>
              )}
              
              {member.rating && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Rating:</span>
                  <span className="text-amber-400">⭐ {member.rating}/5</span>
                </div>
              )}
              
              {member.todaysSafaris !== undefined && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Today's Safaris:</span>
                  <span className="text-blue-400">{member.todaysSafaris}</span>
                </div>
              )}
            </div>

            {/* Leave Reason (if on leave) */}
            {member.status === 'On Leave' && member.leaveReason && (
              <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-xs font-semibold">Leave Reason:</p>
                <p className="text-slate-300 text-xs">{member.leaveReason}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition-all duration-300">
                View Profile
              </button>
              <button className="flex-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-semibold transition-all duration-300">
                Edit Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
