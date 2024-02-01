import React, {FunctionComponent} from "react";
import "./index.css";
import {FocusState, SELECTED_FOCUS} from "../data";

type PropsType = {
    focusState: FocusState
}

const Calendar: FunctionComponent<PropsType> = (props) => {

    const {focusState} = props;

    return (
        <div
            className={`calendar-layout ${focusState === SELECTED_FOCUS.LEFT ? 'left' : 'right'}`}
        >
            Calendar
            123
        </div>
    )
};

export default Calendar;