import React, { createContext, useState, useEffect } from "react";
import { loadState, saveState } from "../../static/util/persist";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [state, setState] = useState("");

    useEffect(() => {
        const persistedState = loadState();
        if (persistedState) {
            setState(persistedState);
        }
    }, []);

    useEffect(() => {
        if (state) {
            saveState(state);
        }
    }, [state]);

    console.log(state);

    return <UserContext.Provider value={[state, setState]}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;
