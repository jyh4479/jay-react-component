import React, {FunctionComponent, useState} from "react";
import {SELECT_MODE} from "./data";
import {Calendar as CalendarSvg, SwapRight as SwapRightSvg} from "./svg";
import Calendar from "./Calendar";
import "./index.css";
import {Portal} from "@jay-react-component/portal";

const DateRangePicker: FunctionComponent = () => {

    const [currentDate, setCurrentDate] = useState<number>(new Date().getTime());
    const [selectedStartDate, setSelectedStartDate] = useState<number>(-1);
    const [selectedEndDate, setSelectedEndDate] = useState<number>(-1);
    const [selectMode, setSelectMode] = useState<string>(SELECT_MODE.DAY);

    return (
        <>
            <Portal>
                <Calendar/>
            </Portal>
            <div className={`date-picker-layout`}>
                <div>
                    <input type="text" placeholder={"Start date"}/>
                </div>
                <div>
                    <SwapRightSvg className={`date-picker-arrow-svg`}/>
                </div>
                <div>
                    <input type="text" placeholder={"End date"}/>
                </div>
                <div>
                    <CalendarSvg className={`date-picker-calendar-svg`}/>
                </div>
            </div>
        </>
    )
}

export default DateRangePicker;