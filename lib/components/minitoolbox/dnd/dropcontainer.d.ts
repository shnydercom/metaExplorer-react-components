import * as React from 'react';
import { DragItem } from './interfaces';
export interface ContainerProps {
    isDropZoneClickthrough: boolean;
    onBlockDropped?: (blockDragItem: DragItem) => void;
}
export interface ContainerState {
    boxes: {
        [key: string]: {
            top: number;
            left: number;
        };
    };
}
export declare const DropContainer: React.FC<ContainerProps>;
