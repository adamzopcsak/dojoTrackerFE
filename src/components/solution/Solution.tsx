import React, { useContext } from "react";
import { Container } from "../styled-components/Reusables";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import SolutionEditor from "./SolutionEditor";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ActionButtons from "./ActionButtons";
import EditorImputs from "./EditorImputs";
import { SolutionContext } from "../context/SolutionContextProvider";

const CustomContainer = styled(Container)`
    margin: 1rem 0;
`;

const Solution = ({ dojo }: { dojo: IBasicDojoInfo }) => {
    const history = useHistory();
    const { postSolution } = useContext(SolutionContext);

    const markAsComplte = () => {
        dojo.isDone = true;
        history.push(`/dojos/${dojo.id}/sucess`);
    };

    const saveSolution = () => {
        postSolution();
        history.push(`/dojos/${dojo.id}/sucess`);
    };

    return (
        <CustomContainer>
            <h3>{dojo.title}</h3>
            <EditorImputs />
            <SolutionEditor isComplete={dojo.isDone} markAsComplete={markAsComplte} />
            <ActionButtons link={dojo.url} onSave={saveSolution} />
        </CustomContainer>
    );
};

export default Solution;
