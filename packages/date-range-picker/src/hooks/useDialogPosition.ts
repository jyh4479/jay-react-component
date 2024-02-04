import {Direction, Position, Size} from "../types/common";
import {useLayoutEffect, useState} from "react";

const useDialogPosition = (parentComponentPosition: Position, parentComponentSize: Size, dialogSize: Size, direction: Direction = "ABOVE") => {

    const [dialogPosition, setDialogPosition] = useState({x: 0, y: 0});

    const getPosition = () => {

        const scrollYPosition = window.scrollY;

        switch (direction) {
            case "ABOVE":
                return {x: parentComponentPosition.x, y: parentComponentPosition.y - dialogSize.h + scrollYPosition};
            case "BELOW":
                return {
                    x: parentComponentPosition.x,
                    y: parentComponentPosition.y + parentComponentSize.h + scrollYPosition
                }
        }
    }

    useLayoutEffect(() => {
        setDialogPosition(getPosition());
    }, [parentComponentPosition, parentComponentSize, dialogSize, dialogSize])

    return dialogPosition;
}

export default useDialogPosition;