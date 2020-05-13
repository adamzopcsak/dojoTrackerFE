import React, { useContext } from "react";
import { ContainerWithRows } from "../styled-components/Reusables";
import { IUserStatistics } from "../../static/util/interfaces";
import UserStatTile from "./UserStatTile";
import { UserStatContext } from "../context/UserStatContextProvider";
import UserTableHeader from "./UserTableHeader";

interface Props {}

const UserStatsContainer = (props: Props) => {
    const { userStats } = useContext(UserStatContext);

    return (
        <ContainerWithRows>
            <UserTableHeader />
            {userStats &&
                userStats.map((stat: IUserStatistics) => {
                    return <UserStatTile key={stat.userId} userStats={stat} />;
                })}
        </ContainerWithRows>
    );
};

export default UserStatsContainer;
