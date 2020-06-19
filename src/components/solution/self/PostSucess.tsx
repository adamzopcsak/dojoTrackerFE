import React from "react";
import { Container, EmptyButton } from "../../styled-components/Reusables";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

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

const PostSucess = () => {
    const history = useHistory();
    const location = useLocation();

    const goNew = () => {
        history.push("/dojos");
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <SuccessContainer>
            <h3>
                Congrats, you have sucessfully saved your solution for <span>{(location.state as any)?.title}</span> in{" "}
                <span>{(location.state as any)?.language}</span>.
            </h3>
            <div>
                <EmptyButton onClick={goBack} id="back-todojo-btn">
                    Back to dojo
                </EmptyButton>
                <EmptyButton onClick={goNew} id="back-tolist-btn">
                    Try another
                </EmptyButton>
            </div>
        </SuccessContainer>
    );
};

export default PostSucess;
