import React, { useContext } from "react";
import AceEditor from "react-ace";
import styled from "styled-components";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import EditorImputs from "./EditorImputs";
import { SolutionLanguageContext } from "../context/SolutionLanguageProvider";
import { EditorThemeContext } from "../context/EditorThemeProvider";
import { EmptyButton } from "../styled-components/Reusables";
import { SolutionContext } from "../context/SolutionContextProvider";

const StyledEditorWrapper = styled.div`
    display: flex;
    width: 40%;
    height: auto;
    margin: 0 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & button {
        margin-top: 1rem;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

interface Props {
    isComplete: boolean;
    markAsComplete: Function;
}

const SolutionEditor = (props: Props) => {
    const { language } = useContext(SolutionLanguageContext);
    const { editorTheme } = useContext(EditorThemeContext);

    const { solution, setSolution, postSolution } = useContext(SolutionContext);

    const changeTextInEditor = (newValue: string) => {
        setSolution(newValue);
    };

    const saveSolution = () => {
        postSolution();
        props.markAsComplete();
    };

    return (
        <StyledEditorWrapper>
            <EditorImputs />
            <AceEditor
                width="100%"
                placeholder="Copy or type your solution here, then press save. DO NOT FORGET TO PRESS SAVE!!44!4"
                defaultValue={""}
                mode={language}
                theme={editorTheme}
                name={`solutin`}
                onChange={(value: string) => changeTextInEditor(value)}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={solution}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
            />
            <EmptyButton onClick={() => saveSolution()}>Save solution</EmptyButton>
        </StyledEditorWrapper>
    );
};

export default SolutionEditor;
