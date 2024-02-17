import React, {FunctionComponent} from "react";
import {svgPropsType} from "./types";
import "../index.css"

const DoubleRightArrow: FunctionComponent<svgPropsType> = (props: svgPropsType) => {
    return (
        <svg viewBox="0 0 48 48" {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12L24 24L12 36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M24 12L36 24L24 36" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default DoubleRightArrow;