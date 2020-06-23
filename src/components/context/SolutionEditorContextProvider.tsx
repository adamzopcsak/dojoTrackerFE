import React, { createContext, ReactNode, useState, useEffect, useCallback, useContext } from "react";
import { IDojoSolution } from "../../static/util/interfaces";
import { AxiosResponse } from "axios";
import axios from "../../static/util/axiosConfig";
import { LoginContext } from "./LoginContextProvider";
import { UserDataContext } from "./UserDataContextProvider";

interface ContextStateProp {
    solution: any | string;
    language: any | string;
    theme: any | string;
    dojoId: any | string;
    setLanguage: Function;
    setTheme: Function;
    updateSolution: Function;
    postSolution: Function;
    setDojoId: Function;
    deleteSolution: Function;
}

export const SolutionEditorContext = createContext({} as ContextStateProp);

const SolutionEditorContextProvider = ({ children }: { children: ReactNode }) => {
    const [solution, setSolution] = useState<any | string>();
    const [dojoId, setDojoId] = useState<any | string>();
    const [language, setLanguage] = useState<string>();
    const [theme, setTheme] = useState<string>();

    const { isLoggedIn } = useContext(LoginContext);
    const { user } = useContext(UserDataContext);

    useEffect(() => {
        if (user && isLoggedIn === true) {
            axios
                .get(`/api/solutions/${dojoId}?&language=${language}`)
                .then((response: AxiosResponse<IDojoSolution>) => {
                    setSolution(response.data.code);
                    setTheme(user.preferredEditorTheme !== null ? user.preferredEditorTheme : "monokai");
                    setLanguage(user.preferredLanguage !== null ? user.preferredLanguage : "python");
                });
        }
    }, [isLoggedIn, language, dojoId, user]);

    const postSolution = () => {
        const solutiontoPost = {
            code: solution,
            dojoId: parseInt(dojoId),
            language: language,
        };

        axios.post("/api/solutions", solutiontoPost).catch((error) => console.log(error));
    };

    const updateSolution = useCallback(
        (s: string) => {
            setSolution(s);
        },
        [setSolution]
    );

    const deleteSolution = (dojoId: string, language: string) => {
        axios.delete(`/api/solutions/delete?dojoId=${parseInt(dojoId)}&language=${language}`);
    };

    return (
        <SolutionEditorContext.Provider
            value={{
                solution,
                language,
                theme,
                dojoId,
                updateSolution,
                postSolution,
                setDojoId,
                setTheme,
                setLanguage,
                deleteSolution,
            }}
        >
            {children}
        </SolutionEditorContext.Provider>
    );
};

export default SolutionEditorContextProvider;
