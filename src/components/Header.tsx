import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Building2, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out animate-in slide-in-from-top-4 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-100' 
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <div className={`hidden lg:block transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'h-auto'}`}>
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@sgbgroup.com</span>
                </div>
              </div>
              <div className="text-sm">
                Premium Real Estate Solutions Since 2010
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <a 
            href="/" 
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <Building2 className={`h-10 w-10 lg:h-12 lg:w-12 transition-all duration-300 ${
                isScrolled ? 'text-red-600' : 'text-white drop-shadow-lg'
              } group-hover:rotate-12 group-hover:scale-110`} />
              <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-2xl lg:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
              }`}>
                SGB Group
              </h1>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Premium Real Estate
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative" style={{ animationDelay: `${index * 100}ms` }}>
                <a
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    location.pathname === item.path
                      ? 'text-red-600 bg-red-50'
                      : 'text-red-600 hover:bg-red-50'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full animate-bounce"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="/contact"
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-white transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-700 to-red-800 transition-transform duration-300 -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get Quote</span>
                <Phone className="h-4 w-4" />
              </span>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-110"
          >
            <div className="relative w-6 h-6">
              <Menu className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
              } ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              <X className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
              } ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            </div>
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="py-6 bg-white/98 backdrop-blur-xl rounded-b-2xl shadow-2xl border-t border-gray-100">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`transform transition-all duration-300 ${
                    isMobileMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : '-translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <a
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-3 mx-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                      location.pathname === item.path
                        ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                        : 'text-red-600 hover:bg-red-50 hover:translate-x-2'
                    }`}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
              <div className={`px-6 pt-4 transform transition-all duration-500 ${
                isMobileMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-4 opacity-0'
              }`}>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span>Get Quote</span>
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
