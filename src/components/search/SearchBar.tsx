import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const StyledSearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 20%;
    height: 2rem;
    border-radius: 4px;
    border-color: rgb(137, 160, 181);
    border-width: 0.04vw;
    background: white;
    border-style: solid;
    position: relative;

    &:focus-within {
        background-color: white;

        & > button {
            color: rgb(244, 67, 72);
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        padding: 0.2rem;
    }
`;

interface Props {
    search: Function;
    searchFor: string;
}

const SearchBar = (props: Props) => {
    return (
        <StyledSearchBar>
            <SearchInput search={props.search} searchFor={props.searchFor} />
            <SearchButton search={props.search} />
        </StyledSearchBar>
    );
};

export default SearchBar;
