import React, { useContext, Fragment } from "react";
import RankingTableHeaders from "./RankingTableHeaders";
import RankingTile from "./RankingTile";
import { RankingContext } from "../context/RankingContextProvider";
import { UserDataContext } from "../context/UserDataContextProvider";

const RankingContainer = () => {
    const { ranking, sortData } = useContext(RankingContext);
    const { user } = useContext(UserDataContext);

    const sortOnClick = (e: any) => {
        if (e.target.dataset.reference) {
            sortData(e.target.dataset.reference);
        }
        return;
    };

    return (
        <Fragment>
            <RankingTableHeaders onClick={sortOnClick} />
            {ranking &&
                user &&
                ranking.map((stat: any) => {
                    return <RankingTile key={stat.userId} userStats={stat} isCurrentUser={stat.email === user.email} />;
                })}
        </Fragment>
    );
};

export default RankingContainer;
