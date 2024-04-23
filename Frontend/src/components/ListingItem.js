function Listing ({ listing }) {
        var altText = "Image of the comic"
        return (
          <div>
            <h2>{listing.TITLE}</h2>
            <p>{listing.RELEASE_DATE}</p>
            <p>{listing.PRICE}</p>
            <p>{listing.ISSUE_NUMBER}</p>
            <img alt={altText} src={listing.img}></img>
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