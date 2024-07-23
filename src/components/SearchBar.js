// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const debouncedSearch = debounce((query) => {
    onSearch(query);
  }, 1000);

  useEffect(() => {
    debouncedSearch(query);
    return () => {
      debouncedSearch.cancel();
    };
  }, [query]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;
