import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Compass, Info, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Browse Rooms', path: '/rooms', icon: Compass },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: MessageSquare },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-cream-50/90 backdrop-blur-md shadow-md py-3' 
        : 'bg-cream-100 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO AREA */}
          <Link to="/" className="flex items-center space-x-2 group">
            {/* 
              LOGO REPLACEMENT COMMENT:
              Replace this text-based logo with an <img src="/logo.svg" /> tag once the logo file is ready.
            */}
            <span className="font-serif text-2xl font-bold tracking-tight text-sage-600 transition-colors group-hover:text-terracotta-500">
              Haven<span className="font-sans font-light text-terracotta-500 group-hover:text-sage-500">Space</span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium text-sm transition-colors duration-200 py-1 ${
                    active 
                      ? 'text-terracotta-500' 
                      : 'text-charcoal hover:text-terracotta-400'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-terracotta-500 rounded-full" />
                  )}
                </Link>
              );
            })}
            
            <Link
              to="/rooms"
              className="bg-sage-500 hover:bg-sage-600 active:scale-95 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
            >
              Find a Room
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-terracotta-500 focus:outline-none p-1.5 rounded-lg hover:bg-cream-200/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream-50 border-t border-cream-200/60 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium text-base transition-all ${
                    active 
                      ? 'bg-sage-500 text-white shadow-md' 
                      : 'text-charcoal hover:bg-cream-200/50 hover:text-terracotta-500'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              );
            })}
            <div className="pt-4 px-4">
              <Link
                to="/rooms"
                className="block text-center bg-terracotta-500 hover:bg-terracotta-600 text-white font-medium py-3 rounded-xl shadow-md transition-all active:scale-98"
              >
                Browse All Rooms
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
