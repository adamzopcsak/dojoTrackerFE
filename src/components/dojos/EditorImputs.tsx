import React, { RefObject, useContext } from "react";
import ReactAce from "react-ace/lib/ace";
import styled from "styled-components";
import { SolutionLanguageContext } from "../context/SolutionLanguageProvider";
import { EditorThemeContext } from "../context/EditorThemeProvider";

const StyledImputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    & select {
        margin: 3rem;
    }
`;

interface Props {}

const EditorImputs = (props: Props) => {
    const [language, setLanguage] = useContext(SolutionLanguageContext);
    const [editorTheme, setEditorTheme] = useContext(EditorThemeContext);

    const changeLanguage = (event: any) => {
        setLanguage(event.target.value);
    };

    const changeEditorTheme = (event: any) => {
        setEditorTheme(event.target.value);
    };

    return (
        <StyledImputWrapper>
            <select defaultValue="python" onChange={(event) => changeLanguage(event)}>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="csharp">C#</option>
            </select>
            <select defaultValue="monokai" onChange={(event) => changeEditorTheme(event)}>
                <option value="github">Light</option>
                <option value="monokai">Dark</option>
            </select>
        </StyledImputWrapper>
    );
};

export default EditorImputs;
