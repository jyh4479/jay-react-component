import React, {useContext} from "react";
import TimeSelectorComponent from "../TimeSelectorComponent";
import DatePickerContext from "../../../../../context";

const MinuteSelector = () => {

    const {onClickMinute} = useContext(DatePickerContext);
    const minuteList = Array.from({length: 60}, (_, index) => index);

    return (
        <TimeSelectorComponent timeType={"MINUTE"} timeList={minuteList} timeOnClick={onClickMinute}/>
    )
}

export default MinuteSelector;