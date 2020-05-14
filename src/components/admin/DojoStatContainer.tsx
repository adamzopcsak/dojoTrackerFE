import React, { useContext, Fragment } from "react";
import { ContainerWithRows } from "../styled-components/Reusables";
import { IDojoStatistics } from "../../static/util/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { DojoStatContext } from "../context/DojoStatContextProvider";
import DojoStatTile from "./DojoStatTile";
import DojoTableHeader from "./DojoTableHeader";

interface Props {}

const DojoStatContainer = (props: Props) => {
    const { dojoStats, isHidden, setIsHidden, sortData } = useContext(DojoStatContext);

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
                    Dojos
                    <span>
                        <FontAwesomeIcon icon={isHidden ? faChevronDown : faChevronUp} size="lg" />
                    </span>
                </h3>
            </div>
            <ContainerWithRows>
                {!isHidden && (
                    <Fragment>
                        <DojoTableHeader onClick={(e: any) => sortOnClick(e)} />
                        {dojoStats &&
                            dojoStats.map((stat: IDojoStatistics) => {
                                return <DojoStatTile key={stat.id} dojoStats={stat} />;
                            })}
                    </Fragment>
                )}
            </ContainerWithRows>
        </Fragment>
    );
};

export default DojoStatContainer;
