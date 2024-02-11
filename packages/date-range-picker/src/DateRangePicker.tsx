import React, {FunctionComponent, useRef, useState} from "react";
import {Calendar as CalendarSvg, SwapRight as SwapRightSvg} from "./svg";
import Calendar from "./Calendar";
import "./index.css";
import {Portal} from "@jay-react-component/portal";
import {usePickerFocusState} from "./hooks";
import DatePickerContext from "./context";
import Dialog from "./Dialog";
import ActiveBar from "./ActiveBar";
import {DateMode, SELECTED_FOCUS, SELECTED_MODE} from "./types/common";

const DateRangePicker: FunctionComponent = () => {

    const [currentDate, setCurrentDate] = useState<number>(new Date().getTime());
    const [selectedStartDate, setSelectedStartDate] = useState<number>(-1);
    const [selectedEndDate, setSelectedEndDate] = useState<number>(-1);
    const [selectMode, setSelectMode] = useState<DateMode>(SELECTED_MODE.DAY);

    const dialogRef = useRef<HTMLDivElement>(null);
    const datePickerRef = useRef<HTMLDivElement>(null);
    const leftInputRef = useRef<HTMLInputElement>(null);
    const rightInputRef = useRef<HTMLInputElement>(null);

    const {
        focusState,
        datePickerOnClick,
        leftInputOnFocus,
        rightInputOnFocus
    } = usePickerFocusState(datePickerRef, leftInputRef, rightInputRef, dialogRef);

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
                <Dialog
                    ref={dialogRef}
                    parentComponentRef={datePickerRef}
                    display={focusState !== SELECTED_FOCUS.NONE}
                >
                    <Calendar focusState={focusState}/>
                </Dialog>
            </Portal>
            <div
                ref={datePickerRef}
                className={`date-picker-layout ${focusState !== SELECTED_FOCUS.NONE ? 'picker-focus' : null}`}
                onClick={datePickerOnClick}
            >
                <div>
                    <input
                        ref={leftInputRef}
                        onFocus={leftInputOnFocus}
                        type={"text"}
                        placeholder={"Start date"}
                    />
                </div>
                <div className={"arrow-svg-wrapper"}>
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
                    <CalendarSvg className={"date-picker-calendar-svg"}/>
                </div>
                <ActiveBar focusState={focusState} inputRef={leftInputRef}/>
            </div>
        </DatePickerContext.Provider>
    )
}

export default DateRangePicker;