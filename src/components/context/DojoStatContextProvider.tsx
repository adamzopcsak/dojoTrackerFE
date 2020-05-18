import React, { createContext, ReactNode, useState, useEffect } from "react";
import { IDojoStatistics } from "../../static/util/interfaces";
import axios from "../../static/util/axiosConfig";
import { AxiosResponse } from "axios";
import { sortDescByValue, sortAscByValue } from "../../static/util/sort";

interface ContextStateProp {
    dojoStats: any | IDojoStatistics[];
    isHidden: boolean;
    setIsHidden: Function;
    sortData: Function;
}

export const DojoStatContext = createContext({} as ContextStateProp);

const DojoStatContextProvider = ({ children }: { children: ReactNode }) => {
    const [dojoStats, setDojoStats] = useState<any | IDojoStatistics[]>();
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [isDesc, setIsDesc] = useState<boolean>(true);

    useEffect(() => {
        axios
            .get("/api/stats/dojos")
            .then((response: AxiosResponse<IDojoStatistics[]>) => {
                setDojoStats(response.data.sort(sortDescByValue("name")));
            })
            .catch((err: any) => {
                console.log(err);
            });
    }, []);

    const sortData = (value: string) => {
        isDesc
            ? setDojoStats(dojoStats.sort(sortAscByValue(value)))
            : setDojoStats(dojoStats.sort(sortDescByValue(value)));

        setIsDesc(!isDesc);
    };

    return (
        <DojoStatContext.Provider value={{ dojoStats, isHidden, setIsHidden, sortData }}>
            {children}
        </DojoStatContext.Provider>
    );
};

export default DojoStatContextProvider;
