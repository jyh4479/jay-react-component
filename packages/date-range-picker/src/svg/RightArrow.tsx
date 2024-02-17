import React, {FunctionComponent} from "react";
import {svgPropsType} from "./types";
import "../index.css"

const RightArrow: FunctionComponent<svgPropsType> = (props: svgPropsType) => {
    return (
        <svg viewBox="0 0 48 48" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12L31 24L19 36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default RightArrow;