import React from "react";
import styled from "styled-components";
import { CustomCheckbox } from "../styled-components/CustomCheckBox";
interface Props {
    isComplete: boolean;
}

const StatusIndicator = (props: Props) => {
    return (
        <CustomCheckbox>
            <input type="checkbox" defaultChecked={props.isComplete} />
            <span></span>
        </CustomCheckbox>
    );
};

export default StatusIndicator;
