import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { EmptyButton, CenteredContainer } from "../../styled-components/Reusables";
import { SolutionEditorContext } from "../../context/SolutionEditorContextProvider";

const ConfirmDelete = () => {
    const history = useHistory();
    const { deleteSolution } = useContext(SolutionEditorContext);
    const location = useLocation();

    const goBack = () => {
        history.push("/dojos");
    };

    const confirmDelete = () => {
        deleteSolution((location.state as any).id, (location.state as any).language);
        goBack();
    };

    return (
        <CenteredContainer>
            <h1>Warning!</h1>
            <h3>
                You are about to permanently delete your solution for {(location.state as any).title} in{" "}
                {(location.state as any).language} language
            </h3>
            <div>
                <EmptyButton onClick={goBack} id={"goback-btn"}>
                    Cancel
                </EmptyButton>
                <EmptyButton onClick={() => confirmDelete()} id={"goback-btn"} danger>
                    Delete
                </EmptyButton>
            </div>
        </CenteredContainer>
    );
};

export default ConfirmDelete;
