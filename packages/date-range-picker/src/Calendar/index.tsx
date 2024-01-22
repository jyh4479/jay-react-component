import React, {FunctionComponent} from "react";
import "./index.css";
import {FocusState, SELECTED_FOCUS} from "../data";

type PropsType = {
    display?: boolean
    focusState: FocusState
}

const Calendar: FunctionComponent<PropsType> = (props: PropsType) => {

    const {display = true, focusState} = props;

    return (
        <div
            className={`calendar-layout ${!display ? 'hide' : ''} 
            ${focusState === SELECTED_FOCUS.LEFT ? 'left' : 'right'}`}
        >
            Calendar
            123
        </div>
    )
}

export default Calendar;