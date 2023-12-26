import React, {FunctionComponent, useState} from "react";
import {SELECT_MODE} from "./data";

const DateRangePicker: FunctionComponent = () => {

    const [currentDate, setCurrentDate] = useState<number>(new Date().getTime());
    const [selectedStartDate, setSelectedStartDate] = useState<number>(-1);
    const [selectedEndDate, setSelectedEndDate] = useState<number>(-1);
    const [selectMode, setSelectMode] = useState<string>(SELECT_MODE.DAY);

    return (
        <div>Date picker</div>
    )
}

export default DateRangePicker;