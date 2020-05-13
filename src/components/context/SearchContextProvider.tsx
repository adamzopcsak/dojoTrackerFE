import React, { createContext, ReactNode, useState, useCallback } from "react";

interface ContextStateProp {
    searchValue: any;
    updateSearchValue: Function;
}

export const SearchContext = createContext({} as ContextStateProp);

const SearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchValue, setSearchValue] = useState<any | string>();

    const updateSearchValue = useCallback(
        (s: string) => {
            setSearchValue(s);
        },
        [setSearchValue]
    );

    return <SearchContext.Provider value={{ searchValue, updateSearchValue }}>{children}</SearchContext.Provider>;
};

export default SearchContextProvider;
