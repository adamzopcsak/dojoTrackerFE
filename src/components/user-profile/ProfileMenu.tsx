import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChartBar, faList } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { ProfilePageContext } from "../context/ProfilePageContextProvider";

const StyledProfileMenu = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    text-align: left;
    color: gray;
    width: 100%;
    transition: color 0.5s;
    div {
        padding: 1rem;

        svg {
            margin: 0 0.5rem 0 0;
        }

        &:hover {
            color: #dc3545;
            cursor: pointer;
        }

        &.active {
            color: #dc3545;
        }
    }
`;

interface Props {}

const ProfileMenu = (props: Props) => {
    const { setProfileState, profileState, isCurrentUser } = useContext(ProfilePageContext);

    useEffect(() => {
        let menuElements: HTMLDivElement[] = Array.from(document.querySelectorAll("[data-menureference]"));

        menuElements.forEach((element) =>
            element.dataset.menureference === profileState
                ? element.classList.add("active")
                : element.classList.remove("active")
        );
    }, [profileState]);

    const toggleSelected = (event: any) => {
        if (event?.target?.dataset?.menureference !== undefined) {
            setProfileState(event.target.dataset.menureference);
        }
        return;
    };

    return (
        <StyledProfileMenu
            onClick={(event) => {
                toggleSelected(event);
            }}
        >
            {isCurrentUser && (
                <div data-menureference="profile" id="profile-nav-link">
                    <FontAwesomeIcon icon={faUser} size="1x" data-menureference="profile" />
                    <span data-menureference="profile">Settings</span>
                </div>
            )}

            <div data-menureference="statistics" id="statistics-nav-link">
                <FontAwesomeIcon icon={faChartBar} size="1x" data-menureference="statistics" />
                <span data-menureference="statistics">Statistics</span>
            </div>
            <div data-menureference="solutions" id="solutions-nav-link">
                <FontAwesomeIcon icon={faList} size="1x" data-menureference="solutions" />
                <span data-menureference="solutions">Solutions</span>
            </div>
        </StyledProfileMenu>
    );
};

export default ProfileMenu;
