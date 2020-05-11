import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { AxiosResponse } from "axios";
import axios from "../../static/util/axiosConfig";
import { LoginContext } from "./LoginContextProvider";
import { SearchContext } from "./SearchContextProvider";

interface ContextStateProp {
    dojos: any | IBasicDojoInfo;
    setDojos: Function;
    getById: Function;
    listSearch: Function;
}

export const DojoContext = createContext<ContextStateProp>({} as ContextStateProp);

const DojoContextProvider = ({ children }: { children: ReactNode }) => {
    const [dojos, setDojos] = useState<any | IBasicDojoInfo>();
    const { isLoggedIn } = useContext(LoginContext);
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        listAll();
    }, [isLoggedIn]);

    const getById = async (id: string) => {
        return dojos === undefined
            ? (await axios.get(`/api/dojo/${id}`)).data
            : dojos.find((dojo: IBasicDojoInfo) => dojo.id.toString() === id);
    };

    const listAll = () => {
        axios.get(`/api/dojo/list`).then((response: AxiosResponse<IBasicDojoInfo>) => {
            setDojos(response.data);
        });
    };

    const listSearch = () => {
        if (searchValue === "") {
            listAll();
        } else {
            axios.get(`/api/dojo/search?title=${searchValue}`).then((response: AxiosResponse<IBasicDojoInfo>) => {
                setDojos(response.data);
            });
        }
    };

    return <DojoContext.Provider value={{ dojos, setDojos, getById, listSearch }}>{children}</DojoContext.Provider>;
};

export default DojoContextProvider;
