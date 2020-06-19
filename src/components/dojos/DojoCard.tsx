import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IBasicDojoInfo } from "../../static/util/interfaces";
import { EmptyButton, StyledCard } from "../styled-components/Reusables";
import axios from "../../static/util/axiosConfig";
import StatusIndicator from "./StatusIndicator";
import { AxiosResponse } from "axios";

interface Props {
    dojo: IBasicDojoInfo;
}

const DojoCard = (props: Props) => {
    const history = useHistory();
    const [isComplete, setIsComplete] = useState<any | boolean>();

    useEffect(() => {
        axios.get(`/api/dojo/${props.dojo.id}/status`).then((response: AxiosResponse<boolean>) => {
            props.dojo.isDone = response.data;
            setIsComplete(response.data);
        });
    }, []);

    const redirect = (event: any): void => {
        event.target.classList.contains("redirect-btn")
            ? window.open(props.dojo.url, "_blank")
            : history.push(`/dojos/${props.dojo.id}`);
    };

    return (
        <StyledCard onClick={(event) => redirect(event)} className="dojo-card" id={`dojo-card-${props.dojo.id}`}>
            <p id="dojo-title">{props.dojo.title}</p>
            <StatusIndicator isComplete={isComplete} />
            <EmptyButton className="redirect-btn" id={`dojo-link-${props.dojo.id}`}>
                Attempt
            </EmptyButton>
        </StyledCard>
    );
};

export default DojoCard;
