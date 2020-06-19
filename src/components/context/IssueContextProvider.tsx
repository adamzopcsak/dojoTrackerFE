import React, { ReactNode, createContext } from "react";
import axios from "../../static/util/axiosConfig";

interface ContextStateProp {
    reportIssue: Function;
}

export const IssueContext = createContext<ContextStateProp>({} as ContextStateProp);

const IssueContextProvider = ({ children }: { children: ReactNode }) => {
    const reportIssue = (issue: any) => {
        axios.post("/api/issue", issue).catch((error) => console.log(error));
    };

    return <IssueContext.Provider value={{ reportIssue }}>{children}</IssueContext.Provider>;
};

export default IssueContextProvider;
