import React, { useContext, Fragment } from "react";
import styled from "styled-components";
import { SolutionContext } from "../context/SolutionContextProvider";

const StyledImputWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
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
                    <div className="select">
                        <select
                            onChange={(event) => changeLanguage(event)}
                            defaultValue={language}
                            data-testid="language-dropdown"
                            className="select-text"
                            required
                        >
                            <option value="java">Java</option>
                            <option value="python">Python</option>
                            <option value="javascript">JavaScript</option>
                            <option value="csharp">C#</option>
                        </select>
                        <label className="select-label">Language</label>
                    </div>
                    <div className="select">
                        <select
                            defaultValue={theme}
                            onChange={(event) => changeEditorTheme(event)}
                            data-testid="theme-dropdown"
                            className="select-text"
                            required
                        >
                            <option value="github">Light</option>
                            <option value="monokai">Dark</option>
                        </select>
                        <label className="select-label">Theme</label>
                    </div>
                </Fragment>
            )}
        </StyledImputWrapper>
    );
};

export default EditorImputs;
