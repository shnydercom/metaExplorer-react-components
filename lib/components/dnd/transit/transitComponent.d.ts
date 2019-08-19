import * as React from 'react';
import { IPositionMap, StylableTransitComponentProps } from "../interfaces";
export interface ContainerState {
    positionMap: IPositionMap;
}
export declare function TransitComponent<TItemType extends string, TData>(props: React.PropsWithChildren<StylableTransitComponentProps<TItemType, TData>>): JSX.Element;
