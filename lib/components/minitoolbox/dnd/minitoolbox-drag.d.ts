import * as React from 'react';
import { DragItem } from './interfaces';
export declare const CSS_CLASSNAME = "minitoolbox";
export interface MiniToolBoxProps extends DragItem {
    className?: string;
    style?: React.CSSProperties;
}
export declare const MiniToolBox: React.FC<MiniToolBoxProps>;
