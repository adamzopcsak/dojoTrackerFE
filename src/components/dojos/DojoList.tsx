import React, { useState, useEffect, useContext } from "react";
import { Container } from "../styled-components/Reusables";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import DojoBasic from "./DojoBasic";
import styled from "styled-components";
import { UserContext } from "../context/UserContextProvider";

const ContainerWithRows = styled(Container)`
    flex-direction: row;
    flex-wrap: wrap;
`;

interface Props {}

const DojoList = (props: Props) => {
    const [dojos, setDojos] = useState<null | IBasicDojoInfo[]>();
    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        setDojos(require("../../static/test data/dojos.json"));
    }, []);

    const isDojoComplete = (id: number): boolean => {
        return user.completedDojos.includes(id);
    };

    return (
        <ContainerWithRows>
            {dojos &&
                dojos.map((dojo) => {
                    return <DojoBasic key={dojo.id} dojo={dojo} isComplete={isDojoComplete(dojo.id)} />;
                })}
        </ContainerWithRows>
    );
};

export default DojoList;
