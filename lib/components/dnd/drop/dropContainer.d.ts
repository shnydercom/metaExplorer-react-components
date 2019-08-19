import * as React from 'react';
import { DragItem, IPosition } from "../interfaces";
export interface StylableDropContainerProps<TItemType extends string, TData> {
    onItemDropped?: (droppedItem: DragItem<TItemType, TData>, position: IPosition) => void;
    acceptedItemTypes: TItemType[] | TItemType;
    onlyAppearOnDrag: boolean;
    className: string;
    style?: React.CSSProperties;
}
export declare function DropContainer<TItemType extends string, TData>(props: React.PropsWithChildren<StylableDropContainerProps<TItemType, TData>>): JSX.Element;
