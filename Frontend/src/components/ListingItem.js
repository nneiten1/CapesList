import { Outlet, Navigate, useNavigate } from "react-router-dom";

function BuyerNameDisplay(buyerName) {
  console.log(buyerName);

  if (buyerName != null) {
    return (
      <p>Buyer: {buyerName}</p>
    );
  } else {
    return (
      <p></p>
    );
  }
}

function Listing ({ listing }) {
        const navigate = useNavigate();

        const handelSellerClick = (e) => {
 
          e.preventDefault();
        
        
          //Now navigate to the sellers reviews page
            navigate(`/user/reviews/${listing.SELLER_USER_ID}`)
        };

        var altText = "Image of the comic";

        //Calls the function to determine if the buyers name is displayed
        let buyerText = BuyerNameDisplay(listing.BUYER);

        return (
          <div>
            <h2 style={{color: 'White'}}>{listing.TITLE}</h2>
            <a onClick={handelSellerClick}>Seller: {listing.SELLER}</a>
            <p>Released on: {listing.RELEASE_DATE}</p>
            <p>Price: {listing.PRICE}</p>
            <p>Issue {listing.ISSUE_NUMBER}</p>
            <p>Status: {listing.STATUS}</p>
            {buyerText}
            <img style={{color: 'White'}} alt={altText} src={listing.img}></img>
          </div>
        );
};

export default Listing;

//COMIC_ID int(11) PK 
// PUBLISHER_ID int(11) 
// AUTHOR_ID int(11) 
// PRICE varchar(50) 
// DATE_ADDED varchar(100) 
// RELEASE_DATE varchar(25) 
// TITLE varchar(256) 
// ISSUE_NUMBER int(11) 
// FRONT_COVER_PHOTO_URL