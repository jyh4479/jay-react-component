import React, {FunctionComponent, useState} from "react";
import {SELECT_MODE} from "./data";
import {Calendar, SwapRight} from "./svg";
import "./index.css";

const DateRangePicker: FunctionComponent = () => {

    const [currentDate, setCurrentDate] = useState<number>(new Date().getTime());
    const [selectedStartDate, setSelectedStartDate] = useState<number>(-1);
    const [selectedEndDate, setSelectedEndDate] = useState<number>(-1);
    const [selectMode, setSelectMode] = useState<string>(SELECT_MODE.DAY);

    return (
        <div className={`date-picker-layout`}>
            <div>
                <input type="text" placeholder={"Start date"}/>
            </div>
            <div>
                <SwapRight className={`date-picker-arrow-svg`}/>
            </div>
            <div>
                <input type="text" placeholder={"End date"}/>
            </div>
            <div>
                <Calendar className={`date-picker-calendar-svg`}/>
            </div>
        </div>
    )
}

export default DateRangePicker;