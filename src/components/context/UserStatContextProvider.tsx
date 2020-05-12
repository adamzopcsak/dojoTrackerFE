import React, { createContext, ReactNode, useState, useEffect } from "react";
import { IUserStatistics } from "../../static/util/interfaces";
import axios from "../../static/util/axiosConfig";
import { AxiosResponse } from "axios";

interface ContextStateProp {
    userStats: any | IUserStatistics;
}

export const UserStatContext = createContext({} as ContextStateProp);

const UserStatContextProvider = ({ children }: { children: ReactNode }) => {
    const [userStats, setUserStats] = useState<any | IUserStatistics[]>();

    useEffect(() => {
        axios.get("/api/stats/users").then((response: AxiosResponse<IUserStatistics>) => {
            setUserStats(response.data);
            console.log("this is being fetched");
        });
    }, [setUserStats, userStats]);

    return <UserStatContext.Provider value={{ userStats }}></UserStatContext.Provider>;
};

export default UserStatContextProvider;
