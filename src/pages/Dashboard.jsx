import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { courses } from '../data/courses';
import { User, Mail, Calendar, BookOpen, Clock, BarChart3, ArrowRight, LogOut } from 'lucide-react';

export default function Dashboard() {
  const { user, getUserEnrollments, logout } = useAuth();
  const navigate = useNavigate();
  const [courseProgress, setCourseProgress] = useState({});

  if (!user) {
    navigate('/login');
    return null;
  }

  const enrollments = getUserEnrollments();
  const enrolledCourses = enrollments.map(e => ({
    ...e,
    course: courses.find(c => c.id === e.courseId)
  })).filter(e => e.course);

  // Load real progress from localStorage
  useEffect(() => {
    const progressData = {};
    enrolledCourses.forEach(e => {
      const key = `course_progress_${user.id}_${e.courseId}`;
      const saved = localStorage.getItem(key);
      if (saved) {
        const data = JSON.parse(saved);
        progressData[e.courseId] = data.progress || 0;
      } else {
        progressData[e.courseId] = 0;
      }
    });
    setCourseProgress(progressData);
  }, [enrolledCourses, user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const totalProgress = Object.keys(courseProgress).length > 0
    ? Math.round(Object.values(courseProgress).reduce((a, b) => a + b, 0) / Object.keys(courseProgress).length)
    : 0;

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Header */}
      <div className="gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Welcome back, {user.name}!</h1>
              <p className="text-white/70">Manage your courses and track your progress</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h2 className="font-bold text-secondary text-lg">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600 p-2 bg-bg-light rounded-lg">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Joined: {new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 p-2 bg-bg-light rounded-lg">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span>Courses: {enrollments.length}</span>
                </div>
              </div>
              <button onClick={handleLogout} className="w-full mt-6 flex items-center justify-center gap-2 text-red-500 hover:text-red-600 font-medium py-2 rounded-lg hover:bg-red-50 transition">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">{enrollments.length}</p>
                    <p className="text-sm text-gray-500">Enrolled Courses</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">{totalProgress}%</p>
                    <p className="text-sm text-gray-500">Avg. Progress</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">
                      {enrolledCourses.reduce((a, e) => a + parseInt(e.course.duration), 0)}h
                    </p>
                    <p className="text-sm text-gray-500">Total Hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enrolled Courses */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold text-secondary mb-6">My Enrolled Courses</h2>
              {enrolledCourses.length > 0 ? (
                <div className="space-y-4">
                  {enrolledCourses.map(e => {
                    const progress = courseProgress[e.courseId] || 0;
                    return (
                      <div key={e.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-bg-light rounded-xl">
                        <img src={e.course.image} alt={e.course.title} className="w-full sm:w-32 h-24 object-cover rounded-lg" />
                        <div className="flex-1">
                          <h3 className="font-bold text-secondary mb-1">{e.course.title}</h3>
                          <p className="text-sm text-gray-500 mb-2">by {e.course.instructor} &bull; {e.course.duration}</p>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">{e.status}</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="gradient-primary h-2 rounded-full transition-all" style={{width: `${progress}%`}}></div>
                            </div>
                            <span className="text-sm font-medium text-gray-500">{progress}%</span>
                          </div>
                          <p className="text-xs text-gray-400 mt-2">Enrolled: {new Date(e.enrolledAt).toLocaleDateString()}</p>
                        </div>
                        <Link to={`/course/${e.course.id}/content`} className="self-center">
                          <button className="flex items-center gap-1 text-primary font-medium text-sm hover:underline">
                            {progress > 0 ? 'Continue' : 'Start Course'} <ArrowRight className="w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">You haven't enrolled in any courses yet.</p>
                  <Link to="/courses" className="gradient-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition inline-flex items-center gap-2">
                    Browse Courses <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
