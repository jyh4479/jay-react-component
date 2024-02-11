import React, {FunctionComponent, RefObject, useEffect, useRef, useState} from "react";
import "./index.css";
import {FocusState, SELECTED_FOCUS} from "../types/common";

type PropsType = {
    focusState: FocusState
    inputRef: RefObject<HTMLInputElement>
}

const ActiveBar: FunctionComponent<PropsType> = (props) => {

    const {focusState, inputRef} = props;

    const [width, setWidth] = useState<number>(0);
    const barPosition = useRef<number>(11);

    useEffect(() => {
        if (!inputRef.current) return;

        setWidth(inputRef.current.getBoundingClientRect().width);
    }, [inputRef.current])

    const barPositionByFocus = (focusedState: FocusState) => {

        // 11 is padding value
        if (focusedState === SELECTED_FOCUS.LEFT) barPosition.current = 11;

        // (43 + width) is sum of padding, svg, input width
        else if (focusedState === SELECTED_FOCUS.RIGHT) barPosition.current = 43 + width;

        return barPosition.current;
    }

    return (
        <div className={`active-bar ${focusState === SELECTED_FOCUS.NONE ? "hide" : null}`}
             style={{width: `${width}px`, left: `${barPositionByFocus(focusState)}px`}}/>
    )
}

export default ActiveBar;