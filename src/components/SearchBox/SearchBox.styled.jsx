import styled from 'styled-components';


export const SearchBoxForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 2px 10px;
  margin-right: 10px;
  height: 35px;
  border: solid 2px gray;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 2px 20px;
  margin: 5px;
  height: 40px;
  border: solid 2px #fff;
  background-color: #263038;
  color: #fff;
  cursor: pointer;
  transition: All 0.25s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #263038;
    border: solid 2px gray;
  }
`;
