import React from "react";
import Search from "./Search";

function Header({searchFilter, setSearchFilter}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}
      />
    </header>
  );
}

export default Header;
