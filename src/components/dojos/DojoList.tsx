import React, { useContext } from "react";
import { ContainerWithRows } from "../styled-components/Reusables";
import DojoBasic from "./DojoBasic";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { DojoContext } from "../context/DojoContextProvider";

interface Props {}

const DojoList = (props: Props) => {
    const { dojos } = useContext(DojoContext);

    return (
        <ContainerWithRows data-testid="dojolist-container">
            {dojos &&
                dojos.map((dojo: IBasicDojoInfo) => {
                    return <DojoBasic key={dojo.id} dojo={dojo} />;
                })}
        </ContainerWithRows>
    );
};

export default DojoList;
