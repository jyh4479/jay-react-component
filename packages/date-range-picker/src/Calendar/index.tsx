import React, {FunctionComponent} from "react";
import "./index.css";
import {FocusState} from "../types/common";
import DayPicker from "./DayPicker";

type PropsType = {
    focusState: FocusState
}

const Calendar: FunctionComponent<PropsType> = (props) => {

    const {focusState} = props;

    return (
        <div
            className={"calendar-layout"}
        >
            <DayPicker/>
        </div>
    )
};

export default Calendar;