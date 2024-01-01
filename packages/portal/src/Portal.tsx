import React, {FunctionComponent, ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";

export interface PortalProps {
    children?: ReactNode
}

const PORTAL_ID = "jay-portal-root";

export const Portal: FunctionComponent<PortalProps> = (props: PortalProps) => {

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