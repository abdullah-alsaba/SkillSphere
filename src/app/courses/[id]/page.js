'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Star, Users, Clock, PlayCircle, Lock, CheckCircle, Share2, ArrowLeft, Award, Globe, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import ProtectedRoute from '../../../components/common/ProtectedRoute';
import coursesData from '../../../data/courses.json';

function DetailsContent() {
  const { id } = useParams();
  const router = useRouter();
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="container mx-auto py-24 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Course not found</h2>
        <Link href="/courses" className="mt-4 inline-block px-6 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600">
          Back to Courses
        </Link>
      </div>
    );
  }

  const handleEnroll = () => {
    toast.success(`Successfully enrolled in ${course.title}!`);
  };

  return (
    <div className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-500 hover:text-orange-600 font-bold mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </button>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider">{course.category}</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">Bestseller</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">{course.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">{course.description}</p>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-100 bg-slate-50">
                    <img 
                      src={`/assets/instructor1.png`} 
                      alt={course.instructor} 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{course.instructor}</p>
                    <p className="text-xs text-slate-500">Lead Instructor</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-orange-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="font-bold text-slate-900">{course.rating}</span>
                  <span className="text-slate-400 text-sm">(1,240 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                  <Globe className="w-4 h-4" /> English, Spanish, Hindi
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-3xl shadow-2xl shadow-orange-100">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-64 md:h-96 object-cover" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center text-orange-500 shadow-2xl hover:scale-110 transition-all">
                  <PlayCircle className="w-10 h-10 fill-current ml-1" />
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">What you'll learn</h2>
              <div className="grid md:grid-cols-2 gap-4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                {course.curriculum.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">{item} and real-world application strategies.</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Course Content</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((module) => (
                  <details key={module} className="bg-white rounded-2xl shadow-sm border border-slate-100 open:shadow-md group" open={module === 1}>
                    <summary className="flex items-center gap-4 p-6 cursor-pointer font-bold text-slate-900 list-none">
                      <span className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center text-sm font-display shrink-0">0{module}</span>
                      {module === 1 ? 'Foundations & Principles' : `Advanced Module 0${module}`}
                    </summary>
                    <div className="px-6 pb-6 space-y-2">
                      {[1, 2].map((lesson) => (
                        <div key={lesson} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl text-slate-600">
                          <div className="flex items-center gap-4">
                            {module === 1 ? <PlayCircle className="w-5 h-5 text-orange-400" /> : <Lock className="w-5 h-5 text-slate-300" />}
                            <span className="font-medium text-sm">Lesson 0{lesson}: {module === 1 ? 'Introduction to Mastery' : 'Technical Deep Dive'}</span>
                          </div>
                          <span className="text-xs font-bold text-slate-400">12:30</span>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-orange-100 border border-slate-50">
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-4xl font-display font-bold text-slate-900">${course.price}</h3>
                    <span className="text-slate-400 line-through">$199.99</span>
                  </div>
                  <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">Limited Time • 75% OFF</p>
                </div>
                <div className="space-y-3">
                  <button onClick={handleEnroll} className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-display font-bold rounded-2xl shadow-xl shadow-orange-200 transition-colors">
                    Enroll Now
                  </button>
                  <button className="w-full py-4 border border-slate-200 text-slate-700 hover:bg-slate-50 font-display font-bold rounded-2xl flex items-center justify-center gap-2 transition-colors">
                    <Share2 className="w-5 h-5" /> Share Course
                  </button>
                </div>
                <div className="mt-8 space-y-4">
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-tight">This course includes:</p>
                  <ul className="space-y-3">
                    {[
                      { icon: PlayCircle, text: '12.5 hours on-demand video' },
                      { icon: Clock, text: 'Full lifetime access' },
                      { icon: ShieldCheck, text: '30-Day Money-Back Guarantee' },
                      { icon: Award, text: 'Certificate of completion' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                        <item.icon className="w-5 h-5 text-orange-400" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">5,400+ Students</h4>
                    <p className="text-xs text-slate-400">Enrolled this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DetailsPage() {
  return (
    <ProtectedRoute>
      <DetailsContent />
    </ProtectedRoute>
  );
}
