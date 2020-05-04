import React from "react";
import styled from "styled-components";
import { EmptyButton } from "../styled-components/Reusables";
import StatusIndicator from "../dojos/StatusIndicator";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    height: auto;
    font-size: 0.9rem;
    padding: 2rem;
    margin: 0.7rem;
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
        margin: 2rem;
        font-size: 1.2rem;
    }
`;

interface Props {
    title: string;
    link: string;
    isComplete: boolean;
}

const DojoInfo = (props: Props) => {
    const goToDojoPage = () => {
        window.open(props.link, "_blank");
    };

    return (
        <StyledWrapper>
            <h1>{props.title}</h1>

            <StatusIndicator isComplete={props.isComplete} />

            <EmptyButton onClick={goToDojoPage}>Attempt</EmptyButton>
        </StyledWrapper>
    );
};

export default DojoInfo;