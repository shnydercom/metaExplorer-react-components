import * as React from 'react';
export declare const CSS_CLASSNAME = "minitoolbox";
export interface MiniToolBoxProps {
    className: string;
    onMiniChanged?: (isMini: boolean) => void;
    onMaxiClick?: () => void;
    onUpClick?: () => void;
    onActiveStateChanged?: (activeState: ActiveStates) => void;
    isMini?: boolean;
    activeState?: ActiveStates;
}
export declare type ActiveStates = "phoneEd" | "watchEd";
export declare const MiniToolBox: React.FC<MiniToolBoxProps>;
