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
    padding: 0.5vh 1vw;
`;

interface Props {
    search: Function;
}

const SearchButton = (props: Props) => {
    return (
        <StyledSearchButton>
            <FontAwesomeIcon icon={faSearch} onClick={() => props.search()} size="lg" />
        </StyledSearchButton>
    );
};

export default SearchButton;
