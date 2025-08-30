import React, { useState } from 'react';

export default function ProfileSection({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);
  const [activeTab, setActiveTab] = useState('personal');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the profile
    setUser(formData);
    setEditMode(false);
  };

  const profileTabs = [
    { id: 'personal', label: 'Personal Info', icon: '👤' },
    { id: 'preferences', label: 'Preferences', icon: '⚙️' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'notifications', label: 'Notification Settings', icon: '🔔' }
  ];

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Membership Tier</label>
              <select
                name="membershipTier"
                value={formData.membershipTier}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="px-6 py-3 bg-slate-600 hover:bg-slate-500 rounded-xl font-semibold transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="flex items-center space-x-6 mb-6">
            <div className="relative">
              <img 
                src={user.profilePicture} 
                alt={user.name}
                className="w-20 h-20 rounded-full border-3 border-emerald-500"
              />
              <button className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-xs text-white hover:bg-emerald-700 transition-all duration-300">
                📷
              </button>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-200">{user.name}</h3>
              <p className="text-emerald-400 font-semibold">{user.membershipTier} Member</p>
              <p className="text-slate-400 text-sm">Member since {user.joinedDate}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-1">Email Address</label>
                <p className="text-slate-200 text-lg">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-1">Phone Number</label>
                <p className="text-slate-200 text-lg">{user.phone}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-1">Total Bookings</label>
                <p className="text-slate-200 text-lg">{user.totalBookings}</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-1">Loyalty Points</label>
                <p className="text-emerald-400 text-lg font-semibold">{user.pointsEarned} pts</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setEditMode(true)}
            className="mt-6 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'personal':
        return renderPersonalInfo();
      case 'preferences':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">Travel Preferences</h3>
            <p className="text-slate-400">Set your preferred safari times, vehicle types, and park preferences.</p>
            {/* Add preference settings here */}
          </div>
        );
      case 'security':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">Security Settings</h3>
            <p className="text-slate-400">Manage your password and account security settings.</p>
            {/* Add security settings here */}
          </div>
        );
      case 'notifications':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-200">Notification Preferences</h3>
            <p className="text-slate-400">Choose how you want to receive notifications about your bookings.</p>
            {/* Add notification settings here */}
          </div>
        );
      default:
        return renderPersonalInfo();
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
          Profile Settings
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {profileTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
}
