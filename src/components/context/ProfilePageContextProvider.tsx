import React, { ReactNode, createContext, useState } from "react";
import { IUserStatistics } from "../../static/util/interfaces";

interface ContextStateProps {
    profileState: string;
    userData: any | IUserStatistics;
    isCurrentUser: any | boolean;
    setProfileState: Function;
    setUserData: Function;
    setIsCurrentUser: Function;
}

export const ProfilePageContext = createContext({} as ContextStateProps);

const ProfilePageContextProvider = ({ children }: { children: ReactNode }) => {
    const [profileState, setProfileState] = useState<any | string>("solutions");
    const [userData, setUserData] = useState<any | IUserStatistics>();
    const [isCurrentUser, setIsCurrentUser] = useState<any | boolean>();

    return (
        <ProfilePageContext.Provider
            value={{ profileState, userData, isCurrentUser, setProfileState, setUserData, setIsCurrentUser }}
        >
            {children}
        </ProfilePageContext.Provider>
    );
};

export default ProfilePageContextProvider;
