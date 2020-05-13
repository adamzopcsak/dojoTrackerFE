import React from "react";
import { IUserStatistics } from "../../static/util/interfaces";
import { DataTile } from "../styled-components/Reusables";

const UserStatTile = ({ userStats }: { userStats: IUserStatistics }) => {
    const date = new Date(Date.parse(userStats.lastCompleted));

    const stringifiedDate =
        date.getFullYear() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getUTCDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes();

    const numberOfDojosCompleted = ((): number => {
        return userStats.completedDojoIds.length;
    })();

    const redirectToEmail = () => {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${userStats.email}`, "_blank");
    };

    console.log(userStats);

    return (
        <DataTile>
            <p>
                {userStats.firstName} {userStats.lastName}
            </p>
            <p onClick={redirectToEmail}>{userStats.email}</p>
            <p>{numberOfDojosCompleted}</p>
            <p>{userStats.score}</p>
            <p>{stringifiedDate}</p>
        </DataTile>
    );
};

export default UserStatTile;
