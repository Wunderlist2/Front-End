import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const SearchButton = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} className="searchButton" />
    </div>
  )
}

export default SearchButton;