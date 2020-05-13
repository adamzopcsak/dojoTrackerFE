import React, { useContext, Fragment } from "react";
import styled from "styled-components";
import { SolutionContext } from "../context/SolutionContextProvider";

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
    const { language, theme, setTheme, setLanguage } = useContext(SolutionContext);

    const changeLanguage = (event: any) => {
        setLanguage(event.target.value);
    };

    const changeEditorTheme = (event: any) => {
        setTheme(event.target.value);
    };

    return (
        <StyledImputWrapper>
            {language && theme && (
                <Fragment>
                    <select
                        defaultValue={language}
                        onChange={(event) => changeLanguage(event)}
                        data-testid="language-dropdown"
                    >
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="javascript">JavaScript</option>
                        <option value="csharp">C#</option>
                    </select>
                    <select
                        defaultValue={theme}
                        onChange={(event) => changeEditorTheme(event)}
                        data-testid="theme-dropdown"
                    >
                        <option value="github">Light</option>
                        <option value="monokai">Dark</option>
                    </select>
                </Fragment>
            )}
        </StyledImputWrapper>
    );
};

export default EditorImputs;
