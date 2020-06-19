import React, { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { DojoContext } from "../../context/DojoContextProvider";
import { IBasicDojoInfo } from "../../../static/util/interfaces";
import { SolutionEditorContext } from "../../context/SolutionEditorContextProvider";
import Solution from "./Solution";

interface Props {}

const DojoDetailed = (props: Props) => {
    const { id } = useParams();

    const { getById } = useContext(DojoContext);
    const { setDojoId } = useContext(SolutionEditorContext);

    const [dojo, setDojo] = useState<null | IBasicDojoInfo>();

    useEffect(() => {
        (async function getDojo() {
            const dojoById = await getById(parseInt(id));
            setDojo(dojoById);
            setDojoId(parseInt(id));
        })();
    }, [id, getById, setDojo, setDojoId]);

    return <Fragment>{dojo && <Solution dojo={dojo} />}</Fragment>;
};

export default DojoDetailed;
