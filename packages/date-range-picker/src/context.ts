import {Context, createContext, Dispatch, SetStateAction} from "react";
import {DateMode} from "./data";

interface DatePickerContextType {
    currentDate: number
    setCurrentDate: Dispatch<SetStateAction<number>>
    selectedStartDate: number,
    setSelectedStartDate: Dispatch<SetStateAction<number>>
    selectedEndDate: number
    setSelectedEndDate: Dispatch<SetStateAction<number>>
    selectMode: string,
    setSelectMode: Dispatch<SetStateAction<DateMode>>
}

const DatePickerContext: Context<DatePickerContextType | undefined> = createContext<DatePickerContextType | undefined>(undefined);

export default DatePickerContext;
