import { ReactNode } from "react";
export declare type SourceBehaviour = "sGone" | "sCopy";
export declare type TargetBehaviour = "tGone" | "tCopy";
export interface DragItem<TItemType extends string, TData> {
    type: TItemType;
    id: string;
    sourceBhv: SourceBehaviour;
    targetBhv: TargetBehaviour;
    data: TData;
}
export interface DragItemInternal<TItemType extends string, TData> extends DragItem<TItemType, TData> {
    id: string;
    top: number;
    left: number;
}
export interface StylableDragItemProps<TItemType extends string, TData> extends DragItem<TItemType, TData> {
    className: string;
    onOverDragHandle?: () => void;
    onOutDragHandle?: () => void;
    isWithDragHandle: boolean;
}
export interface ITransitComp<TItemType extends string, TData> {
    forType: TItemType;
    componentFactory: IComponentFactory<TItemType, TData>;
}
export interface StylableTransitComponentProps<TItemType extends string, TData> {
    transitComponents: ITransitComp<TItemType, TData>[];
    className: string;
    style?: React.CSSProperties;
}
export declare type IComponentFactory<TItemType extends string, TData> = (dragItem: DragItem<TItemType, TData>) => React.FC<DragItem<TItemType, TData>>;
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
