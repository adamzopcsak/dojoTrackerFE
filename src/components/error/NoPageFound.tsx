import React from "react";
import { useHistory } from "react-router-dom";
import { EmptyButton, CenteredContainer } from "../styled-components/Reusables";

const NoPageFound = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <CenteredContainer>
            <h3>The page you are looking for does not exist or have been removed.</h3>
            <EmptyButton onClick={goBack}>Back</EmptyButton>
        </CenteredContainer>
    );
};

export default NoPageFound;
