"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';
import AuthModals from './AuthModals';
import Cart from './Cart';
import SearchBar from './SearchBar';
import { useStore } from '@/store/useStore';

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const { cart, balance, toggleCart } = useStore();

  const handleOpenLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const handleOpenSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-green-600">FreshMarket</h1>
            </Link>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-1 max-w-lg mx-12">
              <SearchBar />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/categories" className="text-gray-600 hover:text-green-600 transition-colors">
                Kategoriler
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-green-600 transition-colors">
                Ürünler
              </Link>
              <Link href="/new-products" className="text-gray-600 hover:text-green-600 transition-colors">
                Yeni Ürünler
              </Link>
              <div className="h-6 w-px bg-gray-200"></div>
              <button 
                onClick={handleOpenLogin}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
              >
                <FiUser />
                <span>Giriş Yap</span>
              </button>
              <button 
                onClick={handleOpenSignup}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <span>Üye Ol</span>
              </button>
              <div className="h-6 w-px bg-gray-200"></div>
              <div className="flex items-center gap-4">
                <span className="text-green-600 font-medium">₺{balance.toFixed(2)}</span>
                <button onClick={toggleCart} className="p-2 text-gray-600 hover:text-green-600 relative group">
                  <FiShoppingCart className="w-6 h-6" />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setIsLoginOpen(true)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="md:hidden px-4 pb-4">
          <SearchBar />
        </div>
      </header>

      <AuthModals
        isLoginOpen={isLoginOpen}
        isSignupOpen={isSignupOpen}
        onCloseLogin={() => setIsLoginOpen(false)}
        onCloseSignup={() => setIsSignupOpen(false)}
        onSwitchToSignup={() => {
          setIsLoginOpen(false);
          setIsSignupOpen(true);
        }}
        onSwitchToLogin={() => {
          setIsSignupOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <Cart />
    </>
  );
} 