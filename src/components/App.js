import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  // search 5. assign a state to display the search on the page
  const [searchQuery, setSearchQuery] = useState ("")

  useEffect(()=>{
    fetch ("http://localhost:6001/listings")
    .then (r => r.json())
    .then (listingData => setListings(listingData))
  },[])

  // pass this to listingContainer & listingCard
  // 💀removefn 2. give a remove function to the target listing and console.log the id to check && pass down
  const removeListing = targetedListing=>{
    //💀removefn 3. filtes all the listings with id, and let the target to be false to remove
    const newListings = listings.filter( listing=>{
      // when trash clicked the function will return false on the clicked listing.id, which makes it disappear
      // other listing will stay true and re-render on the page
      return targetedListing.id !== listing.id
    })
    // 💀removefn 4. update the listing state
    setListings (newListings)
    //  fetch (`http://localhost:6001/listings/${targetedListing.id}`,
    //  { method : "DELETE"})
  }

  // ❓ search 7. filter the listing name with the search value
  const searchListing = listings.filter( listing =>{
    // ❓search 8 compare the name and return true or false
    return listing.description.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="app">
      <Header listings ={listings} setSearchQuery={setSearchQuery}/>
        {/* ❓search 6.what searched will  ⬇  render to the page ⬆ */}
      <ListingsContainer listings ={searchListing} removeListing ={removeListing}/>
    </div>
  );
}

export default App;
