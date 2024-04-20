function Listing ({ listing }) {
        var altText = "Image of the comic" + listing.title
        return (
          <div>
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>{listing.price}</p>
            <p>{listing.location}</p>
            <img alt={altText} src={listing.img}></img>
          </div>
        );
};

export default Listing;