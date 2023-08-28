import styled from 'styled-components';

export const MovieCardContainer = styled.div`
  margin-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const MovieCardDetail = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const MovieCardImage = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  width = 100%;
  object-fit: cover;
  height: 100%;
 
`;

export const MovieCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`;

export const AditionalInormation = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  padding-top: 20px;
  padding-left: 50px;

  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  padding-bottom: 50px;
`;

export const InformationOption = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;
