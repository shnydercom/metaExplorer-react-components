import { IPositionMap } from "../interfaces";
import * as React from 'react';
export interface MoveContainerProps {
    className: string;
    positionMap: IPositionMap;
    style?: React.CSSProperties;
}
export declare function MoveContainer(props: MoveContainerProps): JSX.Element;
