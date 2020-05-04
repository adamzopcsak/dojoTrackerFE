import React, { createContext, useState, ReactNode } from "react";

interface ContextStateProp {
    editorTheme: string;
    setEditorTheme: Function;
}

export const EditorThemeContext = createContext<ContextStateProp>({} as ContextStateProp);

const EditorThemeProvider = ({ children }: { children: ReactNode }) => {
    const [editorTheme, setEditorTheme] = useState("monokai");

    return (
        <EditorThemeContext.Provider value={{ editorTheme, setEditorTheme }}>{children}</EditorThemeContext.Provider>
    );
};

export default EditorThemeProvider;
