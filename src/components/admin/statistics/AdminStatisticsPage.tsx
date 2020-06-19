import React from "react";
import { Container } from "../../styled-components/Reusables";
import styled from "styled-components";
import UserStatsContainer from "./UserStatsContainer";
import DojoStatContainer from "./DojoStatContainer";

const CustomContainer = styled(Container)`
    justify-content: flex-start !important;
    align-items: flex-start;
    margin-top: 3rem;
    margin-bottom: 3rem;

    & span {
        margin: 0 0.5rem;
        color: #dc3545;
    }

    & h3:hover {
        cursor: pointer;
    }
`;

interface Props {}

const AdminStatisticsPage = (props: Props) => {
    return (
        <CustomContainer>
            <UserStatsContainer />
            <DojoStatContainer />
        </CustomContainer>
    );
};

export default AdminStatisticsPage;
