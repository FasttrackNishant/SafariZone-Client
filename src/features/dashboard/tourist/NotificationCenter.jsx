import React, { useState } from 'react';

export default function NotificationCenter({ notifications, setNotifications }) {
  const [filter, setFilter] = useState('all');

  const markAsRead = (id) => {
    if (!setNotifications) return;
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    if (!setNotifications) return;
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    if (!setNotifications) return;
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    return notification.type.toLowerCase() === filter;
  });

  const getNotificationIcon = (type) => {
    switch(type.toLowerCase()) {
      case 'reminder': return '⏰';
      case 'update': return '📢';
      case 'offer': return '🎉';
      case 'alert': return '⚠️';
      default: return '🔔';
    }
  };

  const getNotificationColor = (type) => {
    switch(type.toLowerCase()) {
      case 'reminder': return 'border-blue-500/30 bg-blue-900/20';
      case 'update': return 'border-orange-500/30 bg-orange-900/20';
      case 'offer': return 'border-emerald-500/30 bg-emerald-900/20';
      case 'alert': return 'border-red-500/30 bg-red-900/20';
      default: return 'border-slate-500/30 bg-slate-700/30';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 lg:mb-0">
          Notification Center
        </h2>
        
        <div className="flex gap-4">
          {/* Filter Dropdown */}
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 bg-slate-700 border border-slate-600 rounded-xl text-white"
          >
            <option value="all">All Notifications</option>
            <option value="unread">Unread</option>
            <option value="reminder">Reminders</option>
            <option value="update">Updates</option>
            <option value="offer">Offers</option>
          </select>
          
          {setNotifications && (
            <button 
              onClick={markAllAsRead}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300"
            >
              Mark All Read
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {filteredNotifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-4 rounded-2xl border transition-all duration-300 ${
              notification.read 
                ? 'bg-slate-700/30 border-slate-600/30' 
                : getNotificationColor(notification.type)
            } ${!notification.read ? 'shadow-lg' : ''}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3 flex-1">
                <div className="text-2xl">{getNotificationIcon(notification.type)}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      notification.type === 'reminder' ? 'bg-blue-500/20 text-blue-400' :
                      notification.type === 'update' ? 'bg-orange-500/20 text-orange-400' :
                      notification.type === 'offer' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {notification.type}
                    </span>
                    {!notification.read && (
                      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    )}
                  </div>
                  
                  <h3 className="font-semibold text-slate-200 mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-2">
                    {notification.message}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {notification.date}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-2 ml-4">
                {!notification.read && setNotifications && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-all duration-300"
                    title="Mark as read"
                  >
                    ✓
                  </button>
                )}
                {setNotifications && (
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-300"
                    title="Delete notification"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {filteredNotifications.length === 0 && (
          <div className="text-center py-8 text-slate-400">
            <div className="text-4xl mb-2">🔔</div>
            <p className="text-lg">No notifications found.</p>
            <p className="text-sm">You're all caught up!</p>
          </div>
        )}
      </div>
    </div>
  );
}
