'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { BookOpen, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/');
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'My Profile', path: '/profile', private: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm h-20 flex items-center">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center w-full">
        <Link href="/" className="text-2xl font-bold text-orange-600 font-display flex items-center gap-2">
          <BookOpen className="w-8 h-8" />
          <span>SkillSphere</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            !link.private || user ? (
              <Link
                key={link.name}
                href={link.path}
                className={clsx(
                  'text-sm font-medium transition-all hover:text-orange-500 font-display',
                  pathname === link.path
                    ? 'text-orange-600 border-b-2 border-orange-600 pb-1'
                    : 'text-slate-600'
                )}
              >
                {link.name}
              </Link>
            ) : null
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-100 focus:outline-none"
              >
                <img 
                  src={user.photoURL} 
                  alt={user.name} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50">
                  <Link href="/profile" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600">Profile</Link>
                  <Link href="/profile/update" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600">Update Profile</Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="px-4 py-2 text-orange-600 font-display font-semibold hover:bg-orange-50 rounded-xl transition-colors">Login</Link>
              <Link href="/register" className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-display font-semibold rounded-xl transition-colors">Register</Link>
            </div>
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-slate-600">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col space-y-2 z-50">
          {navLinks.map((link) =>
            !link.private || user ? (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'text-base font-medium px-4 py-2 rounded-xl transition-all',
                  pathname === link.path ? 'bg-orange-50 text-orange-600' : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                {link.name}
              </Link>
            ) : null
          )}
          <div className="pt-4 border-t border-slate-100">
            {user ? (
              <button onClick={handleLogout} className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-red-50 rounded-xl font-semibold">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <Link href="/login" onClick={() => setIsOpen(false)} className="text-center px-4 py-2 border border-orange-500 text-orange-600 rounded-xl font-semibold hover:bg-orange-50">Login</Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold">Register</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
