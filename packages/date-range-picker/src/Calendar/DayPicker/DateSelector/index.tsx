import React from "react";
import "./index.css";
import DayOfWeekDisplay from "./DayOfWeekDisplay";
import DateOfMonthDisplay from "./DateOfMonthDisplay";

const DateSelector = () => {
    return (
        <div className={"body-layout"}>
            <DayOfWeekDisplay/>
            <DateOfMonthDisplay/>
        </div>
    )
}

export default DateSelector;