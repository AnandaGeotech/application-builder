/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React from 'react';
import { Button } from './Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-2">
      <li>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 rounded-s-lg ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-700'
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
      </li>
      {getPageNumbers().map((page) => (
        <li key={page}>
          <Button
            onClick={() => handlePageChange(page)}
            className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
              currentPage === page
                ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {page}
          </Button>
        </li>
      ))}
      <li>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 rounded-e-lg ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:text-gray-700'
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </li>
    </ul>
  );
};
