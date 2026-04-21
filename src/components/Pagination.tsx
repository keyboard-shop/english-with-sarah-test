import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-12 pb-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "p-2 rounded-xl transition-all border border-slate-200 dark:border-slate-800",
          currentPage === 1 
            ? "text-slate-300 dark:text-slate-700 cursor-not-allowed" 
            : "text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-600 dark:hover:border-blue-400"
        )}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "w-10 h-10 rounded-xl font-bold transition-all border",
            currentPage === page
              ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none"
              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-600 dark:hover:border-blue-400"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "p-2 rounded-xl transition-all border border-slate-200 dark:border-slate-800",
          currentPage === totalPages
            ? "text-slate-300 dark:text-slate-700 cursor-not-allowed" 
            : "text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-600 dark:hover:border-blue-400"
        )}
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
