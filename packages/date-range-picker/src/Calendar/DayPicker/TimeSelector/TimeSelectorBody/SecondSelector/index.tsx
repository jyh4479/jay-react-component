import React, {useContext} from "react";
import TimeSelectorComponent from "../TimeSelectorComponent";
import DatePickerContext from "../../../../../context";

const SecondSelector = () => {

    const {onClickSecond} = useContext(DatePickerContext);
    const secondList = Array.from({length: 60}, (_, index) => index);

    return (
        <TimeSelectorComponent timeType={"SECOND"} timeList={secondList} timeOnClick={onClickSecond}/>
    )
}

export default SecondSelector;