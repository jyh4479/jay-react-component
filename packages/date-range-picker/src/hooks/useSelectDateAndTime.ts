import {FocusState} from "../types/common";
import {Dispatch, SetStateAction, useState} from "react";
import {DatePickerContextType} from "../context";

const useSelectDateAndTime = (focusState: FocusState, setFocusState: Dispatch<SetStateAction<FocusState>>): DatePickerContextType => {

    const [selectedStartTimestamp, setSelectedStartTimestamp] = useState<number>(-1);
    const [selectedEndTimestamp, setSelectedEndTimestamp] = useState<number>(-1);

    const [selectedTempStartTimestamp, setSelectedTempStartTimestamp] = useState<number>(-1);
    const [selectedTempEndTimestamp, setSelectedTempEndTimestamp] = useState<number>(-1);

    //TODO: 시간을 보여줄 상태에 대한 설계 필요

    const getCurrentDate = () => {
        return new Date().getTime();
    }

    return {getCurrentDate};
}

export default useSelectDateAndTime;