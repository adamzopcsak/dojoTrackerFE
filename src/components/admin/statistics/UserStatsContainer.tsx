import React, { useContext, Fragment } from "react";
import { ContainerWithRows } from "../../styled-components/Reusables";
import { IUserStatistics } from "../../../static/util/interfaces";
import UserStatTile from "./UserStatTile";
import { UserStatContext } from "../../context/UserStatContextProvider";
import UserTableHeader from "./UserTableHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Props {}

const UserStatsContainer = (props: Props) => {
    const { userStats, isHidden, setIsHidden, sortData } = useContext(UserStatContext);

    const sortOnClick = (e: any) => {
        if (e.target.dataset.reference) {
            sortData(e.target.dataset.reference);
        }
        return;
    };

    return (
        <Fragment>
            <div>
                <h3
                    onClick={() => {
                        setIsHidden(!isHidden);
                    }}
                >
                    Users
                    <span>
                        <FontAwesomeIcon icon={isHidden ? faChevronDown : faChevronUp} size="lg" />
                    </span>
                </h3>
            </div>
            <ContainerWithRows>
                {!isHidden && (
                    <Fragment>
                        <UserTableHeader onClick={(e: any) => sortOnClick(e)} />
                        {userStats &&
                            userStats.map((stat: IUserStatistics) => {
                                return <UserStatTile key={stat.userId} userStats={stat} />;
                            })}
                    </Fragment>
                )}
            </ContainerWithRows>
        </Fragment>
    );
};

export default UserStatsContainer;
