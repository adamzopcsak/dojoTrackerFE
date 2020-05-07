import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 2rem;
    margin-top: 5%;

    @media screen and (max-width: 768px) {
        margin-top: 15%;
    }
`;

export const ContainerWithRows = styled(Container)`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;

interface ButtonProps {
    danger?: boolean;
}

export const EmptyButton = styled.button`
    color: ${(props: ButtonProps) => (props.danger ? "#dc3545" : "#4d4d4d")};
    background-color: inherit;
    font-weight: bold;
    border: solid;
    border-width: 1px;
    border-radius: 7px;
    padding: 1vh 1vw;
    cursor: pointer;
    letter-spacing: 0.1rem;
    transition: background-color 0.5s;

    &:hover {
        background-color: ${(props) => (props.danger ? "#dc3545" : "#4d4d4d")};
        color: white;
    }
`;
