import React, { useState } from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const StyledPropfileData = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: 2rem 5rem;
    width: 30%;

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

interface Props {
    header: string;
    data: any;
}

const ProfileData = (props: Props) => {
    const [isEdited, setIsEdited] = useState(false);

    return (
        <div className="profile-data-div">
            <p className="profile-data-title"> Nickname:</p>
            <div
                className="data-edit-cluster"
                onClick={() => {
                    setIsEdited(true);
                }}
            >
                {isEdited ? (
                    <input
                        value={props.data}
                        onChange={(event: any) => {
                            props.data = event.target.value;
                        }}
                    ></input>
                ) : (
                    <p>{props.data !== null ? props.data : "default"}</p>
                )}

                <p>
                    <FontAwesomeIcon icon={faPen} onClick={() => {}} />
                </p>
            </div>
        </div>
    );
};

export default ProfileData;
