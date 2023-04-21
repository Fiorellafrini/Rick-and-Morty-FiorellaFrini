import SearchBar from "./ShearchBar";
import React from "react";

const Nav = ({ onSearch }) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
