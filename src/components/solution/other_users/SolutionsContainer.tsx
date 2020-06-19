import React, { useContext, useEffect, useState } from "react";
import { SolutionContext } from "../../context/SolutionContextProvider";
import { useParams } from "react-router-dom";
import { DojoContext } from "../../context/DojoContextProvider";
import SolutionTile from "./SolutionTile";
import { IDojoSolution } from "../../../static/util/interfaces";
import { Container } from "../../styled-components/Reusables";
import SolutionHeaders from "./SolutionHeaders";

interface Props {}

const SolutionsContainer = (props: Props) => {
    const { getSolutionsByDojoId, solutions, sortData } = useContext(SolutionContext);
    const { getTitleById } = useContext(DojoContext);
    const [title, setTitle] = useState();

    const { id } = useParams();

    useEffect(() => {
        getSolutionsByDojoId(id);
        (async function getDojo() {
            const dojoTitle = await getTitleById(id);
            setTitle(dojoTitle);
        })();
    }, [id]);

    const sortOnClick = (e: any) => {
        if (e.target.dataset.reference) {
            sortData(e.target.dataset.reference);
        }
        return;
    };

    return (
        <Container>
            <h1>{title}</h1>
            <SolutionHeaders onClick={(event: any) => sortOnClick(event)} />
            {solutions &&
                solutions.map((solution: IDojoSolution) => {
                    return <SolutionTile key={solution.id} solution={solution} />;
                })}
        </Container>
    );
};

export default SolutionsContainer;
