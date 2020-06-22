import React, { useContext } from "react";
import { ProfilePageContext } from "../../context/ProfilePageContextProvider";
import styled from "styled-components";
import { StyledProfileContainer, EmptyButton } from "../../styled-components/Reusables";
import ProfileData from "./ProfileData";

const StyledProfileSettings = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: gray;

    .profile-data-div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        margin: 2rem 5rem;
        width: 30%;
    }

    .profile-data-title {
        font-weight: bold;
    }

    .data-edit-cluster {
        display: flex;
        flex-direction: row;
        width: 40%;
        justify-content: space-between;
    }

    svg {
        color: #dc3545;
    }
`;

interface Props {}

const ProfileSettings = (props: Props) => {
    const { userData } = useContext(ProfilePageContext);

    return (
        <StyledProfileContainer>
            <h3>Settings</h3>
            <StyledProfileSettings>
                <ProfileData header="Nickname:" data={userData.nickName} />
                <div className="select">
                    <select
                        className="select-text"
                        required
                        onChange={(event) => {}}
                        id="issue-type-dropdown"
                        defaultValue="  "
                    >
                        <option disabled value=""></option>
                        <option value="bug">Bug</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                    <label className="select-label">Select issue type</label>
                </div>
                <div className="select">
                    <select
                        className="select-text"
                        required
                        onChange={(event) => {}}
                        id="issue-type-dropdown"
                        defaultValue="  "
                    >
                        <option disabled value=""></option>
                        <option value="bug">Bug</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                    <label className="select-label">Select issue type</label>
                </div>

                <div className="select">
                    <select
                        className="select-text"
                        required
                        onChange={(event) => {}}
                        id="issue-type-dropdown"
                        defaultValue=""
                    >
                        <option disabled value=""></option>
                        <option value="bug">Bug</option>
                        <option value="suggestion">Suggestion</option>
                    </select>
                    <label className="select-label">Select issue type</label>
                </div>
            </StyledProfileSettings>
            <EmptyButton danger>Save changes</EmptyButton>
        </StyledProfileContainer>
    );
};

export default ProfileSettings;
