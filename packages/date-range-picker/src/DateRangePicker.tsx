import React, {FunctionComponent, useRef, useState} from "react";
import {Calendar as CalendarSvg, SwapRight as SwapRightSvg} from "./svg";
import Calendar from "./Calendar";
import "./index.css";
import {Portal} from "@jay-react-component/portal";
import {usePickerFocusState, useSelectDateAndTime} from "./hooks";
import DatePickerContext from "./context";
import Dialog from "./Dialog";
import ActiveBar from "./ActiveBar";
import {DateMode, SELECTED_FOCUS, SELECTED_MODE} from "./types/common";

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

    // TODO: 해당 훅에서 하위 component에서 사용할 함수 정의하기
    const {getCurrentDate} = useSelectDateAndTime(focusState, setFocusState);

    return (
        <DatePickerContext.Provider value={{
            getCurrentDate
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