import React, { useContext } from "react";
import AceEditor from "react-ace";
import styled from "styled-components";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import { SolutionEditorContext } from "../../context/SolutionEditorContextProvider";

const StyledEditorWrapper = styled.div`
    display: flex;
    width: 60%;
    height: auto;
    margin: 0 3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & button {
        margin-top: 1rem;
    }

    & .editor-window {
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

interface Props {
    isComplete: boolean;
}

const SolutionEditor = (props: Props) => {
    const { solution, language, theme, updateSolution } = useContext(SolutionEditorContext);

    const changeTextInEditor = (newValue: string) => {
        updateSolution(newValue);
    };

    return (
        <StyledEditorWrapper id="solution-editor-window">
            <AceEditor
                className="editor-window"
                width="100%"
                style={{ borderRadius: "10px" }}
                placeholder="Copy or type your solution here, then press save. DO NOT FORGET TO PRESS SAVE!!44!4"
                defaultValue={""}
                mode={language}
                theme={theme}
                name={`solution`}
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
        </StyledEditorWrapper>
    );
};

export default SolutionEditor;
