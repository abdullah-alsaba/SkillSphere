import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="relative inline-block">
          <h1 className="text-9xl font-black text-slate-100 font-display select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-display font-bold text-slate-900">Oops!</h2>
              <p className="font-bold text-orange-600 uppercase tracking-widest text-sm">Page Not Found</p>
            </div>
          </div>
        </div>
        <p className="text-slate-500 leading-relaxed">
          The page you're searching for might have been moved, removed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-100 transition-colors">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link href="/courses" className="inline-flex items-center gap-2 px-8 py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold rounded-xl transition-colors">
            <ArrowLeft className="w-4 h-4" /> Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
