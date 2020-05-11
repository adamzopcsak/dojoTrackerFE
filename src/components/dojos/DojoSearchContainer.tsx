import React, { useContext } from "react";
import { StickyTile } from "../styled-components/Reusables";
import SearchBar from "../search/SearchBar";
import { DojoContext } from "../context/DojoContextProvider";

interface Props {}

const DojoSearchContainer = (props: Props) => {
    const { listSearch } = useContext(DojoContext);

    return (
        <StickyTile>
            <SearchBar search={listSearch} searchFor={"dojos"} />
        </StickyTile>
    );
};

export default DojoSearchContainer;
