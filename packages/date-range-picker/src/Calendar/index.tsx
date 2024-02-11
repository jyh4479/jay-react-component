import React, {FunctionComponent} from "react";
import "./index.css";
import {FocusState} from "../types/common";

type PropsType = {
    focusState: FocusState
}

const Calendar: FunctionComponent<PropsType> = (props) => {

    const {focusState} = props;

    return (
        <div
            className={"calendar-layout"}
        >
            Calendar
            123
        </div>
    )
};

export default Calendar;