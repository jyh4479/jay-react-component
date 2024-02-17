import React from "react";
import "./index.css";
import DateRangeQuickSelector from "./DateRangeQuickSelector";
import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";

const DayPicker = () => {
    return (
        <div className={"day-picker-layout"}>

            <div className={"left-layout"}>
                <DateRangeQuickSelector/>
            </div>

            <div className={"right-layout"}>
                <div className={"picker-body"}>
                    <div className={"day-picker-content-layout"}>
                        <DateSelector/>
                    </div>
                    <div className={"time-picker-content-layout"}>
                        <TimeSelector/>
                    </div>
                </div>

                <div className={"picker-footer"}>
                    <button>ok</button>
                </div>
            </div>
        </div>
    )
}

export default DayPicker;