import React from "react";
import styled from "styled-components";
import { EmptyButton } from "../styled-components/Reusables";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: auto;
    font-size: 0.9rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        width: 80%;
    }

    & div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    & p,
    button {
        margin: 0.5rem;
    }
`;

interface Props {
    link: string;
    onSave: Function;
}

const ActionButtons = (props: Props) => {
    const goToDojoPage = () => {
        window.open(props.link, "_blank");
    };

    return (
        <StyledWrapper>
            <EmptyButton onClick={goToDojoPage}>Attempt</EmptyButton>
            <EmptyButton onClick={() => props.onSave()}>Save solution</EmptyButton>
        </StyledWrapper>
    );
};

export default ActionButtons;
