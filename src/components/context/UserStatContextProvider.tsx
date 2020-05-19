import React, { createContext, ReactNode, useState, useEffect } from "react";
import { IUserStatistics } from "../../static/util/interfaces";
import axios from "../../static/util/axiosConfig";
import { AxiosResponse } from "axios";
import { sortAscByValue, sortDescByValue } from "../../static/util/sort";

interface ContextStateProp {
    userStats: any | IUserStatistics[];
    isHidden: boolean;
    setIsHidden: Function;
    sortData: Function;
}

export const UserStatContext = createContext({} as ContextStateProp);

const UserStatContextProvider = ({ children }: { children: ReactNode }) => {
    const [userStats, setUserStats] = useState<any | IUserStatistics[]>();
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [isDesc, setIsDesc] = useState(true);

    useEffect(() => {
        axios.get("/api/stats/users").then((response: AxiosResponse<IUserStatistics[]>) => {
            response.data.forEach((stat) => {
                stat.lastCompleted = normalizeDate(stat.lastCompleted);
            });

            setUserStats(response.data.sort(sortDescByValue("name")));
        });
    }, []);

    const sortData = (value: string) => {
        isDesc
            ? setUserStats(userStats.sort(sortAscByValue(value)))
            : setUserStats(userStats.sort(sortDescByValue(value)));

        setIsDesc(!isDesc);
    };

    const normalizeDate = (date: string): Date | null => {
        return date === null ? null : new Date(Date.parse(date));
    };

    return (
        <UserStatContext.Provider value={{ userStats, isHidden, setIsHidden, sortData }}>
            {children}
        </UserStatContext.Provider>
    );
};

export default UserStatContextProvider;
