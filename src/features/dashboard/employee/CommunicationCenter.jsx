import React, { useState } from 'react';

export default function CommunicationCenter({ communication }) {
  const [activeTab, setActiveTab] = useState('messages');
  const [newMessage, setNewMessage] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [newBroadcast, setNewBroadcast] = useState('');

  const communicationTabs = [
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'broadcasts', label: 'Broadcasts', icon: '📢' },
    { id: 'compose', label: 'Compose', icon: '✏️' }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Handle message sending logic
    console.log('Sending message:', { to: selectedRecipient, message: newMessage });
    setNewMessage('');
    setSelectedRecipient('');
    alert('Message sent successfully!');
  };

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    // Handle broadcast sending logic
    console.log('Sending broadcast:', newBroadcast);
    setNewBroadcast('');
    alert('Broadcast sent to all staff!');
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'text-red-400 bg-red-500/10 border-red-500/30';
      case 'Medium': return 'text-orange-400 bg-orange-500/10 border-orange-500/30';
      case 'Low': return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/30';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent mb-6">
          Communication Center
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {communicationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Messages Tab */}
      {activeTab === 'messages' && (
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-200">Recent Messages</h3>
            <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-xl font-semibold transition-all duration-300">
              💬 New Message
            </button>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {communication.recentMessages?.map((message) => (
              <div 
                key={message.id} 
                className={`p-4 rounded-2xl border transition-all duration-300 ${
                  message.read 
                    ? 'bg-slate-700/30 border-slate-600/30' 
                    : 'bg-teal-500/10 border-teal-500/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                      <span className="text-teal-400 text-sm font-bold">
                        {message.from.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold">{message.from}</p>
                      <p className="text-slate-400 text-sm">to {message.to}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(message.priority)}`}>
                      {message.priority}
                    </span>
                    <span className="text-slate-400 text-xs">
                      {new Date(message.timestamp).toLocaleString()}
                    </span>
                    {!message.read && (
                      <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    )}
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{message.message}</p>
                <div className="flex gap-2 mt-3">
                  <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-semibold transition-all duration-300">
                    Reply
                  </button>
                  <button className="px-3 py-1 bg-slate-600 hover:bg-slate-500 rounded-lg text-xs font-semibold transition-all duration-300">
                    Forward
                  </button>
                  {!message.read && (
                    <button className="px-3 py-1 bg-teal-600 hover:bg-teal-700 rounded-lg text-xs font-semibold transition-all duration-300">
                      Mark Read
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Broadcasts Tab */}
      {activeTab === 'broadcasts' && (
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-slate-200">Broadcast Alerts</h3>
            <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded-xl font-semibold transition-all duration-300">
              📢 Send Broadcast
            </button>
          </div>

          <div className="space-y-4">
            {communication.broadcasts?.map((broadcast) => (
              <div 
                key={broadcast.id}
                className="p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📢</div>
                    <h4 className="text-lg font-semibold text-orange-400">{broadcast.title}</h4>
                  </div>
                  <div className="text-slate-400 text-sm">
                    {new Date(broadcast.timestamp).toLocaleString()}
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed mb-3">{broadcast.message}</p>
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(broadcast.priority)}`}>
                    {broadcast.priority} Priority
                  </span>
                  <span className="text-slate-400 text-xs">
                    Valid until: {new Date(broadcast.validUntil).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Compose Tab */}
      {activeTab === 'compose' && (
        <div className="space-y-6">
          {/* Compose Message */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-200 mb-6">Compose Message</h3>
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">To:</label>
                <select
                  value={selectedRecipient}
                  onChange={(e) => setSelectedRecipient(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white"
                  required
                >
                  <option value="">Select recipient...</option>
                  <option value="all-guides">All Guides</option>
                  <option value="all-drivers">All Drivers</option>
                  <option value="all-rangers">All Rangers</option>
                  <option value="control-room">Control Room</option>
                  <option value="supervisor">Supervisor</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Message:</label>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white h-32 resize-none"
                  placeholder="Type your message here..."
                  required
                />
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-xl font-semibold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Compose Broadcast */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-200 mb-6">Send Broadcast Alert</h3>
            <form onSubmit={handleSendBroadcast} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Broadcast Message:</label>
                <textarea
                  value={newBroadcast}
                  onChange={(e) => setNewBroadcast(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white h-32 resize-none"
                  placeholder="Enter broadcast message (will be sent to all staff)..."
                  required
                />
              </div>
              
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-orange-400">⚠️</span>
                  <span className="text-orange-400 font-semibold">Broadcast Alert</span>
                </div>
                <p className="text-slate-300 text-sm">
                  This message will be sent to all staff members immediately and will appear as a high-priority alert.
                </p>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-xl font-semibold transition-all duration-300"
              >
                Send Broadcast
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
