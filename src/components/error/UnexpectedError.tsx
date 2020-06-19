import React from "react";
import { EmptyButton, CenteredContainer } from "../styled-components/Reusables";
import { useHistory } from "react-router-dom";

const UnexpectedError = () => {
    const history = useHistory();

    const goBack = () => {
        history.push("/");
    };

    return (
        <CenteredContainer>
            <h3>An unexpected error has occured, please try again later</h3>
            <EmptyButton onClick={goBack} id={"goback-btn"}>Back</EmptyButton>
        </CenteredContainer>
    );
};

export default UnexpectedError;
