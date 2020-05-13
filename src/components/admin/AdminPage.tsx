import React, { useContext } from "react";
import { Container } from "../styled-components/Reusables";
import styled from "styled-components";
import UserStatsContainer from "./UserStatsContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { UserStatContext } from "../context/UserStatContextProvider";

const CustomContainer = styled(Container)`
    justify-content: flex-start !important;
    align-items: flex-start;
    margin-top: 3rem;

    & span {
        margin: 0 0.5rem;
        color: #dc3545;
    }

    & h3:hover {
        cursor: pointer;
    }
`;

interface Props {}

const AdminPage = (props: Props) => {
    const { isHidden, setIsHidden } = useContext(UserStatContext);

    return (
        <CustomContainer>
            <div>
                <h3
                    onClick={() => {
                        setIsHidden(!isHidden);
                    }}
                >
                    Users
                    <span>
                        <FontAwesomeIcon icon={isHidden ? faChevronDown : faChevronUp} size="lg" />
                    </span>
                </h3>
            </div>
            {!isHidden && <UserStatsContainer />}
        </CustomContainer>
    );
};

export default AdminPage;
