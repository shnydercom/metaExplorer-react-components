import * as React from 'react';
import { DragItem, IPosition } from "../interfaces";
export interface StylableDropContainerProps<TItemType extends string> {
    onItemDropped?: (droppedItem: DragItem<TItemType>, position: IPosition) => void;
    acceptedItemTypes: TItemType[] | TItemType;
    onlyAppearOnDrag: boolean;
    className: string;
    style?: React.CSSProperties;
}
export declare function DropContainer<TItemType extends string>(props: React.PropsWithChildren<StylableDropContainerProps<TItemType>>): JSX.Element;
