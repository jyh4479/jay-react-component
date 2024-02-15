import React from "react";
import "./index.css";
import DateRangeQuickSelector from "./DateRangeQuickSelector";
import DaySelectorHeader from "./SelectorHeader/DaySelectorHeader";

const DayPicker = () => {
    return (
        <div className={"day-picker-layout"}>

            <div className={"left-layout"}>
                <DateRangeQuickSelector/>
            </div>

            <div className={"right-layout"}>
                <div className={"picker-body"}>
                    <div className={"day-picker-content-layout"}>
                        <div className={"content-header"}>
                            <DaySelectorHeader/>
                        </div>
                        <div className={"content-body"}></div>
                    </div>
                    <div className={"time-picker-content-layout"}>
                        <div className={"content-header"}></div>
                        <div className={"content-body"}></div>
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