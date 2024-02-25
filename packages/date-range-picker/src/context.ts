import {createContext} from "react";

export interface DatePickerContextType {
    getCurrentDate: () => number;
}

const datePickerDefaultContext = {
    getCurrentDate: () => 0
}

const DatePickerContext = createContext<DatePickerContextType>(datePickerDefaultContext);

export default DatePickerContext;
