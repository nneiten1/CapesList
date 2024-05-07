import styled from "styled-components"

const ReviewDiv = styled.div`
  background-color: 'White'
  border-radius: 10px; /* Set the border radius for rounded corners */
  border: 2px solid #ccc; /* Set border properties */
  margin: 20px; /* Set margin to create space around the div */
  padding: 20px; /* Optionally, add padding to create space between content and border */
`


function Review ({review}) {
    return (
        <ReviewDiv>
          <h2 style={{color: 'Blue'}}>{review.REVIEWIE_USER_ID}</h2>
          <p>{review.STAR_RATING}</p>
          <p>{review.DATE}</p>
          <p>{review.DETAILS}</p>
        </ReviewDiv>
      );
};

export default Review;