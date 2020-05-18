import React from "react";
import { useHistory } from "react-router-dom";
import { EmptyButton, Container } from "../styled-components/Reusables";
import styled from "styled-components";

const CustomContainer = styled(Container)`
    & button {
        margin: 1rem 2rem;
    }
`;
const NoAccess = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <CustomContainer>
            <h3>You have no access to view this page</h3>
            <EmptyButton onClick={goBack}>Back</EmptyButton>
        </CustomContainer>
    );
};

export default NoAccess;
