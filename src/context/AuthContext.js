'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('skillSphere_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved user', e);
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, _password) => {
    const userData = {
      name: email.split('@')[0],
      email,
      photoURL: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };
    setUser(userData);
    localStorage.setItem('skillSphere_user', JSON.stringify(userData));
  };

  const register = async (name, email, _password, photoURL) => {
    const userData = {
      name,
      email,
      photoURL: photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
    };
    setUser(userData);
    localStorage.setItem('skillSphere_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skillSphere_user');
  };

  const updateProfile = (name, photoURL) => {
    if (user) {
      const updated = { ...user, name, photoURL };
      setUser(updated);
      localStorage.setItem('skillSphere_user', JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
