import React from 'react';

const SearchSkeleton: React.FC = () => (
  <div className="py-4 flex flex-wrap flex-col md:flex-row md:justify-between md:items-center space-y-3">
    <div className="relative mt-1 flex gap-2">
      <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700  rounded animate-pulse" />
    </div>
    <div className="flex gap-2">
      <div className="h-10 px-4 bg-gray-300 dark:bg-gray-700  rounded animate-pulse w-28" />
    </div>
  </div>
);

export default SearchSkeleton;
