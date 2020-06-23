import React, { useContext } from "react";
import { ProfilePageContext } from "../../context/ProfilePageContextProvider";
import styled from "styled-components";
import { StyledProfileContainer, EmptyButton } from "../../styled-components/Reusables";
import { useHistory } from "react-router-dom";
import { UserDataContext } from "../../context/UserDataContextProvider";
import ProfileData from "./ProfileData";

const StyledProfileSettings = styled(StyledProfileContainer)`
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    color: gray;

    .select {
        margin: 2rem 0;
        width: 50%;
    }
`;

interface Props {}

const ProfileSettings = (props: Props) => {
    const { user, saveUpdates } = useContext(UserDataContext);
    const history = useHistory();

    const updatePreferredLanguage = (value: string) => {
        user.preferredLanguage = value;
    };

    const updatePreferredEditorTheme = (value: string) => {
        user.preferredEditorTheme = value;
    };

    const saveChanges = () => {
        saveUpdates();
        history.push("/user-update-success");
    };

    return (
        <StyledProfileSettings>
            <h3>Settings</h3>

            <ProfileData header="Nickname:" data={user.nickName} />
            <div className="select">
                <select
                    className="select-text"
                    required
                    onChange={(event: any) => {
                        updatePreferredLanguage(event.target.value);
                    }}
                    id="issue-type-dropdown"
                    defaultValue={user.preferredLanguage !== null ? user.preferredLanguage : "python"}
                >
                    <option value="python">Python</option>
                    <option value="csharp">C#</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                </select>
                <label className="select-label">Select language preference</label>
            </div>
            <div className="select">
                <select
                    className="select-text"
                    required
                    onChange={(event: any) => {
                        updatePreferredEditorTheme(event.target.value);
                    }}
                    id="issue-type-dropdown"
                    defaultValue={user.preferredEditorTheme !== null ? user.preferredEditorTheme : "dark"}
                >
                    <option value="monokai">Dark</option>
                    <option value="github">Light</option>
                </select>
                <label className="select-label">Select editor theme preference</label>
            </div>

            <div className="select">
                <select className="select-text" required onChange={(event) => {}} id="issue-type-dropdown" disabled>
                    <option value="">Dark</option>
                    <option value="">Light</option>
                </select>
                <label className="select-label">Select website theme</label>
            </div>
            <EmptyButton onClick={() => saveChanges()}>Save changes</EmptyButton>
        </StyledProfileSettings>
    );
};

export default ProfileSettings;
