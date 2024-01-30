import {RefObject, useEffect, useState} from "react";

const useDialogComponentPosition = (parentComponentRef: RefObject<HTMLElement>, dialogComponentRef: RefObject<HTMLElement>) => {

    const [componentPosition, setComponentPosition] = useState({x: 0, y: 0});
    const [componentDirection, setComponentDirection] = useState("below");

    const updateComponentPosition = () => {
        if (!parentComponentRef.current || !dialogComponentRef.current) return;

        const parentElementInfo = parentComponentRef.current?.getBoundingClientRect();
        const dialogElementInfo = dialogComponentRef.current?.getBoundingClientRect();

        const dialogComponentPosition = {x: parentElementInfo.x, y: parentElementInfo.y + parentElementInfo.height};

        setComponentPosition(dialogComponentPosition);
    }

    useEffect(() => {
        updateComponentPosition();
        const handleResize = () => {
            updateComponentPosition();
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }

    }, [parentComponentRef, dialogComponentRef])

    return componentPosition;
}

export default useDialogComponentPosition;