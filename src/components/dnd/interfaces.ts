export type SourceBehaviour = "sGone" | "sCopy";
export type TargetBehaviour = "tGone" | "tCopy";

export interface DragItem<TItemType extends string> {
	type: TItemType;
	id: string;
	top: number;
	left: number;
	data?: any;
}

export interface StylableDragItemProps<TItemType extends string>
	extends DragItem<TItemType> {
	className: string;
	onOverDragHandle?: () => void;
	onOutDragHandle?: () => void;
	sourceBhv: SourceBehaviour;
	targetBhv: TargetBehaviour;
}

export const dragItemsToPositionMap = (inputs: DragItem<any>[]): IPositionMap => {
	const rv: IPositionMap = {};
	inputs.forEach((dItm, idx) => {
		rv[dItm.id] = { top: dItm.top, left: dItm.left }
	})
	return rv;
}

export type IPosition = { top: number; left: number; };
export type IPositionMap = { [key: string]: IPosition };