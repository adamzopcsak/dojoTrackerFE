import React from "react";
import styled from "styled-components";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledProfileData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #dc3545;
    height: 75vh;
    min-width: 75%;
    margin: 0 0 0 1rem;
`;

interface Props {}

const ProfileData = (props: Props) => {
    return (
        <StyledProfileData>
            <h3>Feature not implemented yet. Please come back later.</h3>
            <FontAwesomeIcon icon={faSadCry} size="8x" data-menureference="solutions" />
        </StyledProfileData>
    );
};

export default ProfileData;
