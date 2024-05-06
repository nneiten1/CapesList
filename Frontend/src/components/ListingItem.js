import { Outlet, Navigate, useNavigate } from "react-router-dom";


// window.addEventListener("pageshow", (event) => {
//   const historyTraversal =
//     event.persisted ||
//     (typeof window.performance != "undefined" &&
//       window.performance.navigation.type === 2);

//   if (historyTraversal) {
//     window.location.reload();
//   }
// });


function Listing ({ listing }) {
        const navigate = useNavigate();

        const handelSellerClick = (e) => {
 
          e.preventDefault();
        
        
          //Now navigate to the sellers reviews page
            navigate(`/user/reviews/${listing.SELLER_USER_ID}`)
        };



        console.log(listing);
        var altText = "Image of the comic"
        return (
          <div>
            <h2 style={{color: 'White'}}>{listing.TITLE}</h2>
            <a onClick={handelSellerClick}>{listing.SELLER}</a>
            <p>{listing.RELEASE_DATE}</p>
            <p>{listing.PRICE}</p>
            <p>{listing.ISSUE_NUMBER}</p>
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