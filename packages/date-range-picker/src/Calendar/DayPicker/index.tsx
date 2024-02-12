import React from "react";
import "./index.css";
import {DoubleLeftArrow, DoubleRightArrow, LeftArrow, RightArrow} from "../../svg";

const DayPicker = () => {
    return (
        <div className={"day-picker-layout"}>
            <DoubleLeftArrow className={"arrow-svg"}/>
            <LeftArrow className={"arrow-svg"}/>
            <RightArrow className={"arrow-svg"}/>
            <DoubleRightArrow className={"arrow-svg"}/>
        </div>
    )
}

export default DayPicker;