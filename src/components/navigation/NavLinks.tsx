import React from "react";
import styled from "styled-components";

const StyledNavLinks = styled.ul`
    text-decoration: none;
    list-style: none;

    & li {
        float: left;
        padding: 0 2rem;

        &:hover {
            text-decoration: underline;
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
