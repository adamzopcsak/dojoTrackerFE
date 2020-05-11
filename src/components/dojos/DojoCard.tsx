import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { EmptyButton } from "../styled-components/Reusables";
import StatusIndicator from "./StatusIndicator";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    height: auto;
    font-size: 0.9rem;
    border: 1px solid gray;
    padding: 2rem;
    margin: 0.7rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
    text-align: center;

    &:hover {
        cursor: pointer;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    }

    & p,
    button {
        margin: 2rem;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

interface Props {
    dojo: IBasicDojoInfo;
}

const DojoCard = (props: Props) => {
    const history = useHistory();

    const redirect = (event: any): void => {
        event.target.classList.contains("redirect-btn")
            ? window.open(props.dojo.url, "_blank")
            : history.push(`/dojos/${props.dojo.id}`);
    };

    return (
        <StyledCard onClick={(event) => redirect(event)} data-testid="dojocard-container" className="dojo-card">
            <p>{props.dojo.title}</p>
            <StatusIndicator isComplete={props.dojo.isDone} />
            <EmptyButton className="redirect-btn">Attempt</EmptyButton>
        </StyledCard>
    );
};

export default DojoCard;
