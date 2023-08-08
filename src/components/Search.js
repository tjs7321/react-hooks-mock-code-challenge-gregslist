import React, {useState} from "react";

function Search({setSearchFilter, sort, setSort}) {

  const [query, setQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setSearchFilter(query)
    setQuery("")
  }

  return (
    <>
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
      <select onChange={(e) => setSort(e.target.value)}>
        <option>Location A-Z</option>
        <option>Location Z-A</option>
        <option>Description A-Z</option>
        <option>Description Z-A</option>
      </select>
    </>
  );
}

export default Search;
