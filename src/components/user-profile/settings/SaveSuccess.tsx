import React from "react";
import styled from "styled-components";
import { Container, EmptyButton } from "../../styled-components/Reusables";
import { useHistory } from "react-router-dom";

const SuccessContainer = styled(Container)`
    text-align: center;
    justify-content: center;

    & span {
        color: #dc3545;
    }

    & button {
        margin: 1rem 2rem;
    }
`;

const SaveSuccess = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <SuccessContainer>
            <h3>Profile updated sucessfully.</h3>
            <div>
                <EmptyButton onClick={goBack} id="back-toprofile-btn">
                    Back
                </EmptyButton>
            </div>
        </SuccessContainer>
    );
};

export default SaveSuccess;
