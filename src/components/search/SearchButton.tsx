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
`;

interface Props {
    search: Function;
}

const SearchButton = (props: Props) => {
    return (
        <StyledSearchButton className="search-btn" id="search-btn">
            <FontAwesomeIcon icon={faSearch} onClick={() => props.search()} size="1x" />
        </StyledSearchButton>
    );
};

export default SearchButton;
