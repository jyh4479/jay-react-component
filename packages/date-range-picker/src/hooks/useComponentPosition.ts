import {RefObject, useEffect, useState} from "react";

const useComponentPosition = (componentRef: RefObject<HTMLElement>) => {

    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        const componentPosition = componentRef.current?.getBoundingClientRect();
        setPosition({x: componentPosition?.x ?? 0, y: componentPosition?.y ?? 0});
    }, [componentRef])

    return position;
}

export default useComponentPosition;