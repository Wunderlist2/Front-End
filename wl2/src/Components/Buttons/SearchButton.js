import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchDialog from "../Dialogs/SearchDialog";

library.add(faSearch);

const SearchButton = props => {
  return (
    <div onClick={props.toggleSearchDialog}>
      <FontAwesomeIcon icon={faSearch} className="searchButton" />
      {props.showSearchDialog && <SearchDialog />}
    </div>
  );
};

export default SearchButton;
