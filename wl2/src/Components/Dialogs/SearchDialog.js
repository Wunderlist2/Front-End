import React, { useState, useEffect } from "react";

const SearchDialog = props => {
  return (
    <div className="search-dialog-container">
      <form className="search-dialog-form">
        <input
          id="search"
          label="search"
          name="search"
          placeholder="Search"
          autoFocus
          //   value={searchTerm}
          //   onChange={handleChange}
        />
        <button
          className="searchDialogButton"
          onClick={props.toggleSearchDialog}
        >
          Hide
        </button>
      </form>
    </div>
  );
};

export default SearchDialog;
