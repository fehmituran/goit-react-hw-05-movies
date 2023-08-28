import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  

  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const BackLinkCard = styled.div`

display: flex;
justify-content: flex-start;
margin-right: 50px;
margin-left: 50px;
`;