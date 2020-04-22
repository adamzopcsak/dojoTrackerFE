import React, { createContext, useState } from "react";

export const EditorThemeContext = createContext();

const EditorThemeProvider = (props) => {
    const [editorTheme, setEditorTheme] = useState("monokai");

    return (
        <EditorThemeContext.Provider value={[editorTheme, setEditorTheme]}>
            {props.children}
        </EditorThemeContext.Provider>
    );
};

export default EditorThemeProvider;
