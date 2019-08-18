import { ReactNode } from "react";

export type SourceBehaviour = "sGone" | "sCopy";
export type TargetBehaviour = "tGone" | "tCopy";

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

export interface StylableDragItemProps<TItemType extends string>
	extends DragItem<TItemType> {
	className: string;
	onOverDragHandle?: () => void;
	onOutDragHandle?: () => void;
	isWithDragHandle: boolean;
}

export interface ITransitComp<TItemType extends string> {
	forType: TItemType,
	componentFactory: IComponentFactory<TItemType>
}

export interface StylableTransitComponentProps<TItemType extends string> {
	transitComponents: ITransitComp<TItemType>[];
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

export type IComponentFactory<TItemType extends string> = (dragItem: DragItem<TItemType>) => React.FC<DragItem<TItemType>>;

export type IPosition = { top: number; left: number; };
export type IPositionMap = {
	[key: string]: {
		pos: IPosition,
		child: ReactNode
	}
};