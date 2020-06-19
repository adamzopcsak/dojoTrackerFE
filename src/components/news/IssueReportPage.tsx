import React, { useState, useContext } from "react";
import { CenteredContainer, EmptyButton, StyledForm } from "../styled-components/Reusables";
import { title } from "process";
import styled from "styled-components";
import { IssueContext } from "../context/IssueContextProvider";
import { useHistory } from "react-router-dom";

const CustomStyledForm = styled(StyledForm)`
    .select {
        margin: 1rem 0rem !important;
    }

    textarea {
        width: 50%;
        height: 18rem;
        padding: 1rem;
        border: solid 2px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        font-family: inherit;
        font-size: 0.9rem;

        &:focus {
            border-color: #dc3545;
        }
    }
`;

interface Props {}

const IssueReportPage = (props: Props) => {
    const [type, setType] = useState<any | string>();
    const [area, setArea] = useState<any | string>();
    const [issue, setIssue] = useState<any | string>();

    const { reportIssue } = useContext(IssueContext);

    const history = useHistory();

    const submitIssue = () => {
        if (!validateForm()) console.log("Empty");

        let issueToPost = {
            type: type,
            area: area,
            issue: issue,
        };

        reportIssue(issueToPost);

        history.push("/report/success");

        clearForm();
    };

    const clearForm = () => {
        setType(null);
        setArea(null);
        setIssue(null);
    };

    const validateForm = (): boolean => {
        return type && area && issue;
    };

    return (
        <CenteredContainer>
            <CustomStyledForm>
                <h2>Report an issue</h2>

                <div className="select">
                    <select
                        className="select-text"
                        required
                        onChange={(event) => setType(event.target.value)}
                        id="issue-type-dropdown"
                    >
                        <option disabled selected></option>
                        <option value="bug">Bug</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                    <label className="select-label">Select issue type</label>
                </div>
                <div className="select">
                    <select
                        className="select-text"
                        required
                        onChange={(event) => setArea(event.target.value)}
                        id="issue-location-dropdown"
                    >
                        <option disabled selected></option>
                        <option value="dojolist">Dojo list</option>
                        <option value="ranking">Ranking page</option>
                        <option value="profile">Profile page</option>
                        <option value="solutionlist">Solution list page</option>
                        <option value="login">User login</option>
                        <option value="other">Other</option>
                    </select>
                    <label className="select-label">Select location</label>
                </div>
                <textarea
                    placeholder="Please describe your issue"
                    value={issue}
                    id="issue-text-field"
                    onChange={(event) => setIssue(event.target.value)}
                ></textarea>
                <div>
                    <EmptyButton
                        danger
                        onClick={() => {
                            clearForm();
                        }}
                        id="clear-form-btn"
                    >
                        Clear form
                    </EmptyButton>
                    <EmptyButton
                        onClick={() => {
                            submitIssue();
                        }}
                        id="submit-report-btn"
                    >
                        Send
                    </EmptyButton>
                </div>
            </CustomStyledForm>
        </CenteredContainer>
    );
};

export default IssueReportPage;
