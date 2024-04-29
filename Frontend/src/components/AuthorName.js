function AuthorName ({ author }) {
    return (
      <option value={author.AUTHOR_ID}>
        {author.FNAME}</option>
    );
};

export default AuthorName;