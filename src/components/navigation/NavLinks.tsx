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

        &:hover {
            border-bottom: 2px solid black;
            padding-bottom: 6px;
            cursor: pointer;
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
