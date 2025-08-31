import React from 'react';

export default function ProfileTabs({ activeTab, setActiveTab }) {
  const tabItems = [
    { id: 'personal', label: 'Personal Information', icon: '👤' },
    { id: 'contact', label: 'Contact & Address', icon: '📍' },
    { id: 'identity', label: 'Identity Documents', icon: '📄' },
    { id: 'account', label: 'Account Settings', icon: '⚙️' }
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
      {tabItems.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
          }`}
        >
          <span>{tab.icon}</span>
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
