import * as React from 'react'
import { XYCoord, useDragLayer } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

const layerStyles: React.CSSProperties = {
	position: 'absolute',
	pointerEvents: 'none',
	zIndex: 100,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
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

export interface MiniToolBoxDragLayerProps {
}

export const MiniToolBoxDragLayer: React.FC<MiniToolBoxDragLayerProps> = props => {
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
		switch (itemType) {
			case ItemTypes.MiniToolBox:
				if (props.children) return <>{props.children}</>;
			default:
				return null
		}
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
export default MiniToolBoxDragLayer
