import React from "react";
import { HeaderTile } from "../styled-components/Reusables";

const UserTableHeader = () => {
    return (
        <HeaderTile>
            <p>Name</p>
            <p>Email</p>
            <p>Completed dojos</p>
            <p>Score</p>
            <p>Last completed</p>
        </HeaderTile>
    );
};

export default UserTableHeader;
