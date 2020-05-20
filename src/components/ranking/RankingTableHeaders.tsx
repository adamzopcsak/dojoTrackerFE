import React from "react";
import { HeaderTile } from "../styled-components/Reusables";

const RankingTableHeaders = ({ onClick }: { onClick: Function }) => {
    return (
        <HeaderTile
            onClick={(e) => {
                onClick(e);
            }}
        >
            <p data-reference="rank">Rank</p>
            <p data-reference="lastName">Name</p>
            <p data-reference="numOfCompletedDojos">Completed dojos</p>
            <p data-reference="score">Score</p>
        </HeaderTile>
    );
};

export default RankingTableHeaders;
