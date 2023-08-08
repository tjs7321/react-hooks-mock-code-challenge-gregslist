import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingsArray, setListingsArray] = useState([])
  const [searchFilter, setSearchFilter] = useState("")
  const [sort, setSort] = useState("Location A-Z")
  const [newItem, setNewItem] = useState({description: "", image: "", location: ""})

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(r => setListingsArray(r))
  }, [])

  let filteredListings
  if (searchFilter === "") {filteredListings = listingsArray}
  else {filteredListings = listingsArray.filter((listing) => 
    listing.description.toLowerCase().includes(searchFilter.toLowerCase()))}

  let sortedListings = [...filteredListings]
  if (sort === "Location A-Z"){
    sortedListings = [...filteredListings].sort((a, b) => a.location.localeCompare(b.location))
  }
  if (sort === "Location Z-A"){
    sortedListings = [...filteredListings].sort((a, b) => b.location.localeCompare(a.location))
  }
  if (sort === "Description A-Z"){
    sortedListings = [...filteredListings].sort((a, b) => a.description.localeCompare(b.description))
  }
  if (sort === "Description Z-A"){
    sortedListings = [...filteredListings].sort((a, b) => b.description.localeCompare(a.description))
  }

  return (
    <div className="app">
      <Header
      setSearchFilter={setSearchFilter}
      sort={sort}
      setSort={setSort}
      newItem={newItem}
      setNewItem={setNewItem}
      listingsArray={listingsArray}
      setListingsArray={setListingsArray}
      />
      <ListingsContainer
      listingsArray={sortedListings}
      setListingsArray={setListingsArray}
      />
    </div>
  );
}

export default App;