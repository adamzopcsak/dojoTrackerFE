import React from "react";
import styled from "styled-components";
import { Container, EmptyButton } from "../styled-components/Reusables";
import { useHistory } from "react-router-dom";

const CustomContainer = styled(Container)`
    & button {
        margin: 1rem 2rem;
    }
`;

const UnexpectedError = () => {
    const history = useHistory();

    const goBack = () => {
        history.push("/");
    };

    return (
        <CustomContainer>
            <h3>An unexpected error has occured, please try again later</h3>
            <EmptyButton onClick={goBack}>Back</EmptyButton>
        </CustomContainer>
    );
};

export default UnexpectedError;
