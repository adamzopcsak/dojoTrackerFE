import React, { useContext } from "react";
import { Container } from "../../styled-components/Reusables";
import { IBasicDojoInfo } from "../../../static/util/interfaces";
import SolutionEditor from "./SolutionEditor";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ActionButtons from "./ActionButtons";
import EditorImputs from "./EditorImputs";
import { SolutionEditorContext } from "../../context/SolutionEditorContextProvider";

const CustomContainer = styled(Container)`
    margin: 1rem 0;
`;

const Solution = ({ dojo }: { dojo: IBasicDojoInfo }) => {
    const history = useHistory();
    const { postSolution, language } = useContext(SolutionEditorContext);

    const saveSolution = () => {
        postSolution();
        history.push({
            pathname: `/dojos/${dojo.id}/sucess`,
            state: { title: dojo.title, language: language },
        });
    };

    return (
        <CustomContainer>
            <h3>{dojo.title}</h3>
            <EditorImputs />
            <SolutionEditor isComplete={dojo.isDone} />
            <ActionButtons link={dojo.url} onSave={saveSolution} title={dojo.title} isDone={dojo.isDone} />
        </CustomContainer>
    );
};

export default Solution;
