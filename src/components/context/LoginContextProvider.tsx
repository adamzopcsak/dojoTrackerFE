import React, { ReactNode, createContext, useState, useEffect } from "react";
import { loadState, saveState } from "../../static/util/persist";

interface ContextStateProp {
    isLoggedIn: boolean;
    setIsLoggedIn: Function;
}

export const LoginContext = createContext({} as ContextStateProp);

const LoginContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const persistedState = loadState();
        if (persistedState) {
            setIsLoggedIn(persistedState);
        }
    }, []);

    useEffect(() => {
        if (isLoggedIn) {
            saveState(isLoggedIn);
        }
    }, [isLoggedIn]);

    return <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>;
};

export default LoginContextProvider;
