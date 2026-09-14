import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { courses } from '../data/courses';
import { ArrowLeft, Play, CheckCircle, Clock, BookOpen, ChevronRight } from 'lucide-react';

export default function CourseContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, loading, isEnrolled } = useAuth();
  const [activeVideo, setActiveVideo] = useState(0);
  const [completedVideos, setCompletedVideos] = useState([]);

  const course = courses.find(c => c.id === parseInt(id));
  const storageKey = user ? `course_progress_${user.id}_${id}` : null;

  // Load progress from localStorage
  useEffect(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const data = JSON.parse(saved);
        setCompletedVideos(data.completedVideos || []);
        setActiveVideo(data.lastVideo || 0);
      }
    }
  }, [storageKey]);

  // Save progress to localStorage
  useEffect(() => {
    if (storageKey && completedVideos.length >= 0) {
      localStorage.setItem(storageKey, JSON.stringify({
        completedVideos,
        lastVideo: activeVideo,
        progress: Math.round((completedVideos.length / (course?.videos?.length || 1)) * 100),
        updatedAt: new Date().toISOString()
      }));
    }
  }, [storageKey, completedVideos, activeVideo, course]);

  // Wait for loading to finish
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    navigate('/login', { state: { from: `/course/${id}/content` } });
    return null;
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Course Not Found</h2>
          <Link to="/courses" className="text-primary font-medium hover:underline">Back to Courses</Link>
        </div>
      </div>
    );
  }

  if (!isEnrolled(course.id)) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">You are not enrolled in this course</h2>
          <Link to={`/course/${id}`} className="gradient-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition inline-block">
            Enroll Now
          </Link>
        </div>
      </div>
    );
  }

  const videos = course.videos || [];
  const currentVideo = videos[activeVideo];
  const progress = Math.round((completedVideos.length / videos.length) * 100);

  const toggleComplete = (videoIndex) => {
    setCompletedVideos(prev =>
      prev.includes(videoIndex)
        ? prev.filter(i => i !== videoIndex)
        : [...prev, videoIndex]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Bar */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/dashboard')} className="flex items-center gap-2 text-gray-600 hover:text-primary transition">
              <ArrowLeft className="w-5 h-5" /> Dashboard
            </button>
            <div className="h-6 w-px bg-gray-200"></div>
            <div>
              <h1 className="font-bold text-secondary text-sm md:text-base">{course.title}</h1>
              <p className="text-xs text-gray-400">{course.instructor}</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-gray-400">Progress</p>
              <p className="text-sm font-bold text-primary">{progress}%</p>
            </div>
            <div className="w-24 bg-gray-200 rounded-full h-2">
              <div className="gradient-primary h-2 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Video Player */}
        <div className="flex-1">
          <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
            {currentVideo ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&disablekb=1`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={false}
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <p className="text-white">No video available</p>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="bg-white p-4 md:p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-secondary">
                  Lesson {activeVideo + 1}: {currentVideo?.title}
                </h2>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {currentVideo?.duration}</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {activeVideo + 1} of {videos.length}</span>
                </div>
              </div>
              <button
                onClick={() => toggleComplete(activeVideo)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  completedVideos.includes(activeVideo)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <CheckCircle className="w-5 h-5" />
                {completedVideos.includes(activeVideo) ? 'Completed' : 'Mark Complete'}
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Video List */}
        <div className="w-full lg:w-96 bg-white border-l">
          <div className="p-4 border-b sticky top-16 bg-white z-10">
            <h3 className="font-bold text-secondary">Course Content</h3>
            <p className="text-sm text-gray-400">{completedVideos.length}/{videos.length} lessons completed</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="gradient-primary h-2 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
            {videos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(index)}
                className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-50 transition ${
                  activeVideo === index
                    ? 'bg-primary/5 border-l-4 border-l-primary'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  completedVideos.includes(index)
                    ? 'bg-green-100 text-green-500'
                    : activeVideo === index
                    ? 'gradient-primary text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  {completedVideos.includes(index) ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : activeVideo === index ? (
                    <Play className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-bold">{index + 1}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium truncate ${
                    activeVideo === index ? 'text-primary' : 'text-gray-700'
                  }`}>
                    {video.title}
                  </p>
                  <p className="text-xs text-gray-400">{video.duration}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
