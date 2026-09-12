import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

export default function Courses() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');

  const categories = ['All', ...new Set(courses.map(c => c.category))];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filtered = courses.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || c.category === category;
    const matchLevel = level === 'All' || c.level === level;
    return matchSearch && matchCategory && matchLevel;
  });

  return (
    <div className="bg-bg-light min-h-screen">
      <div className="gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Explore Our Courses</h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto mb-8">Discover a wide range of courses designed to help you achieve your learning goals.</p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl shadow-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-700">Filter:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${category === cat ? 'gradient-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="w-px bg-gray-300 hidden sm:block"></div>
          <div className="flex flex-wrap gap-2">
            {levels.map(l => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${level === l ? 'gradient-primary text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <p className="text-gray-500 mb-6">{filtered.length} course{filtered.length !== 1 ? 's' : ''} found</p>

        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No courses match your search criteria.</p>
            <button onClick={() => { setSearch(''); setCategory('All'); setLevel('All'); }} className="mt-4 text-primary font-medium hover:underline">Clear Filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
