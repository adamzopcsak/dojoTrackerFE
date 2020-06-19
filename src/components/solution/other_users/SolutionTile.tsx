import React, { useContext, useState, useEffect, Fragment } from "react";
import { DataTile } from "../../styled-components/Reusables";
import { UserDataContext } from "../../context/UserDataContextProvider";
import { IDojoSolution } from "../../../static/util/interfaces";
import { stringifiedDate } from "../../../static/util/util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SolutionCard from "./SolutionCard";
import { useHistory } from "react-router-dom";

const StyledSolutionCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .arrow {
        color: #dc3545;
    }

    .user {
        position: relative;

        &:hover {
            cursor: pointer;
            color: #dc3545;
            font-weight: bold;
        }
    }
`;

interface Props {
    solution: IDojoSolution;
}

const SolutionTile = (props: Props) => {
    const { getUserDataById } = useContext(UserDataContext);
    const [user, setUser] = useState<any>();
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const history = useHistory();

    const date = props.solution.submissionDate;

    useEffect(() => {
        (async function getDojo() {
            const userData = await getUserDataById(props.solution.userId);
            setUser(userData);
        })();
    }, []);

    const redirectToUser = () => {
        history.push({
            pathname: `/user/${user.firstName} ${user.lastName}`,
            state: { userId: user.id },
        });
    };

    return (
        <StyledSolutionCard>
            <DataTile
                onClick={() => {
                    setIsHidden(!isHidden);
                }}
                id={`solution-card-${props.solution.id}`}
            >
                {user && (
                    <Fragment>
                        <p
                            onClick={() => {
                                redirectToUser();
                            }}
                            className="user"
                        >
                            {user.firstName} {user.lastName}
                        </p>
                        <p>{props.solution.language}</p>
                        <p>{stringifiedDate(date)}</p>
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

export default SolutionTile;
