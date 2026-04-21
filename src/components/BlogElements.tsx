import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Post } from '../types';
import { motion } from 'motion/react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group flex flex-col h-full"
    >
      <Link to={`/posts/${post.slug}`} className="relative h-56 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-slate-800 dark:text-white uppercase tracking-wider shadow-sm">
            {post.level}
          </span>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            {post.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
             <Calendar size={12} />
             <span>{format(new Date(post.date), 'MMM dd, yyyy')}</span>
          </div>
        </div>
        
        <Link to={`/posts/${post.slug}`}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700 mt-auto">
          <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-medium">
             <Clock size={12} />
             <span>{post.readingTime} read</span>
          </div>
          <Link 
            to={`/posts/${post.slug}`}
            className="text-blue-600 dark:text-blue-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
          >
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-slate-800 rounded-[2rem] p-8 lg:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-white dark:border-slate-700 overflow-hidden mb-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block"
          >
            Master Real-World English
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6"
          >
            Master English <br/>
            <span className="text-blue-600 dark:text-blue-400">Beyond Textbooks</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-lg lg:text-xl mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            Learn practical language skills for business, travel, and everyday life with modern, interactive lessons designed for active professionals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#lessons" className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95">
              Browse Lessons
            </a>
            <Link to="/contact" className="bg-white dark:bg-slate-700 border-2 border-slate-100 dark:border-slate-600 text-slate-700 dark:text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-600 transition-all active:scale-95">
              Get in Touch
            </Link>
          </motion.div>
        </div>
        
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="relative"
          >
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-100 dark:bg-sky-900/20 rounded-full blur-2xl opacity-60"></div>
            
            <div className="relative bg-slate-100 dark:bg-slate-700 rounded-3xl aspect-[4/3] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop" 
                alt="Sarah - English Teacher" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Stats Card */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 lg:-left-12 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200 dark:shadow-none">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Students Helped</p>
                <p className="text-xl font-extrabold text-slate-800 dark:text-white leading-none">15,400+</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
