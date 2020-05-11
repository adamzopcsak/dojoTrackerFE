import React, { createContext, ReactNode, useState } from "react";

interface ContextStateProp {
    searchValue: any;
    setSearchValue: Function;
}

export const SearchContext = createContext({} as ContextStateProp);

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchValue, setSearchValue] = useState();

    return <SearchContext.Provider value={{ searchValue, setSearchValue }}>{children}</SearchContext.Provider>;
};

export default SearchContextProvider;
