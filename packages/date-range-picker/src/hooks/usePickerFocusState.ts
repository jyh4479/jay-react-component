import {FocusEventHandler, MouseEventHandler, RefObject, useEffect, useState} from "react";
import {FocusState, SELECTED_FOCUS} from "../data";

const usePickerFocusState = (parentRef: RefObject<HTMLDivElement>, leftInputRef: RefObject<HTMLInputElement>, rightInputRef: RefObject<HTMLInputElement>, dialogRef: RefObject<HTMLDivElement>,) => {

    const [focusState, setFocusState] = useState<FocusState>(SELECTED_FOCUS.NONE);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (e: any) => {
        if (parentRef.current && !parentRef.current.contains(e.target) && dialogRef.current && !dialogRef.current.contains(e.target)) {
            setFocusState(SELECTED_FOCUS.NONE);
        }
    };

    const datePickerOnClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (focusState === SELECTED_FOCUS.LEFT) {
            leftInputRef.current?.focus();
            return;
        }

        if (focusState === SELECTED_FOCUS.RIGHT) {
            rightInputRef.current?.focus();
            return;
        }

        leftInputRef.current?.focus();
    }

    const leftInputOnFocus: FocusEventHandler<HTMLInputElement> = () => {
        setFocusState(SELECTED_FOCUS.LEFT);
    }

    const rightInputOnFocus: FocusEventHandler<HTMLInputElement> = () => {
        setFocusState(SELECTED_FOCUS.RIGHT);
    }

    return {
        focusState,
        datePickerOnClick,
        leftInputOnFocus,
        rightInputOnFocus,
    };
}

export default usePickerFocusState;