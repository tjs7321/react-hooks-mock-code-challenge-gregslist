import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingsArray, setListingsArray] = useState([])
  const [searchFilter, setSearchFilter] = useState("")

  console.log(searchFilter)

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(r => setListingsArray(r))
  }, [])

  let filteredListings
  if (searchFilter === "") {filteredListings = listingsArray}
  else {filteredListings = listingsArray.filter((listing) => 
    listing.description.includes(searchFilter))}

  return (
    <div className="app">
      <Header
      searchFilter={searchFilter}
      setSearchFilter={setSearchFilter}
      />
      <ListingsContainer
      listingsArray={filteredListings}
      setListingsArray={setListingsArray}
      />
    </div>
  );
}

export default App;
