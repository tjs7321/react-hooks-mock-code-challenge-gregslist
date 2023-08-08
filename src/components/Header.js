import React from "react";
import Search from "./Search";
import NewItemForm from "./NewItemForm";

function Header({setSearchFilter, sort, setSort, newItem, setNewItem, listingsArray, setListingsArray}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
      setSearchFilter={setSearchFilter}
      sort={sort}
      setSort={setSort}
      newItem={newItem}
      setNewItem={setNewItem}
      />
      <NewItemForm
      newItem={newItem}
      setNewItem={setNewItem}
      listingsArray={listingsArray}
      setListingsArray={setListingsArray}
      />
    </header>
  );
}

export default Header;
