import React, { useContext, useState, useEffect, Fragment } from "react";
import { ContainerWithRows } from "../styled-components/Reusables";
import { useParams } from "react-router-dom";
import { DojoContext } from "../context/DojoContextProvider";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import SolutionEditor from "./SolutionEditor";
import DojoInfo from "./DojoInfo";

interface Props {}

const DojoDetailed = (props: Props) => {
    const { id } = useParams();

    const [dojos, setDojos] = useContext(DojoContext);

    const [dojo, setDojo] = useState<null | IBasicDojoInfo>();

    useEffect(() => {
        const dojo = getDojo();

        setDojo(dojo);
    }, [id]);

    const getDojo = (): IBasicDojoInfo => {
        return dojos.find((dojo: IBasicDojoInfo) => dojo.id.toString() === id);
    };

    return (
        <ContainerWithRows>
            {dojo && (
                <Fragment>
                    {""}
                    <DojoInfo title={dojo.title} link={dojo.url} isComplete={dojo.isDone} />
                    <SolutionEditor dojoId={dojo.id} isComplete={dojo.isDone} />
                </Fragment>
            )}
        </ContainerWithRows>
    );
};

export default DojoDetailed;
