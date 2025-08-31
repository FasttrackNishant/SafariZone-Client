import React, { useState } from 'react';
import ChangePasswordModal from './ChangePasswordModal';
import UpdateEmailModal from './UpdateEmailModal';

export default function AccountSettings({ 
  profile, 
  onNotificationPrefs, 
  onDeleteAccount,
  onLogout 
}) {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handlePasswordSuccess = (message) => {
    alert(message);
  };

  const handleEmailSuccess = (message) => {
    alert(message);
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-slate-200">Account Settings</h3>
      
      {/* Profile Completion */}
      <div className="bg-slate-700/30 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-slate-200 mb-4">Profile Completion</h4>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-slate-600 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full transition-all duration-500"
              style={{ width: profile.IsProfileComplete ? '100%' : '75%' }}
            ></div>
          </div>
          <span className="text-emerald-400 font-semibold">
            {profile.IsProfileComplete ? '100%' : '75%'}
          </span>
        </div>
        <p className="text-slate-400 text-sm mt-2">
          {profile.IsProfileComplete 
            ? 'Your profile is complete!' 
            : 'Complete your profile to unlock all features'
          }
        </p>
      </div>

      {/* Membership Info */}
      <div className="bg-slate-700/30 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-slate-200 mb-4">Membership Information</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <span className="text-slate-400">Current Tier:</span>
            <span className="ml-2 text-emerald-400 font-semibold">{profile.MembershipTier}</span>
          </div>
          <div>
            <span className="text-slate-400">Member Since:</span>
            <span className="ml-2 text-slate-200">
              {new Date(profile.CreatedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long'
              })}
            </span>
          </div>
          <div>
            <span className="text-slate-400">Loyalty Points:</span>
            <span className="ml-2 text-amber-400 font-semibold">{profile.LoyaltyPoints} pts</span>
          </div>
          <div>
            <span className="text-slate-400">Total Bookings:</span>
            <span className="ml-2 text-blue-400 font-semibold">{profile.TotalBookings}</span>
          </div>
        </div>
      </div>

      {/* Account Actions */}
      <div className="bg-slate-700/30 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-slate-200 mb-4">Account Actions</h4>
        <div className="space-y-3">
          <button 
            onClick={() => setShowPasswordModal(true)}
            className="w-full flex items-center justify-between p-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-xl border border-blue-500/30 text-blue-400 transition-all duration-300"
          >
            <span>🔒 Change Password</span>
            <span>→</span>
          </button>
          
          <button 
            onClick={() => setShowEmailModal(true)}
            className="w-full flex items-center justify-between p-4 bg-amber-600/20 hover:bg-amber-600/30 rounded-xl border border-amber-500/30 text-amber-400 transition-all duration-300"
          >
            <span>📧 Update Email</span>
            <span>→</span>
          </button>
          
          <button 
            onClick={onNotificationPrefs}
            className="w-full flex items-center justify-between p-4 bg-purple-600/20 hover:bg-purple-600/30 rounded-xl border border-purple-500/30 text-purple-400 transition-all duration-300"
          >
            <span>🔔 Notification Preferences</span>
            <span>→</span>
          </button>
          
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-between p-4 bg-green-600/20 hover:bg-green-600/30 rounded-xl border border-green-500/30 text-green-400 transition-all duration-300"
          >
            <span>🚪 Sign Out</span>
            <span>→</span>
          </button>
          
          <button 
            onClick={onDeleteAccount}
            className="w-full flex items-center justify-between p-4 bg-red-600/20 hover:bg-red-600/30 rounded-xl border border-red-500/30 text-red-400 transition-all duration-300"
          >
            <span>🗑️ Delete Account</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Modals */}
      <ChangePasswordModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        onSuccess={handlePasswordSuccess}
      />

      <UpdateEmailModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSuccess={handleEmailSuccess}
        currentEmail={profile.Email}
      />
    </div>
  );
}
