import React, { createContext, useState, ReactNode } from "react";

interface ContextStateProp {
    language: any | string;
    setLanguage: Function;
}

export const SolutionLanguageContext = createContext<ContextStateProp>({} as ContextStateProp);

const SolutionLanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState("python");

    return (
        <SolutionLanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </SolutionLanguageContext.Provider>
    );
};

export default SolutionLanguageProvider;
