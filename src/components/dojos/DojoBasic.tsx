import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { EmptyButton, CustomLink } from "../styled-components/Reusables";
import StatusIndicator from "./StatusIndicator";

const StyledTile = styled.div`
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

const DojoBasic = (props: Props) => {
    const history = useHistory();

    const redirectToDojoSpecific = () => {
        history.push(`/dojos/${props.dojo.id}`);
    };

    const goToDojoPage = () => {
        window.open(props.dojo.url, "_blank");
    };

    const changeStatus = (status: any) => {
        console.log(status);
    };

    return (
        <StyledTile onClick={redirectToDojoSpecific}>
            <p>{props.dojo.title}</p>
            <StatusIndicator isComplete={props.dojo.isDone} onStatusChange={changeStatus} />
            <EmptyButton onClick={goToDojoPage}>Attempt</EmptyButton>
        </StyledTile>
    );
};

export default DojoBasic;
