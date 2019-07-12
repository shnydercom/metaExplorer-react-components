import * as React from 'react';
export interface ContainerProps {
    isDropZoneClickthrough: boolean;
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
