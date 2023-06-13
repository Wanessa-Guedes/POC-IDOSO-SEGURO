import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #5271ff;
`;

export const LogoImage = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #5271ff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LinkStyle = styled.a`
  a {
    color: #ffffff;
    margin: 10% 0 10% 0;
    text-decoration: none;
    cursor: pointer;
  }
`;
