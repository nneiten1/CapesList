function AuthorName ({ author }) {
    return (
      <option value={author.AUTHOR_ID}>
        {author.AUTHOR_FIRST_NAME + ' ' + author.AUTHOR_LAST_NAME}</option>
    );
};

export default AuthorName;