import * as React from 'react'
import { DragItem, IPositionMap } from "../interfaces";
import { XYCoord, useDragLayer } from 'react-dnd'

export interface StylableTransitComponentProps<TItemType extends string> {
	onItemDropped?: (droppedItem: DragItem<TItemType>) => void;
	acceptedItemTypes: TItemType[];
	className: string;
	style?: React.CSSProperties;
}

const layerStyles: React.CSSProperties = {
	position: 'absolute',
	pointerEvents: 'none',
	zIndex: 100,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
}

export interface ContainerState {
	positionMap: IPositionMap;
}

function getItemStyles(
	initialOffset: XYCoord | null,
	currentOffset: XYCoord | null,
	initialClientOffset: XYCoord | null,
) {
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none',
		}
	}
	let x = currentOffset.x - initialOffset.x; //- initialClientOffset.x;
	let y = currentOffset.y - initialOffset.y;// - initialClientOffset.y;

	const transform = `translate(${x}px, ${y}px)`
	return {
		transform,
		WebkitTransform: transform,
	}
}

export function TransitComponent<TItemType extends string>
	(props: React.PropsWithChildren<StylableTransitComponentProps<TItemType>>) {
	const {
		itemType,
		isDragging,
		item,
		initialOffset,
		initialClientOffset,
		currentOffset,
	} = useDragLayer(monitor => {
		return {
			item: monitor.getItem(),
			itemType: monitor.getItemType(),
			initialClientOffset: monitor.getInitialClientOffset(),
			initialOffset: monitor.getInitialSourceClientOffset(),
			currentOffset: monitor.getSourceClientOffset(),
			isDragging: monitor.isDragging(),
		}
	}
	)

	function renderItem() {
		/*if (props.includedItemId && item) {
			if (props.includedItemId === (item as DragItem).id) {
				if (props.children) return <>{props.children}</>;
			}
			return null;
		}
		for (let i = 0; i < props.acceptedItemTypes.length; i++) {
			const iInAcceptedItems = props.acceptedItemTypes[i];
			if (iInAcceptedItems === itemType) {
				if (props.children) return <>{props.children}</>;
			}
		}*/
		return null
	}

	if (!isDragging) {
		return null
	}
	return (
		<div style={layerStyles}>
			<div
				style={getItemStyles(initialOffset, currentOffset, initialClientOffset)}
			>
				{renderItem()}
			</div>
		</div>
	)
}
