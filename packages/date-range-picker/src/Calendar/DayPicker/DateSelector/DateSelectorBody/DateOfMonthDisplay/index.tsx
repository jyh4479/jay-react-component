import React, {useContext} from "react";
import "./index.css";
import {getDateOfCurrentMonth, isToday} from "../../../../../utils/date";
import DatePickerContext from "../../../../../context";

const DateOfMonthDisplay = () => {

    const {onClickDate} = useContext(DatePickerContext);
    const currentDateTimestampArray: number[] = getDateOfCurrentMonth(new Date().getTime());

    return (
        <div className={"date-display-layout"}>
            {currentDateTimestampArray.map(timestamp => {
                return (
                    <div key={`date-key-${timestamp}`} className={"date-display"}
                         onClick={() => onClickDate(timestamp)}>
                        <div className={`date-inner-display ${isToday(timestamp) ? "today" : null}`}>
                            {new Date(timestamp).getDate()}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DateOfMonthDisplay;