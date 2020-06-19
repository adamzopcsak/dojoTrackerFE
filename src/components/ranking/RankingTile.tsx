import React from "react";
import { DataTile } from "../styled-components/Reusables";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CustomDataTile = styled(DataTile)`
    background-color: ${(props: { isCurrentUser: boolean }) =>
        props.isCurrentUser ? "rgba(76, 152, 203, 0.4)" : "inherit"};
`;

const RankingTile = ({ userStats, isCurrentUser }: { userStats: any; isCurrentUser: boolean }) => {
    const history = useHistory();

    const redirectToUser = () => {
        history.push({
            pathname: `/user/${userStats.firstName} ${userStats.lastName}`,
            state: { userId: userStats.userId },
        });
    };

    return (
        <CustomDataTile
            isCurrentUser={isCurrentUser}
            onClick={() => {
                redirectToUser();
            }}
        >
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
