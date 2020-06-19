import React from "react";
import { DataTile, EmptyButton } from "../styled-components/Reusables";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledTile = styled.div`
    margin: 4rem 0;
    width: 100%;
    position: sticky;
    display: flex;
    align-items: center;
    justify-content: center;
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
