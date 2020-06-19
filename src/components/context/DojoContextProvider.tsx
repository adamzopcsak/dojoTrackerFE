import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { AxiosResponse } from "axios";
import axios from "../../static/util/axiosConfig";
import { LoginContext } from "./LoginContextProvider";
import { SearchContext } from "./SearchContextProvider";
import { useHistory } from "react-router-dom";

interface ContextStateProp {
    dojos: any | IBasicDojoInfo;
    setDojos: Function;
    getById: Function;
    listSearch: Function;
    getTitleById: Function;
    addDojo: Function;
    fetchAll: Function;
}

export const DojoContext = createContext<ContextStateProp>({} as ContextStateProp);

const DojoContextProvider = ({ children }: { children: ReactNode }) => {
    const [dojos, setDojos] = useState<any | IBasicDojoInfo>();
    const { isLoggedIn } = useContext(LoginContext);
    const { searchValue } = useContext(SearchContext);
    const history = useHistory();

    useEffect(() => {
        if (isLoggedIn === true) {
            fetchAll();
        }
    }, [isLoggedIn, searchValue]);

    const getById = async (id: number): Promise<IBasicDojoInfo> => {
        return dojos === undefined
            ? (await axios.get(`/api/dojo/${id}`)).data
            : dojos.find((dojo: IBasicDojoInfo) => dojo.id === id);
    };

    const fetchAll = () => {
        axios.get(`/api/dojo/list`).then((response: AxiosResponse<IBasicDojoInfo>) => {
            setDojos(response.data);
        });
    };

    const listSearch = () => {
        if (searchValue === "") {
            fetchAll();
        } else {
            axios.get(`/api/dojo/search?title=${searchValue}`).then((response: AxiosResponse<IBasicDojoInfo>) => {
                setDojos(response.data);
            });
        }

        history.push("/dojos");
    };

    const getTitleById = async (id: number): Promise<string> => {
        const dojo = await getById(id);

        return dojo?.title;
    };

    const addDojo = (dojo: IBasicDojoInfo) => {
        axios.post(`/api/dojo/add`, dojo).then((response: AxiosResponse<any>) => {
            history.push("/newDojo");
        });
    };

    const isDojoComplete = async (dojoId: string) => {
        return await axios.get(`/api/dojo/status/${dojoId}`);
    };

    return (
        <DojoContext.Provider value={{ dojos, setDojos, getById, listSearch, getTitleById, addDojo, fetchAll }}>
            {children}
        </DojoContext.Provider>
    );
};

export default DojoContextProvider;
