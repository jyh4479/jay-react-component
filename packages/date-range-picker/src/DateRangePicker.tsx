import React, {FunctionComponent, useEffect, useState} from "react";
import {DateMode, FocusState, SELECTED_FOCUS, SELECTED_MODE} from "./data";
import {Calendar as CalendarSvg, SwapRight as SwapRightSvg} from "./svg";
import Calendar from "./Calendar";
import "./index.css";
import {Portal} from "@jay-react-component/portal";

const DateRangePicker: FunctionComponent = () => {

    const [currentDate, setCurrentDate] = useState<number>(new Date().getTime());
    const [selectedStartDate, setSelectedStartDate] = useState<number>(-1);
    const [selectedEndDate, setSelectedEndDate] = useState<number>(-1);
    const [selectMode, setSelectMode] = useState<DateMode>(SELECTED_MODE.DAY);
    const [focusState, setFocusState] = useState<FocusState>(SELECTED_FOCUS.NONE);

    useEffect(() => {
        console.log(focusState);
    }, [focusState])

    return (
        <>
            <Portal>
                <Calendar/>
            </Portal>
            <div
                className={`date-picker-layout`}
                onClick={() => setFocusState(SELECTED_FOCUS.LEFT)}
                onBlur={() => setFocusState(SELECTED_FOCUS.NONE)}>
                <div>
                    <input
                        onClick={e => e.stopPropagation()}
                        onFocus={(e) => setFocusState(SELECTED_FOCUS.LEFT)}
                        type="text"
                        placeholder={"Start date"}/>
                </div>
                <div>
                    <SwapRightSvg className={`date-picker-arrow-svg`}/>
                </div>
                <div>
                    <input
                        onClick={e => e.stopPropagation()}
                        onFocus={(e) => setFocusState(SELECTED_FOCUS.RIGHT)}
                        type="text"
                        placeholder={"End date"}/>
                </div>
                <div>
                    <CalendarSvg className={`date-picker-calendar-svg`}/>
                </div>
            </div>
        </>
    )
}

export default DateRangePicker;