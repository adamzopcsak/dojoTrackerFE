import React from "react";
import styled from "styled-components";
import { CustomCheckbox } from "../styled-components/CustomCheckBox";
interface Props {
    isComplete: boolean;
    onStatusChange: (status: any) => void;
}

const StatusIndicator = (props: Props) => {
    return (
        <CustomCheckbox>
            <input
                type="checkbox"
                defaultChecked={props.isComplete}
                onChange={(event) => props.onStatusChange(event.target.checked)}
                disabled
            />
            <span></span>
        </CustomCheckbox>
    );
};

export default StatusIndicator;
