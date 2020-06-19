import React from "react";
import { EmptyButton, CenteredContainer } from "../styled-components/Reusables";
import { useHistory } from "react-router-dom";

interface Props {}

const ReportSuccess = (props: Props) => {
    const history = useHistory();

    const goNew = () => {
        history.push("/report");
    };

    const goBack = () => {
        history.push("/");
    };

    return (
        <CenteredContainer>
            <h3>
                Thank you for sending us this report. We have notified the dev team and hopefully it will be resolved in
                no time!
            </h3>
            <div>
                <EmptyButton onClick={goNew} id="post-new-issue-btn">
                    Report another
                </EmptyButton>
                <EmptyButton onClick={goBack} id="back-to-landingpage-btn">
                    Home
                </EmptyButton>
            </div>
        </CenteredContainer>
    );
};

export default ReportSuccess;
