import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";

const StyledHomeLink = styled.div`
    margin-left: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    align-content: center;

    &:hover {
        cursor: pointer;
    }
`;

interface Props {}

const HomeLink = (props: Props) => {
    const history = useHistory();

    const redirectHome = () => {
        history.push("/");
    };

    return (
        <StyledHomeLink onClick={redirectHome} data-testid="homelink">
            <Logo />
            <h1>Dojo Tracker</h1>
        </StyledHomeLink>
    );
};

export default HomeLink;
