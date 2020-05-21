import React from "react";
import RankingContainer from "./RankingContainer";
import { Container, ContainerWithRows } from "../styled-components/Reusables";

const RankingPage = () => {
    return (
        <Container>
            <ContainerWithRows>
                <RankingContainer />
            </ContainerWithRows>
        </Container>
    );
};

export default RankingPage;
