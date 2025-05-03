import styled from "styled-components"

export const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 10px 18px;
    min-width: 40%;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }

`

export const WhiteButton = styled(Button)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
`;