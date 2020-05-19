import React, { useContext } from "react";
import SearchBar from "../search/SearchBar";
import { DojoContext } from "../context/DojoContextProvider";

interface Props {}

const DojoSearchContainer = (props: Props) => {
    const { listSearch } = useContext(DojoContext);

    return <SearchBar search={listSearch} searchFor={"dojos"} />;
};

export default DojoSearchContainer;
