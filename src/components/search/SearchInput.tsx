import React, { Fragment, KeyboardEvent, useContext } from "react";
import styled from "styled-components";
import { SearchContext } from "../context/SearchContextProvider";

const StyledSearchInput = styled.input`
    border: none;
    background-color: inherit;
    color: rgb(137, 160, 181);
    font-weight: bold;
    padding: 0.5vh 1vw;
    flex: 1;

    &:focus {
        outline: none;
        color: black;
    }

    &::placeholder {
        color: rgb(137, 160, 181);
        font-weight: bold;
    }
`;

interface Props {
    search: Function;
    searchFor: string;
}

const SearchInput = (props: Props) => {
    const { updateSearchValue } = useContext(SearchContext);

    const searchOnKeydown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            props.search();
        }

        return;
    };

    return (
        <Fragment>
            <StyledSearchInput
                placeholder={props.searchFor ? `Search for ${props.searchFor}...` : "Search..."}
                type="text"
                name="name"
                onChange={(e) => updateSearchValue(e.target.value)}
                autoComplete="off"
                onKeyDown={(event) => searchOnKeydown(event)}
                className="search-bar"
                id="search-bar"
            ></StyledSearchInput>
        </Fragment>
    );
};

export default SearchInput;
