import * as React from 'react';
import { DragItem } from './interfaces';
export declare const CSS_CLASSNAME = "minitoolbox";
export interface StylableDragItemProps extends DragItem {
    className?: string;
    onOverDragHandle?: () => void;
    onOutDragHandle?: () => void;
}
export declare const MiniToolBox: React.FC<StylableDragItemProps>;
