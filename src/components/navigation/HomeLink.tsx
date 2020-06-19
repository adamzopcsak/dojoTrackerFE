import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";
import TitleLogo from "../misc/TitleLogo";

const StyledHomeLink = styled.div`
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
        <StyledHomeLink onClick={redirectHome}  id="home-btn">
            <Logo />
            <TitleLogo />
        </StyledHomeLink>
    );
};

export default HomeLink;
