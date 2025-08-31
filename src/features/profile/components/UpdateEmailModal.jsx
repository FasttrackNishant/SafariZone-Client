import React, { useState } from 'react';

export default function UpdateEmailModal({ isOpen, onClose, onSuccess, currentEmail }) {
  const [emailData, setEmailData] = useState({
    newEmail: '',
    password: '',
    confirmEmail: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1); // 1: Enter details, 2: Verification sent

  const validateForm = () => {
    const newErrors = {};

    if (!emailData.newEmail) {
      newErrors.newEmail = 'New email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailData.newEmail)) {
      newErrors.newEmail = 'Please enter a valid email address';
    } else if (emailData.newEmail.toLowerCase() === currentEmail.toLowerCase()) {
      newErrors.newEmail = 'New email must be different from current email';
    }

    if (!emailData.confirmEmail) {
      newErrors.confirmEmail = 'Please confirm your email address';
    } else if (emailData.newEmail !== emailData.confirmEmail) {
      newErrors.confirmEmail = 'Email addresses do not match';
    }

    if (!emailData.password) {
      newErrors.password = 'Password is required to confirm changes';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailUpdate = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // Simulate API call
      console.log('Updating email:', { 
        currentEmail, 
        newEmail: emailData.newEmail,
        password: emailData.password 
      });
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStep(2);
    } catch (error) {
      setErrors({ general: 'Failed to update email. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setEmailData({ newEmail: '', password: '', confirmEmail: '' });
    setErrors({});
    setIsLoading(false);
    setStep(1);
    onClose();
  };

  const handleComplete = () => {
    onSuccess('Verification email sent! Please check your inbox and click the verification link.');
    handleClose();
  };

  const handleInputChange = (field, value) => {
    setEmailData(prev => ({ ...prev, [field]: value }));
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
            <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
              <span className="text-amber-400 text-lg">📧</span>
            </div>
            <h3 className="text-2xl font-bold text-amber-400">
              {step === 1 ? 'Update Email' : 'Verification Sent'}
            </h3>
          </div>
          <button 
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-200 text-xl transition-colors duration-300"
          >
            ✕
          </button>
        </div>

        {step === 1 ? (
          // Step 1: Email Update Form
          <div className="space-y-4">
            {errors.general && (
              <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-xl text-red-400 text-sm">
                {errors.general}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Current Email
              </label>
              <div className="px-4 py-3 bg-slate-700/50 rounded-xl text-slate-300 border border-slate-600">
                {currentEmail}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                New Email Address *
              </label>
              <input
                type="email"
                value={emailData.newEmail}
                onChange={(e) => handleInputChange('newEmail', e.target.value)}
                className={`w-full px-4 py-3 bg-slate-700 border rounded-xl text-white focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${
                  errors.newEmail ? 'border-red-500' : 'border-slate-600'
                }`}
                placeholder="Enter new email address"
                disabled={isLoading}
              />
              {errors.newEmail && (
                <p className="mt-1 text-red-400 text-sm">{errors.newEmail}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Confirm New Email *
              </label>
              <input
                type="email"
                value={emailData.confirmEmail}
                onChange={(e) => handleInputChange('confirmEmail', e.target.value)}
                className={`w-full px-4 py-3 bg-slate-700 border rounded-xl text-white focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${
                  errors.confirmEmail ? 'border-red-500' : 'border-slate-600'
                }`}
                placeholder="Confirm new email address"
                disabled={isLoading}
              />
              {errors.confirmEmail && (
                <p className="mt-1 text-red-400 text-sm">{errors.confirmEmail}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Current Password *
              </label>
              <input
                type="password"
                value={emailData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`w-full px-4 py-3 bg-slate-700 border rounded-xl text-white focus:ring-2 focus:ring-amber-500 transition-all duration-300 ${
                  errors.password ? 'border-red-500' : 'border-slate-600'
                }`}
                placeholder="Enter your current password"
                disabled={isLoading}
              />
              {errors.password && (
                <p className="mt-1 text-red-400 text-sm">{errors.password}</p>
              )}
            </div>

            <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
              <h4 className="text-amber-400 font-semibold text-sm mb-2">⚠️ Important:</h4>
              <ul className="text-slate-300 text-xs space-y-1">
                <li>• A verification email will be sent to your new email address</li>
                <li>• You must click the verification link to complete the change</li>
                <li>• Your current email will remain active until verification</li>
                <li>• The verification link expires in 24 hours</li>
              </ul>
            </div>

            <div className="flex gap-4 mt-8">
              <button 
                onClick={handleEmailUpdate}
                disabled={isLoading}
                className="flex-1 px-4 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-amber-600/50 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>📧</span>
                    <span>Send Verification</span>
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
        ) : (
          // Step 2: Verification Sent
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl">✅</span>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-emerald-400 mb-2">
                Verification Email Sent!
              </h4>
              <p className="text-slate-300 leading-relaxed">
                We've sent a verification email to:
              </p>
              <p className="text-amber-400 font-semibold mt-2 break-all">
                {emailData.newEmail}
              </p>
            </div>

            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-4 text-left">
              <h5 className="text-emerald-400 font-semibold text-sm mb-2">Next Steps:</h5>
              <ol className="text-slate-300 text-sm space-y-1 list-decimal list-inside">
                <li>Check your new email inbox (and spam folder)</li>
                <li>Click the verification link in the email</li>
                <li>Your email will be updated once verified</li>
                <li>You'll receive a confirmation at both email addresses</li>
              </ol>
            </div>

            <button 
              onClick={handleComplete}
              className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300"
            >
              Got it!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
