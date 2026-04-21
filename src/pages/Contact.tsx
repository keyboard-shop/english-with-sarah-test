import React from 'react';
import { Mail, Youtube, Send, ArrowRight, Github, Twitter, MapPin, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { updateMeta } from '../lib/utils';
import { Modal } from '../components/Modal';

export const Contact: React.FC = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = React.useState(false);
  React.useEffect(() => {
    updateMeta('Contact Sarah', 'Get in touch for private tutoring, group lessons, or business inquiries.');
  }, []);
  const connections = [
    {
      name: 'YouTube',
      description: 'Subscribe for weekly video lessons and listening practice.',
      icon: <Youtube className="text-red-500" size={28} />,
      link: 'https://youtube.com',
      color: 'hover:border-red-500',
      label: 'Watch Lessons'
    },
    {
      name: 'Telegram',
      description: 'Join our daily community for vocabulary quizzes and news.',
      icon: <Send className="text-sky-500" size={28} />,
      link: 'https://telegram.org',
      color: 'hover:border-sky-500',
      label: 'Join Channel'
    },
    {
      name: 'Email',
      description: 'For business inquiries and private tutoring details.',
      icon: <Mail className="text-emerald-500" size={28} />,
      link: 'mailto:sarah@example.com',
      color: 'hover:border-emerald-500',
      label: 'Send Email'
    },
    {
      name: 'GitHub',
      description: 'Check out my common English projects and educational code.',
      icon: <Github className="text-slate-900 dark:text-slate-100" size={28} />,
      link: 'https://github.com',
      color: 'hover:border-slate-900 dark:hover:border-white',
      label: 'Explore Repos'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto py-10 lg:py-20"
    >
      <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 inline-block">Connect with Sarah</span>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">Let's improve your English together</h1>
        <p className="text-slate-500 dark:text-slate-400 text-lg">
          Whether you have a question about a lesson or interested in private coaching, I'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {connections.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all group ${item.color} hover:shadow-xl`}
          >
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.name}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed">
              {item.description}
            </p>
            {item.name === 'Email' ? (
              <button 
                onClick={() => setIsEmailModalOpen(true)}
                className="flex items-center gap-2 font-bold text-sm text-blue-600 dark:text-blue-400 hover:gap-3 transition-all outline-none"
              >
                {item.label} <ArrowRight size={16} />
              </button>
            ) : (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-bold text-sm text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
              >
                {item.label} <ArrowRight size={16} />
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <section className="mt-24 lg:mt-32 bg-slate-100 dark:bg-slate-800/50 rounded-[3rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-12 border border-white dark:border-slate-800">
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">About Sarah</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
            I'm a certified English as a Second Language (ESL) teacher with over 10 years of experience. My mission is to help professionals bridge the communication gap and feel confident in international environments.
          </p>
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
               <MapPin size={18} className="text-blue-600" /> London, UK
             </div>
             <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
               <Users size={18} className="text-blue-600" /> 15k+ Students
             </div>
          </div>
        </div>
        <div className="w-full max-w-xs lg:max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white dark:border-slate-800">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600" 
            alt="Sarah English Teacher" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <Modal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        title="Contact via Email"
      >
        <div className="text-center py-4">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            You can reach Sarah directly at:
          </p>
          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl inline-block border border-slate-200 dark:border-slate-700">
            <span className="text-xl font-mono font-bold text-blue-600 dark:text-blue-400 select-all">
              example@example.com
            </span>
          </div>
          <p className="mt-8 text-sm text-slate-500 italic">
            Sarah usually responds within 24-48 hours.
          </p>
        </div>
      </Modal>
    </motion.div>
  );
};
