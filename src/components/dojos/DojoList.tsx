import React from "react";
import { ContainerWithRows } from "../styled-components/Reusables";
import DojoBasic from "./DojoBasic";
import { IBasicDojoInfo } from "../../static/util/interfaces";

interface Props {
    dojos: IBasicDojoInfo[];
}

const DojoList = (props: Props) => {
    return (
        <ContainerWithRows data-testid="dojolist-container">
            {props.dojos &&
                props.dojos.map((dojo: IBasicDojoInfo) => {
                    return <DojoBasic key={dojo.id} dojo={dojo} />;
                })}
        </ContainerWithRows>
    );
};

export default DojoList;
