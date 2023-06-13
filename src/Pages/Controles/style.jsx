import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #5271FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 30%;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    height: 40vh;
    justify-content: space-around;
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
  object-fit: cover;
  margin: 30% 0 0 0 ;
`;
