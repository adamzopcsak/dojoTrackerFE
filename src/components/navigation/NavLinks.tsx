import React from "react";
import styled from "styled-components";
import { CustomLink } from "../styled-components/Reusables";

const StyledNavLinks = styled.div`
    text-align: center;

    & p {
        float: left;
        margin: 0 2rem;
        padding: 0 0.5rem;
        letter-spacing: 0.2rem;
        position: relative;

        &:hover {
            cursor: pointer;
        }

        &::after {
            position: absolute;
            top: 30px;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 0%;
            content: ".";
            color: transparent;
            background: black;
            height: 3px;
            transition: all 0.5s;
        }

        &:hover::after {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

interface Props {}

const NavLinks = (props: Props) => {
    return (
        <StyledNavLinks>
            <p>
                <CustomLink to="/dojos">Dojos</CustomLink>
            </p>
            <p>Ranking</p>
            <p>Profile</p>
            <p>
                <CustomLink to="/admin">Admin</CustomLink>
            </p>
        </StyledNavLinks>
    );
};

export default NavLinks;
