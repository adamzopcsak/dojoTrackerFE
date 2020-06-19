import React, { Fragment, useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import HomeLink from "./HomeLink";
import SignIn from "../user-management/SignIn";
import LogOut from "../user-management/LogOut";
import NavLinks from "./NavLinks";
import { LoginContext } from "../context/LoginContextProvider";
import DojoSearchContainer from "../dojos/DojoSearchContainer";
import { useLocation } from "react-router-dom";
import SandwichMenu from "./SandwichMenu";

const StyledNavBar = styled.nav`
    width: 90%;
    max-width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 900;
    color: black;
    font-weight: bold;
    position: sticky;
    top: 0;
    background-color: rgba(255, 255, 255, 1);
    padding: 0.5rem 0;
    transition: 1000ms ease;

    & * {
        margin: 0 0.5rem;
    }

    & div.std-log {
        @media (max-width: 1280px) {
            display: none;
        }
    }
`;

interface Props {}

const Navbar = (props: Props) => {
    const { isLoggedIn } = useContext(LoginContext);
    const navBar = useRef<any>();
    const location = useLocation();

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY === 0) {
            navBar?.current?.classList.remove("scrolling");
        } else {
            navBar?.current?.classList.add("scrolling");
        }
    };

    const isSearchVisible = () => {
        return location.pathname !== "/" ? true : false;
    };

    return (
        <StyledNavBar ref={navBar}>
            <HomeLink />
            {isLoggedIn ? (
                <Fragment>
                    <NavLinks mobile={false} /> {isSearchVisible() && <DojoSearchContainer mobile={false} />}
                    <div className="std-log" id="logout-btn">
                        <LogOut />
                    </div>
                </Fragment>
            ) : (
                <div className="std-log" id="login-btn">
                    <SignIn />
                </div>
            )}
            <SandwichMenu />
        </StyledNavBar>
    );
};

export default Navbar;
