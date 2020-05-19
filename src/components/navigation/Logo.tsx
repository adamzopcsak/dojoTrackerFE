import React from "react";
import styled from "styled-components";
import CCLogo from "../misc/CCLogo";

const StyledLogo = styled.img`
    width: 3rem;
`;

interface Props {}

const Logo = (props: Props) => {
    return <CCLogo />;
};

export default Logo;
