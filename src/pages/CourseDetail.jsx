import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Star, Clock, Users, BarChart3, CheckCircle, BookOpen, Award, ArrowLeft, Play } from 'lucide-react';
import { courses } from '../data/courses';
import { useAuth } from '../context/AuthContext';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, enroll, isEnrolled } = useAuth();
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [formData, setFormData] = useState({ phone: '', address: '', education: '', goals: '' });
  const [errors, setErrors] = useState({});

  const course = courses.find(c => c.id === parseInt(id));
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-4">Course Not Found</h2>
          <Link to="/courses" className="text-primary font-medium hover:underline">Back to Courses</Link>
        </div>
      </div>
    );
  }

  const alreadyEnrolled = isEnrolled(course.id);

  const levelColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700'
  };

  const handleEnrollClick = () => {
    if (!user) {
      navigate('/login', { state: { from: `/course/${course.id}` } });
      return;
    }
    setShowEnrollForm(true);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.education.trim()) newErrors.education = 'Education level is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const result = enroll(course.id);
    if (result.success) {
      setEnrolled(true);
      setShowEnrollForm(false);
    }
  };

  if (enrolled || alreadyEnrolled) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-secondary mb-3">Enrollment Successful!</h2>
          <p className="text-gray-500 mb-2">You have been successfully enrolled in:</p>
          <p className="text-lg font-bold text-primary mb-6">{course.title}</p>
          <div className="bg-bg-light rounded-xl p-4 mb-6 text-left">
            <p className="text-sm text-gray-500"><strong>Course:</strong> {course.title}</p>
            <p className="text-sm text-gray-500"><strong>Instructor:</strong> {course.instructor}</p>
            <p className="text-sm text-gray-500"><strong>Duration:</strong> {course.duration}</p>
            <p className="text-sm text-gray-500"><strong>Status:</strong> <span className="text-green-500 font-medium">Active</span></p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`/course/${course.id}/content`} onClick={(e) => { e.preventDefault(); window.location.href = `/course/${course.id}/content`; }} className="gradient-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block">
              Start Course
            </a>
            <a href="/dashboard" onClick={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }} className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition inline-block">
              Go to Dashboard
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-light min-h-screen">
      {/* Hero */}
      <div className="gradient-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition">
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${levelColors[course.level]}`}>{course.level}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{course.title}</h1>
              <p className="text-white/80 text-lg mb-6">{course.description}</p>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <span className="flex items-center gap-2"><Star className="w-5 h-5 text-yellow-300 fill-yellow-300" /> {course.rating} Rating</span>
                <span className="flex items-center gap-2"><Users className="w-5 h-5" /> {course.students.toLocaleString()} Students</span>
                <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> {course.duration}</span>
                <span className="flex items-center gap-2"><BarChart3 className="w-5 h-5" /> {course.level}</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              <p className="text-3xl font-bold text-primary mb-4">${course.price}</p>
              {alreadyEnrolled ? (
                <a href={`/course/${course.id}/content`} onClick={(e) => { e.preventDefault(); window.location.href = `/course/${course.id}/content`; }} className="block w-full bg-green-500 text-white py-3 rounded-lg font-bold text-center hover:bg-green-600 transition">
                  Start Course
                </a>
              ) : (
                <button onClick={handleEnrollClick} className="w-full gradient-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition">
                  Enroll Now
                </button>
              )}
              <ul className="mt-4 space-y-2">
                {course.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-secondary">Enroll in Course</h2>
                <button onClick={() => setShowEnrollForm(false)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
              </div>

              <div className="bg-bg-light rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-500">Enrolling in:</p>
                <p className="font-bold text-secondary">{course.title}</p>
                <p className="text-sm text-gray-500">by {course.instructor} &bull; {course.duration}</p>
              </div>

              <form onSubmit={handleEnrollSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" value={user?.name || ''} disabled className="w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" value={user?.email || ''} disabled className="w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your phone number" />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <input type="text" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your address" />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Education Level *</label>
                  <select value={formData.education} onChange={e => setFormData({...formData, education: e.target.value})} className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="">Select education level</option>
                    <option value="High School">High School</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Learning Goals (Optional)</label>
                  <textarea value={formData.goals} onChange={e => setFormData({...formData, goals: e.target.value})} className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary" rows="3" placeholder="What do you hope to achieve?"></textarea>
                </div>
                <button type="submit" className="w-full gradient-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition">
                  Confirm Enrollment - ${course.price}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Instructor */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-secondary mb-4">Instructor</h2>
              <div className="flex items-center gap-4">
                <img src={course.instructorImage} alt={course.instructor} className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-secondary text-lg">{course.instructor}</p>
                  <p className="text-gray-500">Expert Instructor</p>
                </div>
              </div>
            </div>

            {/* Syllabus */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-secondary mb-4">Course Syllabus</h2>
              <div className="space-y-3">
                {course.syllabus.map((topic, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-bg-light rounded-lg">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold">{i + 1}</div>
                    <span className="text-gray-700 font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-secondary mb-4">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-bg-light rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Videos Preview */}
            {course.videos && course.videos.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h2 className="text-xl font-bold text-secondary mb-4">Course Videos ({course.videos.length} Lessons)</h2>
                <div className="space-y-3">
                  {course.videos.map((video, i) => (
                    <div key={video.id} className="flex items-center gap-4 p-3 bg-bg-light rounded-lg">
                      <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-700 truncate">{video.title}</p>
                        <p className="text-xs text-gray-400">{video.duration}</p>
                      </div>
                      {alreadyEnrolled && (
                        <a href={`https://youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline flex-shrink-0">
                          Preview
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <h3 className="font-bold text-secondary mb-4">Course Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b"><span className="text-gray-500">Duration</span><span className="font-medium text-secondary">{course.duration}</span></div>
                <div className="flex justify-between py-2 border-b"><span className="text-gray-500">Level</span><span className="font-medium text-secondary">{course.level}</span></div>
                <div className="flex justify-between py-2 border-b"><span className="text-gray-500">Students</span><span className="font-medium text-secondary">{course.students.toLocaleString()}</span></div>
                <div className="flex justify-between py-2 border-b"><span className="text-gray-500">Rating</span><span className="font-medium text-secondary flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> {course.rating}</span></div>
                <div className="flex justify-between py-2"><span className="text-gray-500">Price</span><span className="font-bold text-primary text-lg">${course.price}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
