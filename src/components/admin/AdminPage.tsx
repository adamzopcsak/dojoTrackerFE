import React from "react";
import { Container } from "../styled-components/Reusables";
import styled from "styled-components";
import UserStats from "./UserStats";

const CustomContainer = styled(Container)`
    align-items: flex-start !important;
`;

interface Props {}

const AdminPage = (props: Props) => {
    return (
        <CustomContainer>
            <h3>Users</h3>
            <UserStats />
        </CustomContainer>
    );
};

export default AdminPage;
