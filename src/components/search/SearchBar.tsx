import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

interface StyleProps {
    mobile: boolean;
}

const StyledSearchBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 20%;
    max-width: 80%;
    height: 2rem;
    border-radius: 4px;
    border-color: rgb(137, 160, 181);
    border-width: 0.04vw;
    background: white;
    border-style: solid;
    position: relative;
    font-weight: bold;

    &:focus-within {
        background-color: white;

        & > button {
            color: rgb(244, 67, 72);
        }
    }

    @media (max-width: 1280px) {
        display: ${(props: StyleProps) => (props.mobile ? "" : "none")};
    }
`;

interface Props {
    search: Function;
    searchFor: string;
    mobile: boolean;
}

const SearchBar = (props: Props) => {
    return (
        <StyledSearchBar mobile={props.mobile}>
            <SearchInput search={props.search} searchFor={props.searchFor} />
            <SearchButton search={props.search} />
        </StyledSearchBar>
    );
};

export default SearchBar;
