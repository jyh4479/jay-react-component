import React, {FunctionComponent} from "react";
import {svgPropsType} from "./types";
import "../index.css"

const DoubleLeftArrow: FunctionComponent<svgPropsType> = (props: svgPropsType) => {
    return (
        <svg viewBox="0 0 48 48" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 36L12 24L24 12" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M36 36L24 24L36 12" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default DoubleLeftArrow;