import styled from "styled-components";

export const Main = styled.div`
    border: 1px solid green;
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
        height: 40%;
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

`