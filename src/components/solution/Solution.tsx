import React from "react";
import { ContainerWithRows } from "../styled-components/Reusables";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import DojoInfo from "./DojoInfo";
import SolutionEditor from "./SolutionEditor";
import styled from "styled-components";

const CustomContainer = styled(ContainerWithRows)`
    margin-top: 1% !important;
`;

const Solution = ({ dojo }: { dojo: IBasicDojoInfo }) => {
    return (
        <CustomContainer>
            <DojoInfo title={dojo.title} link={dojo.url} isComplete={dojo.isDone} />
            <SolutionEditor isComplete={dojo.isDone} />
        </CustomContainer>
    );
};

export default Solution;
