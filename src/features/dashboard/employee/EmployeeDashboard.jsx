import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../main/navbar/Navbar'
import Footer from '../../main/footer/Footer';
import employeeDashboardData from './employee-dashboard-data';

// Component imports
import DashboardOverview from './DashboardOverview';
import SafariManagement from './SafariManagement';
import VehicleManagement from './VehicleManagement';
import StaffManagement from './StaffManagement';
import CheckInSystem from './CheckInSystem';
import ParkOperations from './ParkOperations';
import AnalyticsReports from './AnalyticsReports';
import CommunicationCenter from './CommunicationCenter';
import BackgroundOrbs from '../../booking/BackgroundOrbs';

export default function EmployeeDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [employee, setEmployee] = useState(employeeDashboardData.employee);
  const [isVisible, setIsVisible] = useState({});
  const [notifications, setNotifications] = useState([]);

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
    { id: 'overview', label: 'Dashboard Overview', icon: '📊', roles: ['all'] },
    { id: 'safaris', label: 'Safari Management', icon: '🚙', roles: ['Park Manager', 'Booking Staff', 'Guide'] },
    { id: 'vehicles', label: 'Vehicle Management', icon: '🔧', roles: ['Park Manager', 'Maintenance Staff'] },
    { id: 'staff', label: 'Staff Management', icon: '👥', roles: ['Park Manager', 'Supervisor'] },
    { id: 'checkin', label: 'Check-In System', icon: '✅', roles: ['Booking Staff', 'Guide'] },
    { id: 'operations', label: 'Park Operations', icon: '🏞️', roles: ['Park Manager', 'Park Ranger'] },
    { id: 'analytics', label: 'Analytics & Reports', icon: '📈', roles: ['Park Manager', 'Admin'] },
    { id: 'communication', label: 'Communication', icon: '💬', roles: ['all'] }
  ];

  const filteredSidebarItems = sidebarItems.filter(item => 
    item.roles.includes('all') || item.roles.includes(employee.role)
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <DashboardOverview data={employeeDashboardData} />;
      case 'safaris':
        return <SafariManagement safaris={employeeDashboardData.todaysSafaris} />;
      case 'vehicles':
        return <VehicleManagement vehicles={employeeDashboardData.vehicles} />;
      case 'staff':
        return <StaffManagement staff={employeeDashboardData.staff} />;
      case 'checkin':
        return <CheckInSystem safaris={employeeDashboardData.todaysSafaris} />;
      case 'operations':
        return <ParkOperations operations={employeeDashboardData.parkOperations} />;
      case 'analytics':
        return <AnalyticsReports analytics={employeeDashboardData.analytics} />;
      case 'communication':
        return <CommunicationCenter communication={employeeDashboardData.communication} />;
      default:
        return <DashboardOverview data={employeeDashboardData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white">
      <Navbar />
      <BackgroundOrbs />

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                    Employee Dashboard
                  </span>
                </h1>
                <p className="text-slate-300 text-lg">
                  Welcome back, {employee.name} ({employee.role})
                </p>
              </div>
              
              <div className="mt-4 lg:mt-0 flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-slate-400 text-sm">Current Shift</p>
                  <p className="text-emerald-400 font-semibold">{employee.shift}</p>
                </div>
                <img 
                  src={employee.profilePicture} 
                  alt={employee.name}
                  className="w-12 h-12 rounded-full border-2 border-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🧑‍💼</span>
                    </div>
                    <h3 className="font-semibold text-slate-200">{employee.name}</h3>
                    <span className="text-emerald-400 text-sm">{employee.role}</span>
                  </div>

                  <nav className="space-y-2">
                    {filteredSidebarItems.map((item) => (
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
                        <span className="font-medium text-sm">{item.label}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-4">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
