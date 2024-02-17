import React from "react";
import "./index.css";
import {getDateOfCurrentMonth} from "../../../../../utils/date";

const DateOfMonthDisplay = () => {

    const currentDateTimestampArray: number[] = getDateOfCurrentMonth(new Date().getTime());

    return (
        <div className={"date-display-layout"}>
            {currentDateTimestampArray.map(timestamp => {
                return (
                    <div key={`date-key-${timestamp}`} className={"date-display"}>
                        <div className={"date-inner-display"}>
                            {new Date(timestamp).getDate()}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DateOfMonthDisplay;