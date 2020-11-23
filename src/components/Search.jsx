import React from 'react';

const Search = ({ search, searchInput, handleSearch, theme }) => {
  return (
    <input
      type='text'
      value={search}
      onChange={handleSearch}
      className={`Characteres-search ${theme ? 'dark' : 'light'}`}
      placeholder='Search character...'
      ref={searchInput}
    />
  );
};

export default Search;
