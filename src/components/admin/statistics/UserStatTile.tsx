import React from "react";
import { IUserStatistics } from "../../../static/util/interfaces";
import { DataTile } from "../../styled-components/Reusables";
import { stringifiedDate } from "../../../static/util/util";

const UserStatTile = ({ userStats }: { userStats: IUserStatistics }) => {
    const date = userStats.lastCompleted;

    const redirectToEmail = () => {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userStats.email}`, "_blank");
    };

    return (
        <DataTile>
            <p>
                {userStats.firstName} {userStats.lastName}
            </p>
            <p onClick={redirectToEmail}>{userStats.email}</p>
            <p>{userStats.numOfCompletedDojos}</p>
            <p>{userStats.score}</p>
            <p>{stringifiedDate(date)}</p>
        </DataTile>
    );
};

export default UserStatTile;
