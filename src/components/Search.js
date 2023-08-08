import React, {useState} from "react";

function Search({searchFilter, setSearchFilter}) {

  const [query, setQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setSearchFilter(query)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
