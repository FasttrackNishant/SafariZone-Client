import React, { useState } from 'react';

export default function ChangePasswordModal({ isOpen, onClose, onSuccess }) {
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }

    if (!passwordData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (passwordData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(passwordData.newPassword)) {
      newErrors.newPassword = 'Password must contain uppercase, lowercase, number, and special character';
    }

    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = 'New passwords do not match';
    }

    if (passwordData.currentPassword === passwordData.newPassword) {
      newErrors.newPassword = 'New password must be different from current password';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordChange = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      console.log('Changing password:', { currentPassword: passwordData.currentPassword });
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      onSuccess('Password changed successfully!');
      handleClose();
    } catch (error) {
      setErrors({ general: 'Failed to change password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setErrors({});
    setIsLoading(false);
    onClose();
  };

  const handleInputChange = (field, value) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-md w-full border border-slate-700 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
              <span className="text-blue-400 text-lg">🔒</span>
            </div>
            <h3 className="text-2xl font-bold text-blue-400">Change Password</h3>
          </div>
          <button 
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-200 text-xl transition-colors duration-300"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-4">
          {errors.general && (
            <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-xl text-red-400 text-sm">
              {errors.general}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Current Password *
            </label>
            <input
              type="password"
              value={passwordData.currentPassword}
              onChange={(e) => handleInputChange('currentPassword', e.target.value)}
              className={`w-full px-4 py-3 bg-slate-700 border rounded-xl text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                errors.currentPassword ? 'border-red-500' : 'border-slate-600'
              }`}
              placeholder="Enter current password"
              disabled={isLoading}
            />
            {errors.currentPassword && (
              <p className="mt-1 text-red-400 text-sm">{errors.currentPassword}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              New Password *
            </label>
            <input
              type="password"
              value={passwordData.newPassword}
              onChange={(e) => handleInputChange('newPassword', e.target.value)}
              className={`w-full px-4 py-3 bg-slate-700 border rounded-xl text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                errors.newPassword ? 'border-red-500' : 'border-slate-600'
              }`}
              placeholder="Enter new password"
              disabled={isLoading}
            />
            {errors.newPassword && (
              <p className="mt-1 text-red-400 text-sm">{errors.newPassword}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Confirm New Password *
            </label>
            <input
              type="password"
              value={passwordData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className={`w-full px-4 py-3 bg-slate-700 border rounded-xl text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                errors.confirmPassword ? 'border-red-500' : 'border-slate-600'
              }`}
              placeholder="Confirm new password"
              disabled={isLoading}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-red-400 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
            <h4 className="text-blue-400 font-semibold text-sm mb-2">Password Requirements:</h4>
            <ul className="text-slate-300 text-xs space-y-1">
              <li className={`flex items-center space-x-2 ${passwordData.newPassword.length >= 8 ? 'text-green-400' : ''}`}>
                <span>{passwordData.newPassword.length >= 8 ? '✓' : '•'}</span>
                <span>At least 8 characters long</span>
              </li>
              <li className={`flex items-center space-x-2 ${/[A-Z]/.test(passwordData.newPassword) ? 'text-green-400' : ''}`}>
                <span>{/[A-Z]/.test(passwordData.newPassword) ? '✓' : '•'}</span>
                <span>Include uppercase letter</span>
              </li>
              <li className={`flex items-center space-x-2 ${/[a-z]/.test(passwordData.newPassword) ? 'text-green-400' : ''}`}>
                <span>{/[a-z]/.test(passwordData.newPassword) ? '✓' : '•'}</span>
                <span>Include lowercase letter</span>
              </li>
              <li className={`flex items-center space-x-2 ${/\d/.test(passwordData.newPassword) ? 'text-green-400' : ''}`}>
                <span>{/\d/.test(passwordData.newPassword) ? '✓' : '•'}</span>
                <span>Include at least one number</span>
              </li>
              <li className={`flex items-center space-x-2 ${/[@$!%*?&]/.test(passwordData.newPassword) ? 'text-green-400' : ''}`}>
                <span>{/[@$!%*?&]/.test(passwordData.newPassword) ? '✓' : '•'}</span>
                <span>Include special character (@$!%*?&)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex gap-4 mt-8">
          <button 
            onClick={handlePasswordChange}
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Changing...</span>
              </>
            ) : (
              <>
                <span>🔒</span>
                <span>Change Password</span>
              </>
            )}
          </button>
          <button 
            onClick={handleClose}
            disabled={isLoading}
            className="flex-1 px-4 py-3 bg-slate-600 hover:bg-slate-500 disabled:bg-slate-600/50 rounded-xl font-semibold transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
