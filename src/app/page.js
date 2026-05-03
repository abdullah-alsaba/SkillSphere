'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BookOpen, Star, Users, ArrowRight, Zap, Target, Award, Brain } from 'lucide-react';
import coursesData from '../data/courses.json';

export default function HomePage() {
  const router = useRouter();
  const popularCourses = coursesData.slice(0, 3);

  const tips = [
    { title: 'Micro-Learning', description: 'Study in 15-minute bursts to improve retention.', icon: Zap },
    { title: 'Active Recall', description: 'Test yourself regularly to cement concepts.', icon: Target },
    { title: 'Peer Reviews', description: 'Share work and get feedback from our community.', icon: Users },
    { title: 'Spaced Repetition', description: 'Improve long-term memory with interval reviews.', icon: Brain },
  ];

  const instructors = [
    { name: 'Dr. Aris Thorne', role: 'Senior Architect', img: '/assets/instructor1.png' },
    { name: 'Sarah Jenkins', role: 'Creative Director', img: '/assets/instructor2.jpeg' },
    { name: 'Michael Chen', role: 'Data Scientist', img: '/assets/instructor3.png' },
    { name: 'Elena Rodriguez', role: 'Full Stack Dev', img: '/assets/instructor4.png' },
  ];

  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
              <Zap className="w-3 h-3" />
              New Skills Await You
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight text-slate-900">
              Upgrade Your <span className="text-orange-600">Skills</span> Today
            </h1>
            <p className="text-base text-slate-600 max-w-lg leading-relaxed">
              Join our community of 50,000+ forward-thinking professionals and start your journey toward mastery with industry-led expert courses.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-display font-bold rounded-xl shadow-lg shadow-orange-100 transition-colors">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
            <div className="relative">
            <div className="bg-white p-2 md:p-4 rounded-2xl shadow-xl border border-slate-100">
              <img
                src="/assets/hero.jpg"
                alt="Students collaborating"
                className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-slate-50">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certified</p>
                <p className="text-sm font-bold text-slate-900">Accredited Learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">Popular Courses</h2>
            <p className="text-slate-500 text-sm">Pick from our most-subscribed and highly-rated programs.</p>
          </div>
          <Link href="/courses" className="text-orange-600 font-bold flex items-center gap-2 hover:underline">
            Browse All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => router.push(`/courses/${course.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-sm font-bold text-orange-600">
                  <span>${course.price}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 line-clamp-1">{course.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2">{course.description}</p>
                <div className="flex items-center gap-4 text-slate-400 text-xs pt-4 border-t border-slate-50">
                  <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.students} Learners</span>
                  <span className="font-bold text-slate-500">{course.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {tips.map((tip, idx) => (
              <div
                key={tip.title}
                className={`p-6 rounded-2xl space-y-4 shadow-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-orange-50 lg:mt-8'}`}
              >
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <tip.icon className="w-5 h-5 text-orange-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm font-display">{tip.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-slate-900">Effective Learning Tips</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We don't just provide content; we provide a methodology focused on modern behavioral science to ensure your time spent learning is maximally efficient.
            </p>
            <ul className="space-y-3">
              {['Personalized learning paths', 'Interactive coding playgrounds', 'Weekly live Q&A sessions'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                  <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <Zap className="w-3 h-3" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-900">Learn From The Best</h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto">Our instructors are active professionals from top-tier companies globally.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((ins) => (
            <div key={ins.name} className="text-center space-y-3 group">
              <div className="relative inline-block">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto bg-slate-50">
                  <img 
                    src={ins.img} 
                    alt={ins.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 right-2 md:right-4 w-10 h-10 bg-orange-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base md:text-lg">{ins.name}</h4>
                <p className="text-orange-600 text-xs md:text-sm font-bold">{ins.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 pb-16">
        <div className="bg-slate-900 rounded-2xl p-8 lg:p-16 text-center overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white max-w-2xl mx-auto leading-tight">
              Ready to transform your career roadmap?
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Join SkillSphere today and get lifetime access to all curated content with a single membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 w-full max-w-xs bg-white/5 border border-white/10 text-white rounded-xl outline-none focus:ring-2 focus:ring-orange-500 placeholder-slate-500 text-sm"
              />
              <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-display font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-colors">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
