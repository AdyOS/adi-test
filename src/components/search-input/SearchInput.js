import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import css from './SearchInput.module.scss';

export function SearchInput({ onSearch, onChangeSearch }) {
  const onChangeInput = (e) => {
    if (e) {
      onChangeSearch(e.target.value);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <InputGroup className={css.searchBar}>
      <FormControl
        placeholder={'Search...'}
        data-testid={'search-input'}
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
      />
      <InputGroup.Text>
        <Search
          data-testid={'search-icon'}
          color="royalblue"
          onClick={onSearch}
          size={16}
        />
      </InputGroup.Text>
    </InputGroup>
  );
}
