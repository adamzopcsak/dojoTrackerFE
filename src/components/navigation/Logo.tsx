import React from "react";
import styled from "styled-components";

const StyledLogo = styled.img`
    width: 3rem;
    margin-right: 1rem;
`;

interface Props {}

const Logo = (props: Props) => {
    return <StyledLogo src={require("../../static/img/codecool_logo.png")} alt="Code Cool logo" />;
};

export default Logo;
