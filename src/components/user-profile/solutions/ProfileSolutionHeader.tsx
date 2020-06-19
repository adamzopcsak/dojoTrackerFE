import React from "react";
import { HeaderTile } from "../../styled-components/Reusables";

interface Props {
    onClick: Function;
}

const ProfileSolutionHeaders = (props: Props) => {
    return (
        <HeaderTile
            onClick={(event) => {
                props.onClick(event);
            }}
        >
            <p data-reference="" id="user-sort-btn">
                Dojo
            </p>
            <p data-reference="language" id="language-sort-btn">
                Language
            </p>
            <p data-reference="submissionDate" id="date-sort-btn">
                Submission date
            </p>
            <p data-reference="">Solution</p>
        </HeaderTile>
    );
};

export default ProfileSolutionHeaders;
