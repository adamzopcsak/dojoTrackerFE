import React, { createContext, useState } from "react";

export const SolutionLanguageContext = createContext();

const SolutionLanguageProvider = (props) => {
    const [language, setLanguage] = useState();

    return (
        <SolutionLanguageContext.Provider value={[language, setLanguage]}>
            {props.children}
        </SolutionLanguageContext.Provider>
    );
};

export default SolutionLanguageProvider;
