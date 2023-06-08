import styled from "styled-components";

export const Main = styled.div`
border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 99.5vw;
    height: 99.5vh;
    background-color: #5271FF;

    img{
        width: 40%;
        height: 20%;
        margin: 0 0 30% 0;
    }

`

export const NavBarStyle = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 90%;
    height: 20%;
`

export const ControlesStyle = styled.div`
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 80%;
    height: 50%;
`