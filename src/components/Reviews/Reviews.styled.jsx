import styled from "styled-components";


export const ReviewsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
witdh: 100%;

`;


export const ReviewsCard = styled.div`
display: flex;
flex-direction: column;
gap:20px;
box-shadow: 0 10px 15px gray;
padding: 20px 50px 20px 20px;
width: 100%;

`;

export const NoReviews = styled.p`
color: tomato;
font-size: 20px;

`;
