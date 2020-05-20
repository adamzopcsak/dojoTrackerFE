import React, { createContext, ReactNode, useState, useEffect } from "react";
import { IUserStatistics } from "../../static/util/interfaces";
import axios from "../../static/util/axiosConfig";
import { AxiosResponse } from "axios";
import { sortAscByValue, sortDescByValue } from "../../static/util/sort";

interface ContextStateProp {
    ranking: any;
    sortData: Function;
}

export const RankingContext = createContext({} as ContextStateProp);

const RankingContextProvider = ({ children }: { children: ReactNode }) => {
    const [ranking, setRanking] = useState<any | IUserStatistics[]>();
    const [isDesc, setIsDesc] = useState(true);

    useEffect(() => {
        axios.get("/api/stats/users").then((response: AxiosResponse<IUserStatistics[]>) => {
            response.data.sort(sortDescByValue("score"));
            response.data.forEach((stat: any, index) => {
                stat["rank"] = index + 1;
            });
            setRanking(response.data);
        });
    }, []);

    const sortData = (value: string) => {
        isDesc ? setRanking(ranking.sort(sortAscByValue(value))) : setRanking(ranking.sort(sortDescByValue(value)));

        setIsDesc(!isDesc);
    };

    return <RankingContext.Provider value={{ ranking, sortData }}>{children}</RankingContext.Provider>;
};

export default RankingContextProvider;
