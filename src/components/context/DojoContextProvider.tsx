import React, { createContext, useState, ReactNode } from "react";
import { IBasicDojoInfo } from "../../static/util/interfaces";

interface ContextStateProp {
    dojos: any | IBasicDojoInfo;
    setDojos: Function;
}

export const DojoContext = createContext<ContextStateProp>({} as ContextStateProp);

const DojoContextProvider = ({ children }: { children: ReactNode }) => {
    const [dojos, setDojos] = useState();

    return <DojoContext.Provider value={{ dojos, setDojos }}>{children}</DojoContext.Provider>;
};

export default DojoContextProvider;
