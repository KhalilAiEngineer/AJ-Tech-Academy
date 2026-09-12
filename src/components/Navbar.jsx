import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, GraduationCap, User, LogOut, LayoutDashboard } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-secondary">Eduactly</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-primary font-medium transition">Courses</Link>
            {user && (
              <Link to="/dashboard" className="text-gray-700 hover:text-primary font-medium transition">Dashboard</Link>
            )}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{user.name}</span>
                </div>
                <button onClick={handleLogout} className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition text-sm">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-primary font-medium hover:text-primary-dark transition">Login</Link>
                <Link to="/register" className="gradient-primary text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition">Sign Up</Link>
              </>
            )}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/courses" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-primary font-medium">Courses</Link>
            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-700 hover:text-primary font-medium">Dashboard</Link>
                <div className="flex items-center gap-2 py-2 text-gray-700">
                  <User className="w-4 h-4" />
                  <span>{user.name}</span>
                </div>
                <button onClick={handleLogout} className="flex items-center gap-2 py-2 text-red-500 font-medium">
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className="block py-2 text-primary font-medium">Login</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="block gradient-primary text-white px-5 py-2 rounded-lg font-medium text-center">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
