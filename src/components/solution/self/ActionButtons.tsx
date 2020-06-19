import React, { useContext, Fragment } from "react";
import styled from "styled-components";
import { EmptyButton } from "../../styled-components/Reusables";
import { useHistory } from "react-router-dom";
import { SolutionEditorContext } from "../../context/SolutionEditorContextProvider";

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
    title: string;
    isDone: boolean;
}

const ActionButtons = (props: Props) => {
    const history = useHistory();

    const { dojoId, language, solution } = useContext(SolutionEditorContext);

    const goToDojoPage = () => {
        window.open(props.link, "_blank");
    };

    const goToSolutions = () => {
        history.push(`/solutions/${dojoId}`);
    };

    const confirmDelete = () => {
        history.push({
            pathname: `/solutions/delete/${dojoId}`,
            state: { id: dojoId, language: language, title: props.title },
        });
    };

    return (
        <StyledWrapper>
            <EmptyButton onClick={goToDojoPage} id="dojo-link-btn">
                Attempt
            </EmptyButton>
            <EmptyButton onClick={() => props.onSave()} id="save-solution-btn">
                Save
            </EmptyButton>

            <Fragment>
                <EmptyButton
                    onClick={() => confirmDelete()}
                    id="delete-solution-btn"
                    danger
                    disabled={solution === undefined}
                >
                    Delete
                </EmptyButton>
                <EmptyButton onClick={() => goToSolutions()} id="unlock-solutions-btn" disabled={!props.isDone}>
                    Unlock solutions
                </EmptyButton>
            </Fragment>
        </StyledWrapper>
    );
};

export default ActionButtons;
