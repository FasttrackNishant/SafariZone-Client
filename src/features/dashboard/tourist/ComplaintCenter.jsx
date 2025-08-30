import { useState } from 'react';

export default function ComplaintCenter({ complaints }) {
  const [newComplaint, setNewComplaint] = useState({
    bookingId: '',
    subject: '',
    description: '',
    priority: 'Medium'
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle complaint submission
    console.log('Complaint submitted:', newComplaint);
    setShowForm(false);
    setNewComplaint({ bookingId: '', subject: '', description: '', priority: 'Medium' });
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
          Complaint Center
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300"
        >
          + File Complaint
        </button>
      </div>

      {showForm && (
        <div className="bg-slate-700/30 rounded-2xl p-6 mb-6">
          <h3 className="text-xl font-semibold text-slate-200 mb-4">File New Complaint</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Booking ID"
                value={newComplaint.bookingId}
                onChange={(e) => setNewComplaint({...newComplaint, bookingId: e.target.value})}
                className="px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
                required
              />
              <select
                value={newComplaint.priority}
                onChange={(e) => setNewComplaint({...newComplaint, priority: e.target.value})}
                className="px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
              >
                <option value="Low">Low Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={newComplaint.subject}
              onChange={(e) => setNewComplaint({...newComplaint, subject: e.target.value})}
              className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white"
              required
            />
            <textarea
              placeholder="Description"
              value={newComplaint.description}
              onChange={(e) => setNewComplaint({...newComplaint, description: e.target.value})}
              className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-xl text-white h-24"
              required
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-xl font-semibold transition-all duration-300"
              >
                Submit Complaint
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-2 bg-slate-600 hover:bg-slate-500 rounded-xl font-semibold transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {complaints.map((complaint) => (
          <div key={complaint.complaintId} className="bg-slate-700/30 rounded-2xl p-6 border border-slate-600/30">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <h3 className="text-lg font-semibold text-slate-200">{complaint.subject}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  complaint.status === 'Resolved' 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {complaint.status}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  complaint.priority === 'High' 
                    ? 'bg-red-500/20 text-red-400'
                    : complaint.priority === 'Medium'
                    ? 'bg-orange-500/20 text-orange-400'
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {complaint.priority}
                </span>
              </div>
              <div className="text-slate-400 text-sm">
                ID: {complaint.complaintId} | {complaint.date}
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-2">{complaint.description}</p>
            {complaint.resolution && (
              <div className="mt-3 p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                <p className="text-emerald-400 text-sm font-semibold">Resolution:</p>
                <p className="text-slate-300 text-sm">{complaint.resolution}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
