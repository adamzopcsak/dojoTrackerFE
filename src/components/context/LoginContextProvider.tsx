import React, { ReactNode, createContext, useState, useEffect } from "react";
import { loadState, saveState } from "../../static/util/persist";

interface ContextStateProp {
    isLoggedIn: any;
    setIsLoggedIn: Function;
    checkForLoginStatus: Function;
}

export const LoginContext = createContext({} as ContextStateProp);

const LoginContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState();

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

    const checkForLoginStatus = (): boolean => {
        try {
            const serializedState = sessionStorage.getItem("dta-login-state");
            if (serializedState === null) return false;
            return JSON.parse(serializedState).isLoggedIn;
        } catch (err) {
            return false;
        }
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, checkForLoginStatus }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginContextProvider;
