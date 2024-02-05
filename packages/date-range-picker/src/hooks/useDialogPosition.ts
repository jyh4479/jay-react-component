import {Direction, Position, Size} from "../types/common";
import {useEffect, useLayoutEffect, useState} from "react";

const DIALOG_GAP: number = 12;

const useDialogPosition = (parentComponentPosition: Position, parentComponentSize: Size, dialogSize: Size) => {

    const [dialogPosition, setDialogPosition] = useState<Position>({x: 0, y: 0});
    const [dialogDirection, setDialogDirection] = useState<Direction>("BELOW");

    const getPosition = () => {

        const scrollYPosition = window.scrollY;

        switch (dialogDirection) {
            case "ABOVE":
                return {
                    x: parentComponentPosition.x,
                    y: parentComponentPosition.y - dialogSize.h + scrollYPosition - DIALOG_GAP
                };
            case "BELOW":
                return {
                    x: parentComponentPosition.x,
                    y: parentComponentPosition.y + parentComponentSize.h + scrollYPosition + DIALOG_GAP
                };
        }
    }

    useLayoutEffect(() => {
        setDialogPosition(getPosition());
    }, [parentComponentPosition, parentComponentSize, dialogSize, dialogDirection])

    useEffect(() => {

        const scrollYPosition = window.scrollY;
        const scrollEvent = () => {
            // console.log(parentComponentPosition.y + parentComponentSize.h + scrollYPosition + DIALOG_GAP);
        }

        window.addEventListener("scroll", scrollEvent);

        return () => {
            window.removeEventListener("scroll", scrollEvent);
        }
    }, [parentComponentPosition, parentComponentSize])

    return dialogPosition;
}

export default useDialogPosition;