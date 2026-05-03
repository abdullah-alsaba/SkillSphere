'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { User, ArrowLeft, Check, Camera } from 'lucide-react';
import toast from 'react-hot-toast';
import ProtectedRoute from '../../../components/common/ProtectedRoute';

function UpdateProfileContent() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const router = useRouter();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(name, photoURL);
    toast.success('Profile updated successfully!');
    router.push('/profile');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-32">
      <div className="w-full max-w-xl">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-slate-500 hover:text-orange-600 font-bold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Profile
        </button>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
          <div className="flex flex-col items-center mb-10 space-y-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-50 shadow-lg">
                <img 
                  src={photoURL || user.photoURL} 
                  alt="Preview" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                  onError={(e) => { e.target.src = user.photoURL; }} 
                />
              </div>
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center border-2 border-white shadow-xl">
                <Camera className="w-4 h-4" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-display font-bold text-slate-900">Edit Profile</h1>
              <p className="text-slate-500 font-medium">Keep your professional identity up to date.</p>
            </div>
          </div>

          <form onSubmit={handleUpdate} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Photo URL</label>
              <div className="relative">
                <Camera className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="url"
                  placeholder="Link to your profile photo"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 text-slate-900"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="flex-1 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-100 flex items-center justify-center gap-2 transition-colors">
                <Check className="w-5 h-5" /> Update Profile
              </button>
              <button type="button" onClick={() => router.push('/profile')} className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-colors">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function UpdateProfilePage() {
  return (
    <ProtectedRoute>
      <UpdateProfileContent />
    </ProtectedRoute>
  );
}
