import React, { useEffect, useContext, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { UserDataContext } from "../context/UserDataContextProvider";
import { Container, ContainerWithRows } from "../styled-components/Reusables";
import ProfileCard from "./ProfileCard";
import ProfileMenu from "./ProfileMenu";
import ProfileData from "./ProfileData";
import styled from "styled-components";
import ProfileSolutions from "./solutions/ProfileSolutions";
import { ProfilePageContext } from "../context/ProfilePageContextProvider";

const StyledProfilePage = styled(ContainerWithRows)`
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 2rem;
    width: 80%;
    height: 100%;
`;

const SmallContainer = styled(Container)`
    min-width: 10%;
    width: 20%;
`;

interface Props {}

const ProfileContainer = (props: Props) => {
    const { user, getUserDataById } = useContext(UserDataContext);
    const { profileState, userData, setUserData, setIsCurrentUser } = useContext(ProfilePageContext);

    const location = useLocation();
    const requestedUserId = (location.state as any)?.userId;

    useEffect(() => {
        (async function getUserData() {
            if (requestedUserId === user?.id) {
                setUserData(user);
                setIsCurrentUser(true);
            } else {
                const otherUser = await getUserDataById(requestedUserId);
                setUserData(otherUser);
                setIsCurrentUser(false);
            }
        })();
    }, [requestedUserId, user]);

    const PROFILE_COMPONENTS: any = {
        profile: <ProfileData />,
        solutions: <ProfileSolutions />,
        statistics: <ProfileData />,
    };

    return (
        <StyledProfilePage>
            {userData && (
                <Fragment>
                    <SmallContainer>
                        <ProfileCard user={userData} />
                        <ProfileMenu />
                    </SmallContainer>
                    {PROFILE_COMPONENTS[profileState]}
                </Fragment>
            )}
        </StyledProfilePage>
    );
};

export default ProfileContainer;
