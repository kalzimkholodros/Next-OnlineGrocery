"use client";

import { useState } from 'react';
import { FiX } from 'react-icons/fi';

interface AuthModalsProps {
  isLoginOpen: boolean;
  isSignupOpen: boolean;
  onCloseLogin: () => void;
  onCloseSignup: () => void;
  onSwitchToSignup: () => void;
  onSwitchToLogin: () => void;
}

export default function AuthModals({
  isLoginOpen,
  isSignupOpen,
  onCloseLogin,
  onCloseSignup,
  onSwitchToSignup,
  onSwitchToLogin,
}: AuthModalsProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Login işlemleri burada yapılacak
    onCloseLogin();
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Signup işlemleri burada yapılacak
    onCloseSignup();
  };

  return (
    <>
      {/* Login Modal */}
      {isLoginOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50" onClick={onCloseLogin} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Giriş Yap</h2>
                <button onClick={onCloseLogin} className="p-2 hover:bg-gray-100 rounded-full">
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="password">
                    Şifre
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Giriş Yap
                </button>
              </form>
              <div className="mt-4 text-center">
                <button
                  onClick={onSwitchToSignup}
                  className="text-green-600 hover:text-green-700"
                >
                  Hesabınız yok mu? Üye olun
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-50" onClick={onCloseSignup} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Üye Ol</h2>
                <button onClick={onCloseSignup} className="p-2 hover:bg-gray-100 rounded-full">
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <form onSubmit={handleSignup}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="signup-email">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="signup-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2" htmlFor="signup-password">
                    Şifre
                  </label>
                  <input
                    type="password"
                    id="signup-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Üye Ol
                </button>
              </form>
              <div className="mt-4 text-center">
                <button
                  onClick={onSwitchToLogin}
                  className="text-green-600 hover:text-green-700"
                >
                  Zaten hesabınız var mı? Giriş yapın
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
} 