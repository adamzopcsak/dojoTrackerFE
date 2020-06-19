import React, { createContext, useState, ReactNode } from "react";
import { IDojoSolution } from "../../static/util/interfaces";
import axios from "../../static/util/axiosConfig";
import { AxiosResponse } from "axios";
import { normalizeDate } from "../../static/util/util";
import { sortAscByValue, sortDescByValue } from "../../static/util/sort";

interface ContextStateProp {
    solutions: any | IDojoSolution[];
    setSolutions: Function;
    getSolutionsByDojoId: Function;
    sortData: Function;
}

export const SolutionContext = createContext({} as ContextStateProp);

const SolutionContextProvider = ({ children }: { children: ReactNode }) => {
    const [solutions, setSolutions] = useState<any | IDojoSolution[]>();
    const [isDesc, setIsDesc] = useState<boolean>(true);

    const getSolutionsByDojoId = (id: string) => {
        const idToNumber = parseInt(id);

        axios.get(`/api/solutions/dojo/${idToNumber}`).then((response: AxiosResponse<IDojoSolution[]>) => {
            response.data.forEach((solution) => {
                solution.submissionDate = normalizeDate(solution.submissionDate);
            });
            setSolutions(response.data.sort(sortDescByValue("submissionDate")));
        });
    };

    const sortData = (value: string) => {
        isDesc
            ? setSolutions(solutions.sort(sortAscByValue(value)))
            : setSolutions(solutions.sort(sortDescByValue(value)));

        setIsDesc(!isDesc);
    };

    return (
        <SolutionContext.Provider value={{ solutions, setSolutions, getSolutionsByDojoId, sortData }}>
            {children}
        </SolutionContext.Provider>
    );
};

export default SolutionContextProvider;
