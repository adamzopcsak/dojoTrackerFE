import React, { useContext, useEffect, useState, Fragment } from "react";
import { DataTile } from "../../styled-components/Reusables";
import { DojoContext } from "../../context/DojoContextProvider";
import { IDojoSolution } from "../../../static/util/interfaces";
import styled from "styled-components";
import { stringifiedDate } from "../../../static/util/util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SolutionCard from "../../solution/other_users/SolutionCard";

const StyledSolutionCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .arrow {
        color: #dc3545;
    }
`;

interface Props {
    solution: IDojoSolution;
}

const ProfileSolutionTile = (props: Props) => {
    const [dojoTitle, setDojoTitle] = useState<any | string>();
    const [isHidden, setIsHidden] = useState<boolean>(true);

    const { getTitleById } = useContext(DojoContext);

    useEffect(() => {
        (async function getDojo() {
            const dojoTitle = await getTitleById(props.solution.dojoId);
            setDojoTitle(dojoTitle);
        })();
    }, []);

    return (
        <StyledSolutionCard>
            <DataTile
                onClick={() => {
                    setIsHidden(!isHidden);
                }}
                id={`solution-card-${props.solution.id}`}
            >
                {dojoTitle && (
                    <Fragment>
                        <p>{dojoTitle}</p>
                        <p>{props.solution.language}</p>
                        <p>{stringifiedDate(props.solution.submissionDate)}</p>
                        <p className="arrow">
                            <FontAwesomeIcon
                                icon={isHidden ? faChevronDown : faChevronUp}
                                size="lg"
                                data-testid="solution-open-arrow"
                            />
                        </p>
                    </Fragment>
                )}
            </DataTile>
            {!isHidden && <SolutionCard solution={props.solution.code} language={props.solution.language} />}
        </StyledSolutionCard>
    );
};

export default ProfileSolutionTile;
