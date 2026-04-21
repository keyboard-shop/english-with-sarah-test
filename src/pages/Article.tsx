import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Calendar, Clock, User, ArrowLeft, Youtube, Share2, Facebook, Twitter, MessageSquare } from 'lucide-react';
import postsData from '../data/posts.json';
import { Post } from '../types';
import { PostCard } from '../components/BlogElements';
import { motion } from 'motion/react';
import { updateMeta } from '../lib/utils';

export const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = (postsData as Post[]).find(p => p.slug === slug);

  React.useEffect(() => {
    if (post) {
      updateMeta(post.title, post.excerpt);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Post Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">The article you're looking for doesn't exist.</p>
        <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">Back to Home</Link>
      </div>
    );
  }

  const relatedPosts = (postsData as Post[])
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-bold text-sm uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            {post.category}
          </span>
          <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
            {post.level}
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-[1.2] mb-8">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 border-y border-slate-100 dark:border-slate-800 py-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
              <User size={18} />
            </div>
            <div>
              <p className="text-slate-900 dark:text-white font-bold leading-none mb-1">{post.author}</p>
              <p className="text-[10px] uppercase tracking-wider font-bold">Teacher & Founder</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 font-medium">
            <Calendar size={18} className="text-blue-500" />
            <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
          </div>
          
          <div className="flex items-center gap-2 font-medium">
            <Clock size={18} className="text-blue-500" />
            <span>{post.readingTime} read</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 aspect-[21/9]">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Article Content */}
      <div className="markdown-body dark:text-slate-300 mb-16 px-4 md:px-0">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* YouTube Video Section */}
      {post.youtubeUrl && (
        <section className="mb-16 bg-slate-900 p-8 rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="flex items-center gap-3 mb-6 text-white">
            <Youtube className="text-red-500" />
            <h3 className="text-xl font-bold">Video Lesson</h3>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
            <iframe
              width="100%"
              height="100%"
              src={post.youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>
      )}

      {/* Share Section */}
      <section className="flex flex-col sm:flex-row items-center justify-between gap-6 py-10 border-y border-slate-100 dark:border-slate-800 mb-16">
        <div className="flex items-center gap-3">
          <Share2 className="text-blue-600" />
          <span className="font-bold text-slate-800 dark:text-white uppercase tracking-widest text-sm">Share this lesson</span>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm">
            <Facebook size={20} />
          </button>
          <button className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-sm">
            <Twitter size={20} />
          </button>
          <button className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
            <MessageSquare size={20} />
          </button>
        </div>
      </section>

      {/* More from the blog */}
      {relatedPosts.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-10">More from the blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(p => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
};
