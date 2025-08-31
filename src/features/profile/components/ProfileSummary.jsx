import React, { useState } from 'react';

export default function ProfileSummary({ 
  profile, 
  editMode, 
  setEditMode, 
  onProfilePictureChange,
  onSaveProfile,
  onCancelEdit,
  initials 
}) {
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result);
        onProfilePictureChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Profile Picture */}
        <div className="relative">
          {profile.ProfilePictureUrl || profilePicturePreview ? (
            <img
              src={profilePicturePreview || profile.ProfilePictureUrl}
              alt={`${profile.FirstName} ${profile.LastName}`}
              className="w-32 h-32 rounded-full border-4 border-emerald-500 object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full border-4 border-emerald-500 bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-4xl font-bold text-white">
              {initials}
            </div>
          )}
          
          {editMode && (
            <label className="absolute bottom-0 right-0 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-700 transition-colors duration-300">
              <span className="text-white text-sm">📷</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-slate-200 mb-2">
            {profile.FirstName} {profile.LastName}
          </h2>
          <p className="text-emerald-400 text-lg font-semibold mb-2">
            {profile.MembershipTier} Member
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-slate-300">
            <span className="flex items-center">
              📧 {profile.Email}
            </span>
            <span className="flex items-center">
              📱 {profile.PhoneNumber}
            </span>
            <span className="flex items-center">
              🎂 {calculateAge(profile.DateOfBirth)} years old
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-slate-700/30 rounded-xl p-4">
            <div className="text-2xl font-bold text-emerald-400">{profile.TotalBookings}</div>
            <div className="text-slate-400 text-sm">Total Bookings</div>
          </div>
          <div className="bg-slate-700/30 rounded-xl p-4">
            <div className="text-2xl font-bold text-amber-400">{profile.LoyaltyPoints}</div>
            <div className="text-slate-400 text-sm">Loyalty Points</div>
          </div>
        </div>

        {/* Edit Buttons */}
        <div className="flex items-center space-x-4">
          {editMode ? (
            <>
              <button
                onClick={onSaveProfile}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                💾 Save Changes
              </button>
              <button
                onClick={onCancelEdit}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition-all duration-300"
              >
                ❌ Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              ✏️ Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
