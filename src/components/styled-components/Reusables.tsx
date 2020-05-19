import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    min-height: 80vh;

    @media screen and (max-width: 768px) {
        margin-top: 15%;
    }
`;

export const ContainerWithRows = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const CenteredContainer = styled(Container)`
    justify-content: center;
    & button {
        margin: 1rem 2rem;
    }
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

export const StickyTile = styled.div`
    height: 2rem;
    position: sticky;
    top: 4.5rem;
    background-color: rgba(255, 255, 255, 1);
    z-index: 1;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DataTile = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 2rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border: 1px solid gray;
    padding: 1.3rem;
    margin: 0.3rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);

    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    }

    & p {
        flex-grow: 1;
        width: 100%; // Default to full width
        padding: 0.8rem 1.2rem;
        overflow: hidden; // Or flex might break
        text-align: center;
    }

    & p:first-child {
        text-align: left !important;
        font-weight: bold !important;
    }

    & p:last-child {
        text-align: right;
    }
`;

export const HeaderTile = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 2rem;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-weight: bold;
    padding: 0.5rem;
    margin: 0.3rem;
    border-radius: 8px;
    color: #aaa;

    & p {
        flex-grow: 1;
        width: 100%; // Default to full width
        padding: 0.8rem 1.2rem;
        overflow: hidden; // Or flex might break
        align-self: center;
        text-align: center;
        transition: all 0.5s;

        &:hover {
            cursor: pointer;
            color: black;
        }
    }

    & p:first-child {
        text-align: left !important;
    }

    & p:last-child {
        text-align: right;
    }
`;
