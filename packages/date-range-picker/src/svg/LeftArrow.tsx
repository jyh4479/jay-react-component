import React, {FunctionComponent} from "react";
import {svgPropsType} from "./types";
import "../index.css"

const LeftArrow: FunctionComponent<svgPropsType> = (props: svgPropsType) => {
    return (
        <svg viewBox="0 0 48 48" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 36L19 24L31 12" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default LeftArrow;