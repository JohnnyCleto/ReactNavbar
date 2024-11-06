import styled from "styled-components";

const Blue = styled.h1`
    background-color: black;
    color: blue;
    cursor: pointer;

    &:hover {
        background-color: red;
    }
`;

function Hello(props) {
    return <Blue>Hello, {props.name}, {props.name2}</Blue>;
}

export default Hello;
