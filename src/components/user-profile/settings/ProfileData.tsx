import React, { useState, useContext, KeyboardEvent } from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ProfilePageContext } from "../../context/ProfilePageContextProvider";
import { UserDataContext } from "../../context/UserDataContextProvider";

const StyledPropfileData = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left !important;
    flex-direction: column;

    width: 100%;

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

        &:hover {
            cursor: pointer;
        }
    }

    .profile-data-input {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;

        input {
            border: none;
            background-color: inherit;
            font-weight: bold;
            color: gray;

            &:focus {
                outline: none;
            }
        }
    }
`;

interface Props {
    header: string;
    data: any;
}

const ProfileData = (props: Props) => {
    const [isEdited, setIsEdited] = useState(false);

    const [valueToEdit, setValueToEdit] = useState(props.data);

    const { user, setUser } = useContext(UserDataContext);

    const changeNickname = (value: string) => {
        let changedUserData = user;

        changedUserData.nickName = value;

        setValueToEdit(value);

        setUser(changedUserData);
    };

    const stopEditingOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setIsEdited(!isEdited);
        }

        return;
    };

    return (
        <StyledPropfileData className="profile-data-div">
            <p className="profile-data-title"> Nickname:</p>
            <div
                className="data-edit-cluster"
                onClick={() => {
                    setIsEdited(true);
                }}
            >
                {isEdited ? (
                    <div className="profile-data-input">
                        <input
                            autoFocus
                            value={valueToEdit}
                            onChange={(event: any) => {
                                changeNickname(event.target.value);
                            }}
                            onKeyDown={(event) => {
                                stopEditingOnKeyDown(event);
                            }}
                        ></input>
                    </div>
                ) : (
                    <p>{valueToEdit !== null ? valueToEdit : "default"}</p>
                )}

                <p
                    onClick={() => {
                        setIsEdited(!isEdited);
                    }}
                >
                    <FontAwesomeIcon icon={faPen} onClick={() => {}} />
                </p>
            </div>
        </StyledPropfileData>
    );
};

export default ProfileData;
