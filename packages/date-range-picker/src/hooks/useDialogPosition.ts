import {Direction, Position, Size} from "../types/common";
import {useLayoutEffect, useState} from "react";

const DIALOG_GAP: number = 12;


const useDialogPosition = (parentComponentPosition: Position, parentComponentSize: Size, dialogSize: Size, dialogDirection: Direction = "BELOW") => {

    const [dialogPosition, setDialogPosition] = useState<Record<Direction, Position>>({
        ABOVE: {x: 0, y: 0},
        BELOW: {x: 0, y: 0}
    });

    const getPosition = () => {

        const scrollYPosition = window.scrollY;

        return {
            ABOVE: {
                x: parentComponentPosition.x,
                y: parentComponentPosition.y - dialogSize.h + scrollYPosition - DIALOG_GAP
            },
            BELOW: {
                x: parentComponentPosition.x,
                y: parentComponentPosition.y + parentComponentSize.h + scrollYPosition + DIALOG_GAP
            }
        }
    }

    useLayoutEffect(() => {
        setDialogPosition(getPosition());
    }, [parentComponentPosition, parentComponentSize, dialogSize])

    return dialogPosition[dialogDirection];
}

export default useDialogPosition;