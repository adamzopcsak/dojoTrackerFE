import React from "react";
import { IDojoStatistics } from "../../static/util/interfaces";
import { DataTile } from "../styled-components/Reusables";
import { convertRatioToPercent, capitalize } from "../../static/util/calc";

const DojoStatTile = ({ dojoStats }: { dojoStats: IDojoStatistics }) => {
    const leastsolvedPerc = convertRatioToPercent(Object.values(dojoStats.leastFrequentlySolvedInLanguage)[0]);
    const mostSolvedPerc = convertRatioToPercent(Object.values(dojoStats.mostFrequentlySolvedInLanguage)[0]);
    const capitalizedMostSolved = capitalize(Object.keys(dojoStats.mostFrequentlySolvedInLanguage)[0]);
    const capitalizedLeastSolved = capitalize(Object.keys(dojoStats.leastFrequentlySolvedInLanguage)[0]);

    return (
        <DataTile>
            <p>{dojoStats.name}</p>
            <p>{dojoStats.difficulty}</p>
            <p>{dojoStats.numOfUsersSolved}</p>
            <p>
                {capitalizedMostSolved} ({mostSolvedPerc}%)
            </p>
            <p>
                {capitalizedLeastSolved} ({leastsolvedPerc}%)
            </p>
        </DataTile>
    );
};

export default DojoStatTile;
