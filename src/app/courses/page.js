'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Star, Users, ArrowRight } from 'lucide-react';
import coursesData from '../../data/courses.json';

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = coursesData.map((c) => c.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' ||
      course.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">
            Explore All Courses
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Unlock your potential with expert-led paths in tech, design, and business.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap transition-colors shadow-sm ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                      {course.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold text-orange-600">
                    <span>${course.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-display line-clamp-2">{course.title}</h3>
                  <p className="text-slate-500 text-sm">{course.instructor}</p>
                  <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">{course.description}</p>
                  <div className="pt-6 mt-auto border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-slate-400 text-xs">
                      <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students}</span>
                      <span className="font-bold text-slate-500">{course.duration}</span>
                    </div>
                    <Link href={`/courses/${course.id}`} className="flex items-center gap-1 text-orange-600 font-bold text-sm hover:gap-2 transition-all">
                      Details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <div className="inline-flex w-20 h-20 bg-slate-100 rounded-full items-center justify-center text-slate-400 mb-6">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No courses found</h3>
              <p className="text-slate-500">Try adjusting your search or category filter.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-6 text-orange-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
