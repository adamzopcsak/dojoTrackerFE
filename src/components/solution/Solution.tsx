import React from "react";
import { ContainerWithRows } from "../styled-components/Reusables";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import DojoInfo from "./DojoInfo";
import SolutionEditor from "./SolutionEditor";

const Solution = ({ dojo }: { dojo: IBasicDojoInfo }) => {
    return (
        <ContainerWithRows>
            <DojoInfo title={dojo.title} link={dojo.url} isComplete={dojo.isDone} />
            <SolutionEditor isComplete={dojo.isDone} />
        </ContainerWithRows>
    );
};

export default Solution;
