import React from "react";
import { useHistory } from "react-router-dom";
import { EmptyButton, CenteredContainer } from "../styled-components/Reusables";

const NoAccess = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <CenteredContainer>
            <h3>You have no access to view this page</h3>
            <EmptyButton onClick={goBack}>Back</EmptyButton>
        </CenteredContainer>
    );
};

export default NoAccess;
