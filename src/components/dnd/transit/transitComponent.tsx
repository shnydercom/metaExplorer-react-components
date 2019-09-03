import * as React from 'react'
import { IPositionMap, StylableTransitComponentProps } from "../interfaces";
import { XYCoord, useDragLayer } from 'react-dnd'

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
): React.CSSProperties {
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none',
		}
	}

	let x = /* -*/ currentOffset.x; //- initialClientOffset.x + initialOffset.x;
	let y = /* -*/ currentOffset.y; //- initialClientOffset.y + initialOffset.y;

	const transform = `translate(${x}px, ${y}px)`
	return {
		width: 'fit-content',
		transform,
		WebkitTransform: transform,
	}
}

export function TransitComponent<TItemType extends string, TData>
	(props: React.PropsWithChildren<StylableTransitComponentProps<TItemType, TData>>) {
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
		const transitComp = props.transitComponents.find((val) => val.forType === itemType);
		if (transitComp) {
			return transitComp.componentFactory(item)(item);
		}
		return null;
	}

	if (!isDragging) {
		return null
	}
	return (
		<div style={layerStyles} className={props.className}>
			<div
				style={getItemStyles(initialOffset, currentOffset, initialClientOffset)}
			>
				{renderItem()}
			</div>
		</div>
	)
}
