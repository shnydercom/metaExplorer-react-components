import * as React from 'react';
import { IPositionMap, StylableTransitComponentProps } from "../interfaces";
export interface ContainerState {
    positionMap: IPositionMap;
}
export declare function TransitComponent<TItemType extends string>(props: React.PropsWithChildren<StylableTransitComponentProps<TItemType>>): JSX.Element;
