import React, { useContext } from "react";
import SearchBar from "../search/SearchBar";
import { DojoContext } from "../context/DojoContextProvider";

interface Props {
    mobile: boolean;
}

const DojoSearchContainer = (props: Props) => {
    const { listSearch } = useContext(DojoContext);

    return <SearchBar mobile={props.mobile} search={listSearch} searchFor={"dojos"} />;
};

export default DojoSearchContainer;
