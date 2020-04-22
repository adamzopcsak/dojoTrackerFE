import React, { createContext, useState } from "react";

export const DojoContext = createContext();

const DojoContextProvider = (props) => {
    const [dojos, setDojos] = useState();

    return <DojoContext.Provider value={[dojos, setDojos]}>{props.children}</DojoContext.Provider>;
};

export default DojoContextProvider;
