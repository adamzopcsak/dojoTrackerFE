import React, { useState, useEffect } from "react";
import { Container } from "../styled-components/Reusables";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import DojoBasic from "./DojoBasic";
import styled from "styled-components";

const ContainerWithRows = styled(Container)`
    flex-direction: row;
    flex-wrap: wrap;
`;

interface Props {}

const DojoList = (props: Props) => {
    const [dojos, setDojos] = useState<null | IBasicDojoInfo[]>();

    useEffect(() => {
        setDojos(require("../../static/test data/dojos.json"));
    }, []);

    return (
        <ContainerWithRows>
            {dojos &&
                dojos.map((dojo) => {
                    return <DojoBasic key={dojo.id} dojo={dojo} />;
                })}
        </ContainerWithRows>
    );
};

export default DojoList;
