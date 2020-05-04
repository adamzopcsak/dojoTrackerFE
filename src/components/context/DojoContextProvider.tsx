import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { AxiosResponse } from "axios";
import { UserContext } from "./UserContextProvider";
import axios from "axios";

interface ContextStateProp {
    dojos: any | IBasicDojoInfo;
    setDojos: Function;
}

export const DojoContext = createContext<ContextStateProp>({} as ContextStateProp);

const DojoContextProvider = ({ children }: { children: ReactNode }) => {
    const [dojos, setDojos] = useState<any | IBasicDojoInfo>();

    const { user } = useContext(UserContext);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/dojo/list?id=${user.id}`)
            .then((response: AxiosResponse<IBasicDojoInfo>) => {
                setDojos(response.data);
            });
    }, [user]);

    return <DojoContext.Provider value={{ dojos, setDojos }}>{children}</DojoContext.Provider>;
};

export default DojoContextProvider;
