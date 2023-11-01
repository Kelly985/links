import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleInputChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
