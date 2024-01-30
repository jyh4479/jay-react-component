import React, {CSSProperties, forwardRef, FunctionComponent, RefAttributes} from "react";
import "./index.css";
import {FocusState, SELECTED_FOCUS} from "../data";

type PropsType = {
    display?: boolean
    focusState: FocusState
    style?: CSSProperties
} & RefAttributes<HTMLDivElement>

const Calendar: FunctionComponent<PropsType> = forwardRef((props, ref) => {

    const {display = true, focusState, style} = props;

    return (
        <div
            ref={ref}
            className={`calendar-layout ${!display ? 'hide' : ''} 
            ${focusState === SELECTED_FOCUS.LEFT ? 'left' : 'right'}`}
            style={style}
        >
            Calendar
            123
        </div>
    )
});

export default Calendar;