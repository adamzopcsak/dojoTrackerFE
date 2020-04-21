import React from "react";
import styled from "styled-components";
import HomeLink from "./HomeLink";
import SignIn from "../user-management/SignIn";
import NavLinks from "./NavLinks";

const StyledNavBar = styled.nav`
    width: 80%;
    max-width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1;
    color: black;
    font-weight: bold;
`;

interface Props {}

const Navbar = (props: Props) => {
    return (
        <StyledNavBar>
            <HomeLink />
            <NavLinks />
            <SignIn />
        </StyledNavBar>
    );
};

export default Navbar;
