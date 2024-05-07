import styled from "styled-components"

const ReviewDiv = styled.div`
  background-color: #FFFFFF;
  border-radius: 20px; /* Set the border radius for rounded corners */
  border: 2px solid #000000; /* Set border properties */
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