import React from 'react';
import { genderTypes } from '../profileData';

export default function PersonalInfo({ profile, editMode, onChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...profile, [name]: value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-200 mb-6">Personal Information</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">First Name</label>
          {editMode ? (
            <input
              type="text"
              name="FirstName"
              value={profile.FirstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            />
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {profile.FirstName}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Last Name</label>
          {editMode ? (
            <input
              type="text"
              name="LastName"
              value={profile.LastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            />
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {profile.LastName}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Date of Birth</label>
          {editMode ? (
            <input
              type="date"
              name="DateOfBirth"
              value={profile.DateOfBirth}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            />
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {new Date(profile.DateOfBirth).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Gender</label>
          {editMode ? (
            <select
              name="GenderId"
              value={profile.GenderId}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            >
              {Object.entries(genderTypes).map(([id, gender]) => (
                <option key={id} value={id}>{gender}</option>
              ))}
            </select>
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {genderTypes[profile.GenderId]}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
