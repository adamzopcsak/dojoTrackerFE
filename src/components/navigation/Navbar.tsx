import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import HomeLink from "./HomeLink";
import SignIn from "../user-management/SignIn";
import LogOut from "../user-management/LogOut";
import NavLinks from "./NavLinks";
import { LoginContext } from "../context/LoginContextProvider";

const StyledNavBar = styled.nav`
    width: 100%;
    max-width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;
    color: black;
    font-weight: bold;
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 0.8);
    top: 0;

    & * {
        /* margin: 0 0.5rem; */
    }
`;

interface Props {}

const Navbar = (props: Props) => {
    const { isLoggedIn } = useContext(LoginContext);

    return (
        <StyledNavBar>
            <HomeLink />

            {isLoggedIn ? (
                <Fragment>
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
