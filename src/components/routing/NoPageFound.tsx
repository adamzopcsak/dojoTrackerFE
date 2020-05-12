import React from "react";
import { useHistory } from "react-router-dom";
import { Container, EmptyButton } from "../styled-components/Reusables";
import styled from "styled-components";

const CustomContainer = styled(Container)`
    & button {
        margin: 1rem 2rem;
    }
`;

const NoPageFound = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <CustomContainer>
            <h3>The page you are looking for does not exist or have been removed.</h3>
            <EmptyButton onClick={goBack}>Back</EmptyButton>
        </CustomContainer>
    );
};

export default NoPageFound;
