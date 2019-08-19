import { ReactNode } from "react";

export type SourceBehaviour = "sGone" | "sCopy";
export type TargetBehaviour = "tGone" | "tCopy";

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

export interface StylableDragItemProps<TItemType extends string, TData>
	extends DragItem<TItemType, TData> {
	className: string;
	onOverDragHandle?: () => void;
	onOutDragHandle?: () => void;
	isWithDragHandle: boolean;
}

export interface ITransitComp<TItemType extends string, TData> {
	forType: TItemType,
	componentFactory: IComponentFactory<TItemType, TData>
}

export interface StylableTransitComponentProps<TItemType extends string, TData> {
	transitComponents: ITransitComp<TItemType, TData>[];
	className: string;
	style?: React.CSSProperties;
}
/*
export const dragItemsToPositionMap = (inputs: DragItem<any>[]): IPositionMap => {
	const rv: IPositionMap = {};
	inputs.forEach((dItm, idx) => {
		rv[dItm.id] = { top: dItm.top, left: dItm.left }
	})
	return rv;
}*/

export type IComponentFactory<TItemType extends string, TData> = (dragItem: DragItem<TItemType, TData>) => React.FC<DragItem<TItemType, TData>>;

export type IPosition = { top: number; left: number; };
export type IPositionMap = {
	[key: string]: {
		pos: IPosition,
		child: ReactNode
	}
};