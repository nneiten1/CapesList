import { Outlet, Navigate, useNavigate } from "react-router-dom";



function Listing ({ listing }) {
        const navigate = useNavigate();

        const handelSellerClick = (e) => {
 
          e.preventDefault();
        
        
          //Now navigate to the sellers reviews page
            navigate(`/user/reviews/${listing.SELLER_USER_ID}`)
        };

        var altText = "Image of the comic"
        return (

          <div style={{ color: 'white', margin: '20px' }}>
          <h2>{listing.TITLE}</h2>
          <a href="#" onClick={handleSellerClick}>{listing.SELLER}</a>
          <p>{listing.RELEASE_DATE}</p>
          <p>{listing.PRICE}</p>
          <p>{listing.ISSUE_NUMBER}</p>
          <img style={{ maxWidth: '100%', height: 'auto' }} alt={altText} src={listing.img} />
      </div>


          /*
          <div>
            <h2 style={{color: 'White'}}>{listing.TITLE}</h2>
            <a onClick={handelSellerClick}>{listing.SELLER}</a>
            <p>{listing.RELEASE_DATE}</p>
            <p>{listing.PRICE}</p>
            <p>{listing.ISSUE_NUMBER}</p>
            <img style={{color: 'White'}} alt={altText} src={listing.img}></img>
          </div>
          */
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