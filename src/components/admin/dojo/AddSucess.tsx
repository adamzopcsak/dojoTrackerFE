import React from "react";
import { useHistory } from "react-router-dom";
import { EmptyButton, Container } from "../../styled-components/Reusables";
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

interface Props {}

const AddSucess = (props: Props) => {
    const history = useHistory();

    const goNew = () => {
        history.push("admin/new-dojo");
    };

    const goBack = () => {
        history.push("/");
    };

    return (
        <SuccessContainer>
            <h3>Congrats, you have sucessfully saved a new dojo</h3>
            <div>
                <EmptyButton onClick={goNew}>Add another</EmptyButton>
                <EmptyButton onClick={goBack}>Home</EmptyButton>
            </div>
        </SuccessContainer>
    );
};

export default AddSucess;
