import { Link } from 'react-router-dom';
import { Star, Clock, Users, BarChart3 } from 'lucide-react';

export default function CourseCard({ course }) {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700'
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden card-hover">
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
        <span className="absolute top-3 left-3 bg-white/90 text-primary text-xs font-bold px-3 py-1 rounded-full">
          {course.category}
        </span>
        <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${levelColors[course.level]}`}>
          {course.level}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {course.duration}</span>
          <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students.toLocaleString()}</span>
          <span className="flex items-center gap-1"><BarChart3 className="w-4 h-4" /> {course.level}</span>
        </div>

        <h3 className="text-lg font-bold text-secondary mb-2 line-clamp-1">{course.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center gap-3 mb-4">
          <img src={course.instructorImage} alt={course.instructor} className="w-8 h-8 rounded-full object-cover" />
          <span className="text-sm text-gray-600">{course.instructor}</span>
          <div className="flex items-center gap-1 ml-auto">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-bold text-secondary">{course.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <span className="text-2xl font-bold text-primary">${course.price}</span>
          <Link
            to={`/course/${course.id}`}
            className="gradient-primary text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition text-sm"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
}
