import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsArray, setListingsArray}) {
  return (
    <main>
      <ul className="cards">
        {listingsArray.map((item) => (
          <ListingCard
          key={item.id}
          id={item.id}
          description={item.description}
          image={item.image}
          location={item.location}
          listingsArray={listingsArray}
          setListingsArray={setListingsArray}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
