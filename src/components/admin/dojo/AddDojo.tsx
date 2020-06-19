import React, { useState, useContext } from "react";
import { CenteredContainer, EmptyButton, StyledForm } from "../../styled-components/Reusables";
import { DojoContext } from "../../context/DojoContextProvider";

interface Props {}

const AddDojo = (props: Props) => {
    const { addDojo } = useContext(DojoContext);

    const [difficulty, setDifficulty] = useState<number>(1);
    const [title, setTitle] = useState<string>("");
    const [src, setSrc] = useState<string>("");

    const postNewDojo = () => {
        const newDojo = {
            title: title,
            url: src,
            difficulty: difficulty,
            description: "",
        };

        if (areInputsValid()) {
            addDojo(newDojo);
        }
        return;
    };

    const areInputsValid = () => {
        if (difficulty !== null && title !== null && src !== null) {
            return true;
        }

        console.log("fix input");
        return false;
    };

    const discardChanges = () => {
        setDifficulty(1);
        setSrc("");
        setTitle("");
    };

    return (
        <CenteredContainer>
            <StyledForm>
                <h1>Add dojo</h1>
                <input
                    placeholder="Enter title"
                    onChange={(event) => setTitle(event.target.value)}
                    value={title}
                ></input>
                <input placeholder="Enter link" onChange={(event) => setSrc(event.target.value)} value={src}></input>
                <div className="select">
                    <select
                        onChange={(event) => setDifficulty(parseInt(event.target.value))}
                        className="select-text"
                        required
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <label className="select-label">Difficulty</label>
                </div>
                <div>
                    <EmptyButton onClick={() => postNewDojo()}>Add dojo</EmptyButton>
                    <EmptyButton danger onClick={() => discardChanges()}>
                        Clear form
                    </EmptyButton>
                </div>
            </StyledForm>
        </CenteredContainer>
    );
};

export default AddDojo;
