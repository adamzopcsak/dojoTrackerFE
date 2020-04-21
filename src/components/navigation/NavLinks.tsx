import React from "react";
import styled from "styled-components";

const StyledNavLinks = styled.ul`
    text-decoration: none;
    list-style: none;

    & li {
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

    @media (max-width: 641px) {
        display: none;
    }
`;

interface Props {}

const NavLinks = (props: Props) => {
    return (
        <StyledNavLinks>
            <li>Dojos</li>
            <li>Ranking</li>
        </StyledNavLinks>
    );
};

export default NavLinks;
