import React, { ReactNode, createContext, useState, useEffect, useContext } from "react";
import { IBasicUserInfo } from "../../static/util/interfaces";
import axios from "../../static/util/axiosConfig";
import { AxiosResponse } from "axios";
import { LoginContext } from "./LoginContextProvider";

interface ContextStateProp {
    user: any;
    isLoading: boolean;
    setUser: Function;
    getUserDataById: Function;
    saveUpdates: Function;
}

export const UserDataContext = createContext<ContextStateProp>({} as ContextStateProp);

const UserDataContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any | IBasicUserInfo>();
    const { isLoggedIn } = useContext(LoginContext);
    const [isLoading, setIsLoading] = useState<any | boolean>();

    useEffect(() => {
        if (isLoggedIn === true) {
            setIsLoading(true);
            axios.get("/api/user/user").then((response: AxiosResponse<any>) => {
                setUser(response.data);
                setIsLoading(false);
            });
        }
    }, [isLoggedIn]);

    const saveUpdates = () => {
        axios.patch("/api/user", user).catch((error) => console.log(error));
    };

    const getUserDataById = async (id: string) => {
        return (await axios.get(`/api/user/user/${id}`)).data;
    };

    return (
        <UserDataContext.Provider value={{ user, isLoading, setUser, getUserDataById, saveUpdates }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserDataContextProvider;
