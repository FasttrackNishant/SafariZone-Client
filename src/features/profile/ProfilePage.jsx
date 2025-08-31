import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../main/navbar/Navbar';
import Footer from '../main/footer/Footer';
import BackgroundOrbs from '../booking/BackgroundOrbs';
import ProfileSummary from './components/ProfileSummary';
import ProfileTabs from './components/ProfileTabs';
import PersonalInfo from './components/PersonalInfo';
import ContactInfo from './components/ContactInfo';
import IdentityDocuments from './components/IdentityDocuments';
import AccountSettings from './components/AccountSettings';
import { profileData, identityProofs } from './profileData';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('personal');
  const [editMode, setEditMode] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [profile, setProfile] = useState(profileData);
  const [identityDocs, setIdentityDocs] = useState(identityProofs);
  const [showNotificationPrefs, setShowNotificationPrefs] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting && target.id) {
            setIsVisible(prev => ({ ...prev, [target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleUpdateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  const handleUpdateIdentityDocs = (docs) => {
    setIdentityDocs(docs);
  };

  const handleSaveProfile = async () => {
    try {
      // Here you would make API call to save profile
      console.log('Saving profile:', profile);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEditMode(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Failed to save profile. Please try again.');
    }
  };

  const getInitials = () => {
    const first = profile.FirstName?.charAt(0) || '';
    const last = profile.LastName?.charAt(0) || '';
    return (first + last).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      <Navbar />
      <BackgroundOrbs />

      {/* Header Section */}
      <section className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div 
            className="text-center mb-12"
            data-animate
            id="header"
          >
            <h1 className={`text-5xl font-black mb-4 transition-all duration-1000 ${
              isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                My Profile
              </span>
            </h1>
            <p className={`text-xl text-slate-300 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Manage your personal information and account settings
            </p>
          </div>

          <ProfileSummary 
            profile={profile}
            editMode={editMode}
            setEditMode={setEditMode}
            onProfilePictureChange={(imageUrl) => 
              setProfile(prev => ({ ...prev, ProfilePictureUrl: imageUrl }))
            }
            onSaveProfile={handleSaveProfile}
            onCancelEdit={() => {
              setEditMode(false);
              setProfile(profileData); // Reset to original data
            }}
            initials={getInitials()}
          />
        </div>
      </section>

      {/* Profile Content */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <ProfileTabs 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mt-8">
          {activeTab === 'personal' && (
            <PersonalInfo 
              profile={profile}
              editMode={editMode}
              onChange={handleUpdateProfile}
            />
          )}

          {activeTab === 'contact' && (
            <ContactInfo 
              profile={profile}
              editMode={editMode}
              onChange={handleUpdateProfile}
            />
          )}

          {activeTab === 'identity' && (
            <IdentityDocuments 
              docs={identityDocs}
              editMode={editMode}
              onChange={handleUpdateIdentityDocs}
            />
          )}

          {activeTab === 'account' && (
            <AccountSettings 
              profile={profile}
              onNotificationPrefs={() => setShowNotificationPrefs(true)}
              onDeleteAccount={() => setShowDeleteConfirm(true)}
              onLogout={() => {
                localStorage.clear();
                navigate('/');
              }}
            />
          )}
        </div>
      </section>

      {/* Notification Preferences Modal */}
      {showNotificationPrefs && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-3xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-slate-200 mb-6">Notification Preferences</h3>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-emerald-600" defaultChecked />
                <span className="text-slate-300">Email notifications</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-emerald-600" defaultChecked />
                <span className="text-slate-300">SMS notifications</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-emerald-600" defaultChecked />
                <span className="text-slate-300">Marketing updates</span>
              </label>
            </div>
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setShowNotificationPrefs(false)}
                className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300"
              >
                Save
              </button>
              <button 
                onClick={() => setShowNotificationPrefs(false)}
                className="flex-1 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-xl font-semibold transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-3xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Delete Account</h3>
            <p className="text-slate-300 mb-6">
              Are you sure you want to delete your account? This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  alert('Account deletion initiated. You will receive an email confirmation.');
                  setShowDeleteConfirm(false);
                }}
                className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition-all duration-300"
              >
                Delete Account
              </button>
              <button 
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-xl font-semibold transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
