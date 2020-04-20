import React from "react";
import styled from "styled-components";
import HomeLink from "./HomeLink";
import SignIn from "../user-management/SignIn";

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
            <SignIn />
        </StyledNavBar>
    );
};

export default Navbar;
