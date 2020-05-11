import React, { useContext } from "react";
import { ContainerWithRows, Container } from "../styled-components/Reusables";
import DojoCard from "./DojoCard";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { DojoContext } from "../context/DojoContextProvider";
import DojoSearchContainer from "./DojoSearchContainer";

interface Props {}

const DojoList = (props: Props) => {
    const { dojos } = useContext(DojoContext);

    return (
        <Container>
            <DojoSearchContainer />
            <ContainerWithRows data-testid="dojolist-container">
                {dojos &&
                    dojos.map((dojo: IBasicDojoInfo) => {
                        return <DojoCard key={dojo.id} dojo={dojo} />;
                    })}
            </ContainerWithRows>
        </Container>
    );
};

export default DojoList;
