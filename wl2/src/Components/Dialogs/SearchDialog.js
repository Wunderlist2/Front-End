import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  width: 50%;
  margin: 20px 0;
  padding: 10px 20px;

  &:hover {
    opacity: 0.6;
  }
`;

const SearchDialog = props => {
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [searchResults, setSearchResults] = useState([]);

  //   useEffect(() => {
  //     const results = props.lists.filter(list =>
  //       list.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setSearchResults(results);
  //   }, [searchTerm]);
  //   //list.title.to
  //   const handleChange = event => {
  //     setSearchTerm(event.target.value);
  //     console.log(searchTerm);
  //   };

  return (
    <div className="search-dialog-container">
      <form className="search-dialog-form">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          label="search"
          name="search"
          placeholder="Search"
          autoFocus
          //   value={searchTerm}
          //   onChange={handleChange}
        />
        <Button onClick={props.toggleSearchDialog} className="button">Hide</Button>
      </form>
    </div>
  );
};

export default SearchDialog;
