import React,{useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListing}) {
  // console.log(listings)

  const renderListingCard = listings.map(listing=>{
    return (                                              
     <ListingCard key={listing.id} listing ={listing} removeListing ={removeListing} />
    )
  })

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {renderListingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
