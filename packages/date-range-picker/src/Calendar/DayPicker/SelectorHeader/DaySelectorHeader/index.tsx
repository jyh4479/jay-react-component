import React from "react";
import "./index.css";
import {DoubleLeftArrow, DoubleRightArrow, LeftArrow, RightArrow} from "../../../../svg";

const DaySelectorHeader = () => {
    return (
        <div className={"header-layout"}>
            <DoubleLeftArrow className={"arrow-svg"}/>
            <LeftArrow className={"arrow-svg"}/>

            <div className={"header-title-layout"}>
                <div className={"header-title"}>Nov</div>
                <div className={"header-title"}>2023</div>
            </div>

            <RightArrow className={"arrow-svg"}/>
            <DoubleRightArrow className={"arrow-svg"}/>
        </div>
    )
}

export default DaySelectorHeader;