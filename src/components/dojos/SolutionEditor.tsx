import React, { useState, useRef, RefObject, MutableRefObject, useContext, useEffect } from "react";
import AceEditor from "react-ace";
import styled from "styled-components";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import ReactAce from "react-ace/lib/ace";
import EditorImputs from "./EditorImputs";
import { SolutionLanguageContext } from "../context/SolutionLanguageProvider";
import { EditorThemeContext } from "../context/EditorThemeProvider";

const StyledEditorWrapper = styled.div`
    display: flex;
    width: 40%;
    height: auto;
    padding: 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

interface Props {
    userSolution?: string;
    language?: string;
    dojoId: number;
}

const SolutionEditor = (props: Props) => {
    const [language, setLanguage] = useContext(SolutionLanguageContext);
    const [editorTheme, setEditorTheme] = useContext(EditorThemeContext);

    let solution = "";

    const changeTextInEditor = (newValue: string) => {
        solution = newValue;
    };

    const setInitialSolutionLanguage = () => {
        return props.language ? props.language : "python";
    };

    useEffect(() => {
        setLanguage(setInitialSolutionLanguage);
    }, []);

    return (
        <StyledEditorWrapper>
            <EditorImputs />
            <AceEditor
                width="100%"
                placeholder="Copy or type your solution here, then press save. DO NOT FORGET TO PRESS SAVE!!44!4"
                defaultValue={props.userSolution ? props.userSolution : ""}
                mode={language}
                theme={editorTheme}
                name={`${props.dojoId}`}
                onChange={(value: string) => changeTextInEditor(value)}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={``}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
            />
        </StyledEditorWrapper>
    );
};

export default SolutionEditor;
