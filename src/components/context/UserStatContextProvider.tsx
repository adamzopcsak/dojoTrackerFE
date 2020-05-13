import React, { createContext, ReactNode, useState, useEffect } from "react";
import { IUserStatistics } from "../../static/util/interfaces";
import axios from "../../static/util/axiosConfig";
import { AxiosResponse } from "axios";

interface ContextStateProp {
    userStats: any | IUserStatistics;
    isHidden: boolean;
    setIsHidden: Function;
}

export const UserStatContext = createContext({} as ContextStateProp);

const UserStatContextProvider = ({ children }: { children: ReactNode }) => {
    const [userStats, setUserStats] = useState<any | IUserStatistics[]>();
    const [isHidden, setIsHidden] = useState<boolean>(true);

    useEffect(() => {
        axios.get("/api/stats/users").then((response: AxiosResponse<IUserStatistics[]>) => {
            setUserStats(response.data);
        });
    }, []);

    return <UserStatContext.Provider value={{ userStats, isHidden, setIsHidden }}>{children}</UserStatContext.Provider>;
};

export default UserStatContextProvider;
