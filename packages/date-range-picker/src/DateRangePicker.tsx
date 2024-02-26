import React, {FunctionComponent, useRef} from "react";
import {Calendar as CalendarSvg, SwapRight as SwapRightSvg} from "./svg";
import Calendar from "./Calendar";
import "./index.css";
import {Portal} from "@jay-react-component/portal";
import {usePickerFocusState, useSelectDateAndTime} from "./hooks";
import DatePickerContext from "./context";
import Dialog from "./Dialog";
import ActiveBar from "./ActiveBar";
import {SELECTED_FOCUS} from "./types/common";

const DateRangePicker: FunctionComponent = () => {

    const dialogRef = useRef<HTMLDivElement>(null);
    const datePickerRef = useRef<HTMLDivElement>(null);
    const leftInputRef = useRef<HTMLInputElement>(null);
    const rightInputRef = useRef<HTMLInputElement>(null);

    const {
        focusState,
        datePickerOnClick,
        leftInputOnFocus,
        rightInputOnFocus,
        setFocusState
    } = usePickerFocusState(datePickerRef, leftInputRef, rightInputRef, dialogRef);

    //TODO: start time, end time 설정에 대한 hook
    const {
        selectedStartTimestamp,
        selectedEndTimestamp,
        onClickDate,
        onClickHour,
        onClickMinute,
        onClickSecond
    } = useSelectDateAndTime(focusState, setFocusState);

    return (
        <DatePickerContext.Provider value={{
            selectedStartTimestamp,
            selectedEndTimestamp,
            onClickDate,
            onClickHour,
            onClickMinute,
            onClickSecond
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