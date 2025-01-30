import { useState } from 'react';
import useDebounce from './use-debounce';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  return {
    searchTerm,
    setSearchTerm,
    debouncedSearchTerm,
    handleSearch,
  };
};
