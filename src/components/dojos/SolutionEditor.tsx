import React, { useState, useRef, RefObject, MutableRefObject, useContext, useEffect } from "react";
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
import axios, { AxiosResponse } from "axios";
import { UserContext } from "../context/UserContextProvider";
import { IDojoSolution } from "../../static/util/interfaces";
import { EmptyButton } from "../styled-components/Reusables";

const StyledEditorWrapper = styled.div`
    display: flex;
    width: 40%;
    height: auto;
    padding: 3rem;
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
    dojoId: number;
    isComplete: boolean;
}

const SolutionEditor = (props: Props) => {
    const [language, setLanguage] = useContext(SolutionLanguageContext);
    const [editorTheme, setEditorTheme] = useContext(EditorThemeContext);
    const [user, setUser] = useContext(UserContext);

    const [userSolution, setUserSolution] = useState<null | string>();

    let solution = "";

    const changeTextInEditor = (newValue: string) => {
        solution = newValue;
    };
    useEffect(() => {
        props.isComplete ? getSolution() : setDefaultValues();
    }, []);

    const getSolution = () => {
        axios
            .get(`http://localhost:5000/api/solutions/${props.dojoId}?userId=${user.id}`)
            .then((response: AxiosResponse<IDojoSolution>) => {
                setLanguage(response.data.language);
                setUserSolution(response.data.code);
            });
    };

    const setDefaultValues = () => {
        setLanguage("python");
        setUserSolution("");
    };

    const isSolutionEmpty = (): boolean => {
        return solution === "" || solution === null;
    };

    const saveSolution = () => {
        if (isSolutionEmpty()) {
            return;
        }

        axios
            .post("http://localhost:5000/api/solutions", {
                userId: user.id,
                dojoId: props.dojoId,
                code: solution,
                language: language,
            })
            .then((response) => {});
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
                name={`${props.dojoId}`}
                onChange={(value: string) => changeTextInEditor(value)}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={userSolution ? userSolution : ""}
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
