import React, { useState, Fragment, useContext, useRef } from "react";
import styled from "styled-components";
import HomeLink from "./HomeLink";
import SignIn from "../user-management/SignIn";
import LogOut from "../user-management/LogOut";
import NavLinks from "./NavLinks";
import { UserContext } from "../context/UserContextProvider";

const StyledNavBar = styled.nav`
    width: 90%;
    max-width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    color: black;
    font-weight: bold;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.8);
    top: 0;

    & * {
        margin: 0 0.5rem;
    }
`;

interface Props {}

const Navbar = (props: Props) => {
    const { user } = useContext(UserContext);

    return (
        <StyledNavBar>
            <HomeLink />

            {user ? (
                <Fragment>
                    {""}
                    <NavLinks />
                    <LogOut />
                </Fragment>
            ) : (
                <SignIn />
            )}
        </StyledNavBar>
    );
};

export default Navbar;
