import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledSearchButton = styled.button`
    background: none;
    color: rgb(137, 160, 181);
    font: inherit;
    outline: inherit;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 20%;
    left: 75%;
    transition: 1000ms ease;
`;

interface Props {
    search: Function;
}

const SearchButton = (props: Props) => {
    return (
        <StyledSearchButton>
            <FontAwesomeIcon icon={faSearch} onClick={() => props.search()} size="1x" />
        </StyledSearchButton>
    );
};

export default SearchButton;
