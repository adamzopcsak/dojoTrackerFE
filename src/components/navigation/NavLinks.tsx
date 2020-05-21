import React from "react";
import styled from "styled-components";
import { CustomLink } from "../styled-components/Reusables";

const StyledNavLinks = styled.div`
    text-align: center;

    & p {
        float: left;
        margin: 0 0.5rem;
        padding: 0 0.5rem;
        letter-spacing: 0.2rem;
        position: relative;
        font-size: 0.9rem;

        &:hover {
            cursor: pointer;
        }

        &::after {
            position: absolute;
            top: 25px;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 0%;
            content: ".";
            color: transparent;
            background: black;
            height: 2px;
            transition: all 0.5s;
        }

        &:hover::after {
            width: 100%;
        }
    }

    @media (max-width: 1280px) {
        display: none;
    }
`;

const NavLinks = () => {
    return (
        <StyledNavLinks>
            <p>
                <CustomLink to="/dojos">Dojos</CustomLink>
            </p>
            <p>
                <CustomLink to="/ranking">Ranking</CustomLink>
            </p>
            <p>Profile</p>
        </StyledNavLinks>
    );
};

export default NavLinks;
