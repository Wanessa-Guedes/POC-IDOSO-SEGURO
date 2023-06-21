import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;

    width: 80%;
    height: 10%;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 10%;

    justify-content: space-between;
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

export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  height: 400px;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: end;
  flex-wrap: wrap;
  margin-bottom: 10px;
  list-style: none;
  border: 3px solid white;
  background-color: white;
  width: 80%;
  height: 22%;
  justify-content: space-around;
`;

export const Name = styled.span`
  margin-right: 10px;
`;

export const Phone = styled.span`
  margin-right: 10px;
  color: gray;
`;
