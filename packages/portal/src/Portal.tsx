import React, {FunctionComponent, ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";

interface propsType {
    children?: ReactNode
}

const PORTAL_ID = "jay-portal-root";

const Portal: FunctionComponent<propsType> = (props: propsType) => {

    const {children} = props;

    let portalRoot = document.getElementById(PORTAL_ID);

    if (!portalRoot) {
        portalRoot = document.createElement("div");
        portalRoot.id = PORTAL_ID;
        document.body.appendChild(portalRoot);
    }

    const el = document.createElement("div");

    useEffect(() => {
        portalRoot?.appendChild(el);
        return () => {
            portalRoot?.removeChild(el);
        };
    }, []);

    return createPortal(children, el);
};

export default Portal;