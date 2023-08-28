import styled from "styled-components";


export const CastContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`;



export const CastCard = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height: 360px;
background-color: #fff;
box-shadow: 0 10px 15px gray;

transition: transform 0.25s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }


`;

export const CastImage = styled.img`
width: 250px;
height: 300px;
object-fit: cover;
justify-content: center;


`;

export const CastInfo = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
gap:5px;
margin-bottom:5px;
padding-left: 10px;

`;
