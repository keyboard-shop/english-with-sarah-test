import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-lg"
      >
        <div className="relative mb-8 flex justify-center">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="text-blue-600/20 dark:text-blue-400/20"
          >
            <Ghost size={200} />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-black text-slate-900 dark:text-white opacity-20">404</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">Lost in Translation?</h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed">
          The page you are looking for seems to have vanished. Don't worry, even fluent English speakers get lost sometimes!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
          >
            <Home size={20} /> Back to Safety
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
          >
            <ArrowLeft size={20} /> Previous Page
          </button>
        </div>
      </motion.div>
    </div>
  );
};
