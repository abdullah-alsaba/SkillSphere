import Link from 'next/link';
import { BookOpen, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="text-2xl font-bold text-white font-display flex items-center gap-2 mb-6">
              <BookOpen className="w-8 h-8 text-orange-500" />
              <span>SkillSphere</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering professionals through high-impact, curated educational experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6 font-display">Platform</h5>
            <ul className="space-y-4 text-sm">
              <li><Link href="/courses" className="hover:text-orange-500 transition-colors">All Courses</Link></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Roadmap</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6 font-display">Company</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white mb-6 font-display">Contact Us</h5>
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>support@skillsphere.com</span>
              </p>
              <div className="bg-slate-800 rounded-xl p-4 mt-6">
                <p className="text-xs text-slate-400 mb-2">Subscribe to our newsletter</p>
                <div className="flex">
                  <input type="email" placeholder="Email" className="bg-slate-700 border-none rounded-l-lg px-3 py-2 text-xs w-full outline-none focus:ring-1 focus:ring-orange-500 text-white" />
                  <button className="bg-orange-500 text-white rounded-r-lg px-3 py-2 text-xs font-bold hover:bg-orange-600">Go</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 SkillSphere. Built for professionals.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
