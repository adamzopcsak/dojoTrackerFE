import React, { createContext, useState, useEffect, ReactNode } from "react";
import { loadState, saveState } from "../../static/util/persist";
import { IBasicUserInfo } from "../../static/util/interfaces";

interface ContextStateProp {
    user: any | IBasicUserInfo;
    setUser: Function;
}

export const UserContext = createContext<ContextStateProp>({} as ContextStateProp);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const persistedState = loadState();
        if (persistedState) {
            setUser(persistedState);
        }
    }, []);

    useEffect(() => {
        if (user) {
            saveState(user);
        }
    }, [user]);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
