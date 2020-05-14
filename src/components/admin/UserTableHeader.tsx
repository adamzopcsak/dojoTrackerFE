import React from "react";
import { HeaderTile } from "../styled-components/Reusables";

const UserTableHeader = ({ onClick }: { onClick: Function }) => {
    return (
        <HeaderTile
            onClick={(e) => {
                onClick(e);
            }}
        >
            <p data-reference="lastName">Name</p>
            <p data-reference="email">Email</p>
            <p data-reference="numOfCompletedDojos">Completed dojos</p>
            <p data-reference="score">Score</p>
            <p data-reference="lastCompleted">Last completed</p>
        </HeaderTile>
    );
};

export default UserTableHeader;
