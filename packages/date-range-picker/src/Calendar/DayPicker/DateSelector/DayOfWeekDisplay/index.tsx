import React from "react";
import "./index.css";

const dayAbbreviations = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const DayOfWeekDisplay = () => {
    return (
        <div className={"day-display-layout"}>
            {dayAbbreviations.map(day => <div key={day} className={"day-display"}>{day}</div>)}
        </div>
    )
}

export default DayOfWeekDisplay;