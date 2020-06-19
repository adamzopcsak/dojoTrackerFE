import React from "react";
import { HeaderTile } from "../styled-components/Reusables";

const RankingTableHeaders = ({ onClick }: { onClick: Function }) => {
    return (
        <HeaderTile
            onClick={(e) => {
                onClick(e);
            }}
        >
            <p data-reference="rank" id="rank-sort-btn">
                Rank
            </p>
            <p data-reference="lastName" id="name-sort-btn">
                Name
            </p>
            <p data-reference="numOfCompletedDojos" id="numberofdojos-sort-btn">
                Completed dojos
            </p>
            <p data-reference="score" id="score-sort-btn">
                Score
            </p>
        </HeaderTile>
    );
};

export default RankingTableHeaders;
