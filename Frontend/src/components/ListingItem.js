import { Outlet, Navigate, useNavigate } from "react-router-dom";
import noPic from '../assets/images/comic.jpg';

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

function ImageDisplay({listing}) {
  var altText = "Image of the comic";

  console.log(listing.FRONT_COVER);

  if (listing.FRONT_COVER == null) {
    return (<img style={{color: 'White', height: '300px'}} alt={altText} src={noPic}></img>);
  } else {
    return (<img style={{color: 'White', height: '300px'}} alt={altText} src={listing.FRONT_COVER}></img>);
  }

  

}

function Listing ({ listing }) {
        const navigate = useNavigate();

        const handelSellerClick = (e) => {
 
          e.preventDefault();
        
        
          //Now navigate to the sellers reviews page
            navigate(`/user/reviews/${listing.SELLER_USER_ID}`)
        };

        

        //Calls the function to determine if the buyers name is displayed
        let buyerText = BuyerNameDisplay(listing.BUYER);

        return (
          <div>
            <h2 style={{color: 'White'}}>{listing.TITLE}</h2>
            <a onClick={handelSellerClick}>Seller: {listing.SELLER}</a>
            <p>Released on: {listing.RELEASE_DATE}</p>
            <p>Price: {listing.LISTINGPRICE}</p>
            <p>Issue {listing.ISSUE_NUMBER}</p>
            <p>Status: {listing.STATUS}</p>
            {buyerText}
            <ImageDisplay listing={listing}/>
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