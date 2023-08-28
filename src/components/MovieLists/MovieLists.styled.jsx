import styled from 'styled-components';

export const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  width: 100%;
  justify-content: center;
  margin-bottom: 50px;
`;

export const ListItem = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border: solid 1px gray;
  padding: 5px;
  box-shadow: 5px 5px 5px #263038;
  border-radius: 5px;
  transition: transform 0.25s ease-in-out;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

export const Item = styled.li`
  border-radius: 5px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.div`
  color: #263038;
  height: 50px;
  display: flex;
  align-items: center;
`;
