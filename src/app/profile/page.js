'use client';

import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, Award, Clock, Star, Edit3, MapPin, Briefcase } from 'lucide-react';
import ProtectedRoute from '../../components/common/ProtectedRoute';

function ProfileContent() {
  const { user } = useAuth();
  if (!user) return null;

  const stats = [
    { label: 'Completed Courses', value: '12', icon: BookOpen },
    { label: 'Hours Learned', value: '48', icon: Clock },
    { label: 'Earned Badges', value: '5', icon: Award },
    { label: 'Skill Points', value: '8.4k', icon: Star },
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:items-start">
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 text-center space-y-6">
              <div className="relative inline-block">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-orange-50 shadow-inner">
                  <img 
                    src={user.photoURL} 
                    alt={user.name} 
                    className="w-full h-full object-cover" 
                    loading="lazy"
                  />
                </div>
                <Link href="/profile/update" className="absolute bottom-2 right-2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all">
                  <Edit3 className="w-5 h-5" />
                </Link>
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-slate-900">{user.name}</h1>
                <p className="text-slate-400 font-medium">{user.email}</p>
              </div>
              <div className="pt-6 border-t border-slate-100 space-y-3">
                <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-100 transition-colors">
                  Daily Challenge
                </button>
                <Link href="/profile/update" className="block w-full py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold rounded-xl text-center transition-colors">
                  Edit Details
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <h3 className="font-bold text-slate-900 text-lg">Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 hover:bg-orange-50/50 rounded-xl transition-colors">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Role</p>
                    <p className="text-sm font-bold text-slate-700">Senior UX Designer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 hover:bg-orange-50/50 rounded-xl transition-colors">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Location</p>
                    <p className="text-sm font-bold text-slate-700">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-center space-y-2">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-orange-600 mx-auto mb-2">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-slate-900">{stat.value}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 space-y-8">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-display font-bold text-slate-900">Learning Progress</h3>
                <Link href="/courses" className="text-orange-600 text-sm font-bold hover:underline">Continue All</Link>
              </div>
              <div className="space-y-8">
                {[
                  { name: 'UI/UX Design Mastery', progress: 75, color: '#f97316' },
                  { name: 'Advanced React Patterns', progress: 32, color: '#3b82f6' },
                ].map((item) => (
                  <div key={item.name} className="space-y-3">
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-slate-700">{item.name}</span>
                      <span style={{ color: item.color }}>{item.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%`, backgroundColor: item.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h4 className="font-bold text-slate-900 mb-6">Recent Achievements</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-orange-50 transition-all cursor-default group">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-400 shadow-sm group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6 fill-current" />
                      </div>
                      <span className="text-xs font-bold text-slate-600">Top Learner</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}
