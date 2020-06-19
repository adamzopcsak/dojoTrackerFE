import React, { useContext, Fragment } from "react";
import styled from "styled-components";
import { LoginContext } from "../context/LoginContextProvider";
import NavLinks from "./NavLinks";
import LogOut from "../user-management/LogOut";
import SignIn from "../user-management/SignIn";
import DojoSearchContainer from "../dojos/DojoSearchContainer";

const StyledMobileNav = styled.nav`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.5s;
    background-color: #fff;
    opacity: 0;
    pointer-events: none;
    width: 100%;
    height: 100%;

    &.is-visible {
        opacity: 1 !important;
        z-index: 890 !important;
        pointer-events: all;
    }

    ul {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 1280px) {
        display: none;
    }
`;

interface Props {}

const MobileNav = (props: Props) => {
    const { isLoggedIn } = useContext(LoginContext);

    const hideMenu = (event: any) => {
        if (isSearchToggled(event.target)) {
            document.querySelector(".mobile-nav")?.classList.toggle("is-visible");
            document.querySelector(".burger-menu")?.classList.toggle("is-opened");
        }

        return;
    };

    const isSearchToggled = (target: any): boolean => {
        return (
            !target.classList.contains("search-bar") ||
            (target.classList.contains("search-bar") && target.classList.contains("search-btn"))
        );
    };

    return (
        <StyledMobileNav className="mobile-nav" onClick={(event) => hideMenu(event)}>
            <ul>
                {isLoggedIn ? (
                    <Fragment>
                        <DojoSearchContainer mobile={true} />
                        <NavLinks mobile={true} />
                        <div className="std-log" id="mobile-logout-btn">
                            <LogOut />
                        </div>
                    </Fragment>
                ) : (
                    <div className="std-log" id="mobile-login-btn">
                        <SignIn />
                    </div>
                )}
            </ul>
        </StyledMobileNav>
    );
};

export default MobileNav;
