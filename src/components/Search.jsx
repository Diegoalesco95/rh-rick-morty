import React from 'react';

const Search = ({ search, searchInput, handleSearch, theme }) => {
  return (
    <label htmlFor='search-characters'>
      Search a character:
      <input
        type='text'
        id='search-characters'
        value={search}
        onChange={handleSearch}
        className={`Characteres-search ${theme ? 'dark' : 'light'}`}
        placeholder='Enter a name...'
        ref={searchInput}
      />
    </label>
  );
};

export default Search;
