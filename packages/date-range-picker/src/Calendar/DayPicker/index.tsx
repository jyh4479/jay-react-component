import React from "react";
import "./index.css";
import DateQuickSelector from "./DateQuickSelector";

const DayPicker = () => {
    return (
        <div className={"day-picker-layout"}>

            <div className={"left-layout"}>
                <DateQuickSelector/>
            </div>

            <div className={"right-layout"}>

            </div>
            {/*<DoubleLeftArrow className={"arrow-svg"}/>*/}
            {/*<LeftArrow className={"arrow-svg"}/>*/}
            {/*<RightArrow className={"arrow-svg"}/>*/}
            {/*<DoubleRightArrow className={"arrow-svg"}/>*/}
        </div>
    )
}

export default DayPicker;