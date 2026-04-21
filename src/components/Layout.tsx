import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Youtube, Send } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Modal } from './Modal';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    // { name: 'All Lessons', path: '/#lessons' }, I commented it out
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
              E
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
              English<span className="text-blue-600">WithSarah</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                  location.pathname === link.path ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 pl-6 border-l border-slate-200 dark:border-slate-800">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} className="text-slate-600" /> : <Sun size={18} className="text-slate-400" />}
              </button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-200 dark:shadow-none uppercase tracking-wider transition-all active:scale-95">
                Subscribe
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = React.useState(false);

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                English<span className="text-blue-400">WithSarah</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Empowering English learners worldwide with practical, modern language skills. Join our community of over 50,000 students.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Latest Lessons</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Study Guides</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Vocabulary Lists</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-400">
              <a href="https://youtube.com" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> YouTube
              </a>
              <a href="https://telegram.org" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span> Telegram
              </a>
              <a href="mailto:sarah@example.com" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Email
              </a>
              <a href="https://github.com" className="hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} English with Sarah. All rights reserved.</p>
          <div className="flex gap-8">
            <button 
              onClick={() => setIsPrivacyModalOpen(true)}
              className="hover:text-slate-300 transition-colors uppercase"
            >
              Privacy Policy
            </button>
            <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p>
            At <strong>English with Sarah</strong>, we take your privacy seriously. This policy explains how we collect and use your information.
          </p>
          <h4 className="text-lg font-bold mt-6 mb-2">1. Data Collection</h4>
          <p>
            We only collect information that you voluntarily provide, such as your email address when you subscribe to our newsletter.
          </p>
          <h4 className="text-lg font-bold mt-6 mb-2">2. How We Use Your Information</h4>
          <p>
            The information we collect is used solely to deliver English lessons and updates directly to you. We never share your data with third parties for marketing purposes.
          </p>
          <h4 className="text-lg font-bold mt-6 mb-2">3. Cookies</h4>
          <p>
            We use essential cookies to ensure the website functions correctly and to remember your theme preferences (Light/Dark mode).
          </p>
          <p className="pt-4 text-sm text-slate-500 italic">
            Last updated: April 2026
          </p>
        </div>
      </Modal>
    </footer>
  );
};
