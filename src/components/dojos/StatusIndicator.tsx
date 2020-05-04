import React from "react";
import { CustomCheckbox } from "../styled-components/CustomCheckBox";
interface Props {
    isComplete: boolean;
}

const StatusIndicator = (props: Props) => {
    return (
        <CustomCheckbox>
            <input type="checkbox" defaultChecked={props.isComplete} disabled data-testid="dojo-checkbox" />
            <span></span>
        </CustomCheckbox>
    );
};

export default StatusIndicator;
