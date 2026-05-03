'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { User, Mail, Lock, Image, ArrowRight, Zap } from 'lucide-react';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password, photoURL);
      toast.success('Account created successfully!');
      router.push('/');
    } catch {
      toast.error('Failed to create account.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-24">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
        <div className="hidden lg:flex flex-col justify-center p-16 bg-orange-500 relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl -ml-24 -mb-24"></div>
          <div className="relative z-10 space-y-8">
            <Link href="/" className="text-3xl font-black font-display flex items-center gap-2 mb-8">
              <Zap className="w-10 h-10" /> SkillSphere
            </Link>
            <h2 className="text-5xl font-display font-bold leading-tight">Join the Elite Hub.</h2>
            <p className="text-orange-50 text-lg leading-relaxed">
              Start your journey toward mastery and join a community of 50,000+ professionals.
            </p>
            <div className="space-y-6 pt-8">
              {['Industry recognized certificates', 'Over 5,000 professional courses', 'Collaborative learning ecosystem'].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Create Account</h1>
              <p className="text-slate-500 font-medium">Start your 14-day free trial today.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Photo URL (Optional)</label>
                <div className="relative">
                  <Image className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="url"
                    placeholder="https://..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button type="submit" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl mt-4 shadow-lg shadow-orange-100 flex items-center justify-center gap-2 transition-colors">
                Create Account <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="mt-8 text-center text-slate-500 font-medium text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-orange-600 font-bold hover:underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
