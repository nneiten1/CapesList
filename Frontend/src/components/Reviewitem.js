import styled from "styled-components"

const ReviewDiv = styled.div`
background-color: #121212
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