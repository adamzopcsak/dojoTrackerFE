import React, { useState } from "react";
import styled from "styled-components";
import HomeLink from "./HomeLink";
import SignIn from "../user-management/SignIn";
import LogOut from "../user-management/LogOut";

const StyledNavBar = styled.nav`
    width: 80%;
    max-width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    color: black;
`;

interface Props {}

const Navbar = (props: Props) => {
    return (
        <StyledNavBar>
            <HomeLink />
            {localStorage.getItem("userData") ? <LogOut /> : <SignIn />}
        </StyledNavBar>
    );
};

export default Navbar;
