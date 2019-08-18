import { ReactNode } from "react";
export declare type SourceBehaviour = "sGone" | "sCopy";
export declare type TargetBehaviour = "tGone" | "tCopy";
export interface DragItem<TItemType extends string> {
    type: TItemType;
    id: string;
    sourceBhv: SourceBehaviour;
    targetBhv: TargetBehaviour;
    data?: any;
}
export interface DragItemInternal<TItemType extends string> extends DragItem<TItemType> {
    id: string;
    top: number;
    left: number;
}
export interface StylableDragItemProps<TItemType extends string> extends DragItem<TItemType> {
    className: string;
    onOverDragHandle?: () => void;
    onOutDragHandle?: () => void;
    isWithDragHandle: boolean;
}
export interface ITransitComp<TItemType extends string> {
    forType: TItemType;
    componentFactory: IComponentFactory<TItemType>;
}
export interface StylableTransitComponentProps<TItemType extends string> {
    transitComponents: ITransitComp<TItemType>[];
    className: string;
    style?: React.CSSProperties;
}
export declare type IComponentFactory<TItemType extends string> = (dragItem: DragItem<TItemType>) => React.FC<DragItem<TItemType>>;
export declare type IPosition = {
    top: number;
    left: number;
};
export declare type IPositionMap = {
    [key: string]: {
        pos: IPosition;
        child: ReactNode;
    };
};
