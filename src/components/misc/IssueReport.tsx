import React from "react";
import { DataTile, EmptyButton } from "../styled-components/Reusables";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledTile = styled.div`
    width: 100%;
    height: 4rem;
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
`;

interface Props {}

const IssueReport = (props: Props) => {
    const history = useHistory();

    const redirect = () => {
        history.push("/report");
    };

    return (
        <StyledTile>
            <EmptyButton danger onClick={() => redirect()} id="report-issue-btn">
                Report an issue
            </EmptyButton>
        </StyledTile>
    );
};

export default IssueReport;
