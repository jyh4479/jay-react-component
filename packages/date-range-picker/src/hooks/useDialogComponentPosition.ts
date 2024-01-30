import {RefObject, useEffect, useState} from "react";

const useDialogComponentPosition = (parentComponentRef: RefObject<HTMLElement>, dialogComponentRef: RefObject<HTMLElement>) => {

    const [componentPosition, setComponentPosition] = useState({x: 0, y: 0});
    const [componentDirection, setComponentDirection] = useState("below1");

    const updateComponentPosition = () => {
        if (!parentComponentRef.current || !dialogComponentRef.current) return;

        const parentElementInfo = parentComponentRef.current?.getBoundingClientRect();
        const dialogElementInfo = dialogComponentRef.current?.getBoundingClientRect();

        const dialogComponentPosition = componentDirection === "below"
            ? {x: parentElementInfo.x, y: parentElementInfo.y + parentElementInfo.height + window.scrollY}
            : {x: parentElementInfo.x, y: parentElementInfo.y - dialogElementInfo.height + window.scrollY};

        console.log(dialogComponentPosition);

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

    }, [parentComponentRef, dialogComponentRef, componentDirection])

    return componentPosition;
}

export default useDialogComponentPosition;