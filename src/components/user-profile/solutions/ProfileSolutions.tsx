import React, { useState, useEffect, Fragment, useContext } from "react";
import styled from "styled-components";
import { IDojoSolution } from "../../../static/util/interfaces";
import axios from "../../../static/util/axiosConfig";
import { AxiosResponse } from "axios";
import { ProfilePageContext } from "../../context/ProfilePageContextProvider";
import ProfileSolutionTile from "./ProfileSolutionTile";
import { normalizeDate } from "../../../static/util/util";
import { sortAscByValue, sortDescByValue } from "../../../static/util/sort";
import ProfileSolutionHeaders from "./ProfileSolutionHeader";

const StyledProfileData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 75vh;
    min-width: 75%;
    margin: 0 0 0 1rem;

    h3 {
        color: #dc3545;
    }
`;

interface Props {}

const ProfileSolutions = (props: Props) => {
    const { userData } = useContext(ProfilePageContext);

    const [userSolutions, setUserSolutions] = useState<any | IDojoSolution[]>();
    const [isDesc, setIsDesc] = useState<boolean>(true);

    useEffect(() => {
        axios.get(`/api/solutions/user/${userData.id}`).then((response: AxiosResponse<IDojoSolution[]>) => {
            response.data.forEach((solution: IDojoSolution) => {
                solution.submissionDate = normalizeDate(solution.submissionDate);
            });
            setUserSolutions(response.data.sort(sortDescByValue("submissionDate")));
        });
    }, [userData.id]);

    const sortData = (value: string) => {
        isDesc
            ? setUserSolutions(userSolutions.sort(sortAscByValue(value)))
            : setUserSolutions(userSolutions.sort(sortDescByValue(value)));

        setIsDesc(!isDesc);
    };

    const sortOnClick = (e: any) => {
        if (e.target.dataset.reference) {
            sortData(e.target.dataset.reference);
        }
        return;
    };

    return (
        <StyledProfileData>
            {userData && (
                <Fragment>
                    <h3 id="profile-solutions-title">Completed dojos</h3>
                    <ProfileSolutionHeaders
                        onClick={(event: any) => {
                            sortOnClick(event);
                        }}
                    />
                    {userSolutions &&
                        userSolutions.map((solution: IDojoSolution) => {
                            return <ProfileSolutionTile key={solution.id} solution={solution} />;
                        })}
                </Fragment>
            )}
        </StyledProfileData>
    );
};

export default ProfileSolutions;
