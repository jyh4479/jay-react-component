import React, {FunctionComponent, useRef, useState} from "react";
import {DateMode, SELECTED_FOCUS, SELECTED_MODE} from "./data";
import {Calendar as CalendarSvg, SwapRight as SwapRightSvg} from "./svg";
import Calendar from "./Calendar";
import "./index.css";
import {Portal} from "@jay-react-component/portal";
import {useComponentPosition, usePickerFocusState} from "./hooks";
import DatePickerContext from "./context";

const DateRangePicker: FunctionComponent = () => {

    const [currentDate, setCurrentDate] = useState<number>(new Date().getTime());
    const [selectedStartDate, setSelectedStartDate] = useState<number>(-1);
    const [selectedEndDate, setSelectedEndDate] = useState<number>(-1);
    const [selectMode, setSelectMode] = useState<DateMode>(SELECTED_MODE.DAY);

    const parentRef = useRef<HTMLInputElement>(null);
    const leftInputRef = useRef<HTMLInputElement>(null);
    const rightInputRef = useRef<HTMLInputElement>(null);

    const {
        focusState,
        parentOnClick,
        leftInputOnFocus,
        rightInputOnFocus
    } = usePickerFocusState(parentRef, leftInputRef, rightInputRef);

    const datePickerPosition = useComponentPosition(parentRef);

    return (
        <DatePickerContext.Provider value={{
            currentDate,
            setCurrentDate,
            selectedStartDate,
            setSelectedStartDate,
            selectedEndDate,
            setSelectedEndDate,
            selectMode,
            setSelectMode
        }}>
            <Portal>
                <Calendar
                    display={focusState !== SELECTED_FOCUS.NONE}
                    focusState={focusState}
                />
            </Portal>
            <div
                ref={parentRef}
                className={`date-picker-layout ${focusState !== SELECTED_FOCUS.NONE ? 'picker-focus' : null}`}
                onClick={parentOnClick}
            >
                <div>
                    <input
                        ref={leftInputRef}
                        onFocus={leftInputOnFocus}
                        type={"text"}
                        placeholder={"Start date"}
                    />
                </div>
                <div>
                    <SwapRightSvg className={`date-picker-arrow-svg`}/>
                </div>
                <div>
                    <input
                        ref={rightInputRef}
                        onFocus={rightInputOnFocus}
                        type={"text"}
                        placeholder={"End date"}
                    />
                </div>
                <div>
                    <CalendarSvg className={`date-picker-calendar-svg`}/>
                </div>
            </div>
        </DatePickerContext.Provider>
    )
}

export default DateRangePicker;