import React from "react";
import { DataTile } from "../styled-components/Reusables";
import styled from "styled-components";

const CustomDataTile = styled(DataTile)`
    background-color: ${(props: { isCurrentUser: boolean }) =>
        props.isCurrentUser ? "rgba(76, 152, 203, 0.4)" : "inherit"};

    &:hover {
        cursor: auto;
        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
    }
`;

const RankingTile = ({ userStats, isCurrentUser }: { userStats: any; isCurrentUser: boolean }) => {
    return (
        <CustomDataTile isCurrentUser={isCurrentUser}>
            <p>{userStats.rank}.</p>
            <p>
                {userStats.firstName} {userStats.lastName}
            </p>
            <p>{userStats.numOfCompletedDojos}</p>
            <p>{userStats.score}</p>
        </CustomDataTile>
    );
};

export default RankingTile;
