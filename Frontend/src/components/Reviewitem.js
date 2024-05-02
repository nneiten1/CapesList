function Review ({review}) {
    return (
        <div>
          <h2 style={{color: 'White'}}>{review.REVIEWER_USER_ID}</h2>
          <p>{review.REVIEWIE_USER_ID}</p>
          <p>{review.STAR_RATING}</p>
          <p>{review.DATE}</p>
          <p>{review.DETAILS}</p>
        </div>
      );
};

export default Review;