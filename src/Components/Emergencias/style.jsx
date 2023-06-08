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
        width: 100%;
        height: 100%;
        justify-content: space-between;
        margin: 0 0 2% 0;
    }

    form {
        align-items: center;
        width: 80%;
        height: 10%;
        position: fixed;
        bottom: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

`

export const Contacts = styled.div`
    display: flex;
    align-items: center;

    .telefone, .nome {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 10% 0 0;
    }
`