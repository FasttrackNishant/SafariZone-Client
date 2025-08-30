import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import dashboardData from './dashboard-data';

// Component imports
import WelcomeSection from './WelcomeSection';
import UpcomingTrips from './UpcomingTrips';
import BookingHistory from './BookingHistory';
import ComplaintCenter from './ComplaintCenter';
import NotificationCenter from './NotificationCenter';
import ProfileSection from './ProfileSection';
import SupportSection from './SupportSection';
import StatsOverview from './StatsOverview';

export default function TouristDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(dashboardData.user);
  const [notifications, setNotifications] = useState(dashboardData.notifications);
  const [isVisible, setIsVisible] = useState({});

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

  const sidebarItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: '🏠' },
    { id: 'trips', label: 'My Trips', icon: '🎯' },
    { id: 'history', label: 'Booking History', icon: '📋' },
    { id: 'complaints', label: 'Complaints', icon: '⚠️' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'profile', label: 'Profile Settings', icon: '👤' },
    { id: 'support', label: 'Support', icon: '💬' }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <WelcomeSection user={user} quickLinks={dashboardData.quickLinks} />
            <StatsOverview stats={dashboardData.stats} />
            <UpcomingTrips trips={dashboardData.upcomingTrips.slice(0, 2)} />
            <NotificationCenter notifications={notifications.slice(0, 3)} />
          </div>
        );
      case 'trips':
        return <UpcomingTrips trips={dashboardData.upcomingTrips} />;
      case 'history':
        return <BookingHistory bookings={dashboardData.bookingHistory} />;
      case 'complaints':
        return <ComplaintCenter complaints={dashboardData.complaints} />;
      case 'notifications':
        return <NotificationCenter notifications={notifications} setNotifications={setNotifications} />;
      case 'profile':
        return <ProfileSection user={user} setUser={setUser} />;
      case 'support':
        return <SupportSection supportData={dashboardData.support} />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      {/* <Navbar /> */}
      {/* <BackgroundOrbs /> */}

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6">
                  <div className="text-center mb-6">
                    <img 
                      src={user.profilePicture} 
                      alt={user.name}
                      className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-emerald-500"
                    />
                    <h3 className="font-semibold text-slate-200">{user.name}</h3>
                    <span className="text-emerald-400 text-sm">{user.membershipTier}</span>
                  </div>

                  <nav className="space-y-2">
                    {sidebarItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                          activeTab === item.id
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/30'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-4">
              <div className="space-y-8">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
