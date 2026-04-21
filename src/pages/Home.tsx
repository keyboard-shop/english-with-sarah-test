import React from 'react';
import { Hero, PostCard } from '../components/BlogElements';
import { Pagination } from '../components/Pagination';
import postsData from '../data/posts.json';
import { Post } from '../types';
import { useAppContext } from '../context/AppContext';
import { motion } from 'motion/react';
import { updateMeta } from '../lib/utils';

const POSTS_PER_PAGE = 6;

export const Home: React.FC = () => {

  // option-1 original start works =================================
//const { currentPage, setCurrentPage } = useAppContext();// new place added
//   React.useEffect(() => {
//     updateMeta('Home', 'Practical English lessons for modern professionals. Master language skills beyond textbooks.');
//   //setCurrentPage(1); // Reset on mount
//    }, []);
//   //}, [setCurrentPage]);
//   const { currentPage, setCurrentPage } = useAppContext(); //original
//   const posts = postsData as Post[];
//   const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
//   const currentPosts = posts.slice(
//     (currentPage - 1) * POSTS_PER_PAGE,
//     currentPage * POSTS_PER_PAGE
//   );
//   //original
//   // const handlePageChange = (page: number) => {
//   //   setCurrentPage(page);
//   //   window.scrollTo({ top: 0, behavior: 'smooth' });
//   // };
//   // for pagination
//  const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' });
//   };
// original finish ========================================




// option-2
  React.useEffect(() => {
    updateMeta('Home', 'Practical English lessons for modern professionals. Master language skills beyond textbooks.');
  }, []);
  const { currentPage, setCurrentPage } = useAppContext();
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' });
  }, [currentPage]);

  const posts = postsData as Post[];
  
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };





  return (
    <div className="space-y-16">
      <Hero />
      
      <section id="lessons" className="scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
              Practical Lessons testing cloudflare 8888888
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg">
              Explore our latest articles designed to help you improve your grammar, speaking, and writing skills with real-world examples.
            </p>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
             <button className="px-5 py-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm text-sm font-bold text-slate-900 dark:text-white">Recent</button>
             <button className="px-5 py-2 rounded-lg text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">Popular</button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-blue-600 rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Never miss a lesson!</h2>
          <p className="text-blue-100 mb-10 text-lg">
            Join thousands of students and get the latest lessons delivered straight to your inbox every week.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl active:scale-95 whitespace-nowrap">
              Join for Free
            </button>
          </form>
          <p className="mt-6 text-sm text-blue-200">No spam, just quality English content. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
};
