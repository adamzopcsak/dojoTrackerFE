import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { AxiosResponse } from "axios";
import axios from "../../static/util/axiosConfig";
import { LoginContext } from "./LoginContextProvider";

interface ContextStateProp {
    dojos: any | IBasicDojoInfo;
    setDojos: Function;
    getById: Function;
}

export const DojoContext = createContext<ContextStateProp>({} as ContextStateProp);

const DojoContextProvider = ({ children }: { children: ReactNode }) => {
    const [dojos, setDojos] = useState<any | IBasicDojoInfo>();
    const { isLoggedIn } = useContext(LoginContext);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/dojo/list`).then((response: AxiosResponse<IBasicDojoInfo>) => {
            setDojos(response.data);
        });
    }, [isLoggedIn]);

    const getById = async (id: string) => {
        return dojos === undefined
            ? (await axios.get(`http://localhost:5000/api/dojo/${id}`)).data
            : dojos.find((dojo: IBasicDojoInfo) => dojo.id.toString() === id);
    };

    return <DojoContext.Provider value={{ dojos, setDojos, getById }}>{children}</DojoContext.Provider>;
};

export default DojoContextProvider;
