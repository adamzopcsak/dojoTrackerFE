import React from "react";
import { HeaderTile } from "../styled-components/Reusables";

const DojoTableHeader = ({ onClick }: { onClick: Function }) => {
    return (
        <HeaderTile
            onClick={(event) => {
                onClick(event);
            }}
        >
            <p data-reference="name">Dojo</p>
            <p data-reference="difficulty">Difficulty</p>
            <p data-reference="numOfUsersSolved">Number of users</p>
            <p>Most frequent language</p>
            <p>Least frequent language</p>
        </HeaderTile>
    );
};

export default DojoTableHeader;
