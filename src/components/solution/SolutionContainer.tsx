import React, { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { DojoContext } from "../context/DojoContextProvider";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { SolutionContext } from "../context/SolutionContextProvider";
import Solution from "./Solution";

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
    }, [id, getById, setDojo, setDojoId]);

    return <Fragment>{dojo && <Solution dojo={dojo} />}</Fragment>;
};

export default DojoDetailed;
