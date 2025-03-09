import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: #1d1d1d;
  border-bottom: 2px solid grey;
  background-image: linear-gradient(rgba(227, 140, 10, 0.64), rgba(169, 216, 29, 0.4));
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 32px;
    padding-right: 32px;
  }
`;
