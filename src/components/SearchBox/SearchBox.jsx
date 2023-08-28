import React, { useState } from 'react';
import { SearchBoxForm, Input, Button } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    console.log(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchBoxForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="searchQuery"
        autoComplete="off"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </SearchBoxForm>
  );
};

export default SearchBox;
