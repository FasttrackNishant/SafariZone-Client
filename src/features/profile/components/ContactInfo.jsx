import React from 'react';
import { countries, states } from '../profileData';

export default function ContactInfo({ profile, editMode, onChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...profile, [name]: value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-200 mb-6">Contact & Address Information</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Phone Number</label>
          {editMode ? (
            <input
              type="tel"
              name="PhoneNumber"
              value={profile.PhoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            />
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {profile.PhoneNumber}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
          <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
            {profile.Email}
          </div>
          <p className="text-xs text-slate-400 mt-1">Email cannot be changed here</p>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-300 mb-2">Street Address</label>
          {editMode ? (
            <input
              type="text"
              name="Street"
              value={profile.Street}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            />
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {profile.Street}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">City</label>
          {editMode ? (
            <input
              type="text"
              name="City"
              value={profile.City}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            />
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {profile.City}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">State</label>
          {editMode ? (
            <select
              name="State"
              value={profile.State}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            >
              {states.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {profile.State}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">ZIP Code</label>
          {editMode ? (
            <input
              type="text"
              name="ZipCode"
              value={profile.ZipCode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            />
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {profile.ZipCode}
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Country</label>
          {editMode ? (
            <select
              name="CountryId"
              value={profile.CountryId}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white focus:ring-2 focus:ring-emerald-500"
            >
              {Object.entries(countries).map(([id, country]) => (
                <option key={id} value={id}>{country.CountryName}</option>
              ))}
            </select>
          ) : (
            <div className="px-4 py-3 bg-slate-700/30 rounded-xl text-slate-200">
              {countries[profile.CountryId]?.CountryName}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
