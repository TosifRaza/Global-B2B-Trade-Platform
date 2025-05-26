import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Search, User, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Suppliers', path: '/suppliers' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="mr-8">
            <Logo />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-600 hover:text-teal-500 transition-colors">
            <Search size={20} />
          </button>
          <button className="text-gray-600 hover:text-teal-500 transition-colors">
            <Globe size={20} />
          </button>
          <button className="text-gray-600 hover:text-teal-500 transition-colors">
            <Bell size={20} />
          </button>
          <Link 
            to="/"
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors"
          >
            <User size={18} />
            <span>Sign In</span>
          </Link>
        </div>
        
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`py-2 font-medium ${
                      location.pathname === item.path
                        ? 'text-teal-600'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                  <button className="text-gray-600 hover:text-teal-500 transition-colors">
                    <Search size={20} />
                  </button>
                  <button className="text-gray-600 hover:text-teal-500 transition-colors">
                    <Globe size={20} />
                  </button>
                  <button className="text-gray-600 hover:text-teal-500 transition-colors">
                    <Bell size={20} />
                  </button>
                  <Link 
                    to="/"
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-teal-500 text-white text-sm"
                  >
                    <User size={16} />
                    <span>Sign In</span>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;