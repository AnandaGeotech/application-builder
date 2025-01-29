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
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
      </li>
      {getPageNumbers().map((page) => (
        <li key={page}>
          <Button onClick={() => handlePageChange(page)} disabled={currentPage === page}>
            {page}
          </Button>
        </li>
      ))}
      <li>
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </Button>
      </li>
    </ul>
  );
};
