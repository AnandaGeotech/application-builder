/* eslint-disable react/no-array-index-key */
import React from 'react';

const TableSkeleton: React.FC = () => (
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
      {' '}
      {/* Adjusted for light mode */}
      <tr>
        <th className="px-6 py-3 w-1">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />{' '}
          {/* Adjusted for light mode */}
        </th>
        <th className="px-6 py-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />{' '}
          {/* Adjusted for light mode */}
        </th>
        <th className="px-6 py-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse" />{' '}
          {/* Adjusted for light mode */}
        </th>
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr
          key={`skeleton-row-${index}`} // Changed key to avoid using Date.now() and Math.random()
          className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <td className="px-6 py-4 flex gap-3">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-12 animate-pulse" />{' '}
            {/* Adjusted for light mode */}
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-16 animate-pulse" />{' '}
            {/* Adjusted for light mode */}
          </td>
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse" />{' '}
            {/* Adjusted for light mode */}
          </td>
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse" />{' '}
            {/* Adjusted for light mode */}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableSkeleton;
