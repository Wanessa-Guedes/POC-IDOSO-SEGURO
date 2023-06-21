import styled from "styled-components";

export const Main = styled.div`
  margin-top: 2%;
  width: 90%;
  height: 90%;
  align-items: center;

  li {
    list-style: none;
    border: 3px solid white;
    border-radius: 50px 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 10%;
    justify-content: space-between;
    margin: 0 0 2% 0;
  }

  form {
    align-items: center;
    width: 80%;
    height: 40%;
    position: fixed;
    bottom: 0;
    left: 20%;
  }

  ul {
    height: 400px;
    overflow-y: scroll;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
