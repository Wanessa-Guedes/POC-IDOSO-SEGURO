import styled from "styled-components";

export const Container = styled.div`
  background-color: #5271ff;
  height: 95.6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #ffffff;
  margin: 20% 0 20% 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ButtonStyle = styled.button`
  button {
    display: inline-block;
    padding: 10px 20px;
    outline: none;
    background-color: #ffffff;
    color: #5271ff;
    border-radius: 4px;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
    margin: 0 10px;
    border: none;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: auto;
`;
