import React, { useContext, useState, useEffect, Fragment } from "react";
import { ContainerWithRows } from "../styled-components/Reusables";
import { useParams } from "react-router-dom";
import { DojoContext } from "../context/DojoContextProvider";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import SolutionEditor from "./SolutionEditor";
import DojoInfo from "./DojoInfo";
import { SolutionContext } from "../context/SolutionContextProvider";

interface Props {}

const DojoDetailed = (props: Props) => {
    const { id } = useParams();

    const { getById } = useContext(DojoContext);
    const { setDojoId } = useContext(SolutionContext);

    const [dojo, setDojo] = useState<null | IBasicDojoInfo>();

    useEffect(() => {
        (async function getDojo() {
            const dojoById = await getById(id);
            setDojo(dojoById);
            setDojoId(id);
        })();
    }, [id]);

    return (
        <ContainerWithRows>
            {dojo && (
                <Fragment>
                    <DojoInfo title={dojo.title} link={dojo.url} isComplete={dojo.isDone} />
                    <SolutionEditor isComplete={dojo.isDone} />
                </Fragment>
            )}
        </ContainerWithRows>
    );
};

export default DojoDetailed;
