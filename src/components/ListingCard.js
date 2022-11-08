import React,{useState} from "react";

function ListingCard({listing, removeListing }) {
  // console.log(listing)
  const [isLiked, setIsLiked]= useState(false)

  const handleLikeClick =()=>{
    setIsLiked(!isLiked)
  }
  // removeListing passed down from App.js
  // 💀 removefn 1. assign a click event, and connect the listing state in the App
  const handleDeleteClick=()=>{
    // 💀 console.log the target listing can't know which one I want. But try ID
    removeListing (listing)
  }

 return(
  <li className="card">
            <div className="image">
          <span className="price">$0</span>
          <img src={listing.image} alt={listing.description} />
          </div>
          <div className="details">
          {isLiked ? (
            <button onClick = {handleLikeClick} className="emoji-button favorite active">★</button>
          ) : (
            <button onClick = {handleLikeClick} className="emoji-button favorite">☆</button>
          )}
          <strong>{listing.description}</strong>
          <span> ~ {listing.location}</span>
          <button onClick = {handleDeleteClick} className="emoji-button delete">🗑</button>
          </div>
        </li>
 )


  // const [isDeleted, setIsDeleted]= useState(false)

  // const handleDeleteClick =()=>{
  //   setIsDeleted(!isDeleted)
  // }

  // return(
  //   <>
  //   { isDeleted ? null:
  //       (<li className="card">
  //           <div className="image">
  //         <span className="price">$0</span>
  //         <img src={listing.image} alt={listing.description} />
  //         </div>
  //         <div className="details">
  //         {isLiked ? (
  //           <button onClick = {handleLikeClick} className="emoji-button favorite active">★</button>
  //         ) : (
  //           <button onClick = {handleLikeClick} className="emoji-button favorite">☆</button>
  //         )}
  //         <strong>{listing.description}</strong>
  //         <span> ~ {listing.location}</span>
  //         <button onClick = {handleDeleteClick} className="emoji-button delete">🗑</button>
  //         </div>
  //       </li>
  //     )
  //   }
  //   </>
  // )

}


export default ListingCard;
