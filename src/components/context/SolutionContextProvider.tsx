import React, { createContext, ReactNode, useState, useContext, useEffect } from "react";
import { IDojoSolution } from "../../static/util/interfaces";
import { AxiosResponse } from "axios";
import { SolutionLanguageContext } from "./SolutionLanguageProvider";
import axios from "../../static/util/axiosConfig";

interface ContextStateProp {
    solution: any | string;
    setSolution: Function;
    postSolution: Function;
    setDojoId: Function;
}

export const SolutionContext = createContext({} as ContextStateProp);

const SolutionContextProvider = ({ children }: { children: ReactNode }) => {
    const [solution, setSolution] = useState<any | string>();
    const [dojoId, setDojoId] = useState<any | string>();
    const { language } = useContext(SolutionLanguageContext);

    useEffect(() => {
        axios.get(`/api/solutions/${dojoId}?&language=${language}`).then((response: AxiosResponse<IDojoSolution>) => {
            setSolution(response.data.code);
        });
    }, [language, dojoId]);

    const postSolution = () => {
        const solutiontoPost = {
            code: solution,
            dojoId: parseInt(dojoId),
            userId: "0",
            language: language,
        };

        axios.post("/api/solutions", solutiontoPost).catch((error) => console.log(error));
    };

    return (
        <SolutionContext.Provider value={{ solution, setSolution, postSolution, setDojoId }}>
            {children}
        </SolutionContext.Provider>
    );
};

export default SolutionContextProvider;
