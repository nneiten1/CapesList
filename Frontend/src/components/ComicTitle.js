function ComicTitle ({ comic }) {
    return (
      <option value={comic.COMIC_ID}>
        {comic.TITLE}</option>
    );
};

export default ComicTitle;

//COMIC_ID int(11) PK 
// PUBLISHER_ID int(11) 
// AUTHOR_ID int(11) 
// PRICE varchar(50) 
// DATE_ADDED varchar(100) 
// RELEASE_DATE varchar(25) 
// TITLE varchar(256) 
// ISSUE_NUMBER int(11) 
// FRONT_COVER_PHOTO_URL