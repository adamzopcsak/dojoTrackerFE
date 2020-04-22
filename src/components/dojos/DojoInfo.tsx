import React from "react";
import styled from "styled-components";
import { EmptyButton } from "../styled-components/Reusables";

const StyledWrapper = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

interface Props {
    title: string;
    link: string;
}

const DojoInfo = (props: Props) => {
    const goToDojoPage = () => {
        window.open(props.link, "_blank");
    };

    return (
        <StyledWrapper>
            <h1>{props.title}</h1>
            <EmptyButton onClick={goToDojoPage}>Attempt</EmptyButton>
        </StyledWrapper>
    );
};

export default DojoInfo;
