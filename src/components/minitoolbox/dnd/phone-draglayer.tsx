import * as React from 'react'
import { XYCoord, useDragLayer } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { Phone } from '../opened-menus/phone';
import { MiniButtonProps } from '../opened-menus/mini-button';

const phoneBtnProps: MiniButtonProps[] =
	[
		{
			iconSrc: "/static/move.svg",
			onClick: () => { },
			btnStyle: {
				backgroundColor: "#57a1f5c8"
			}
		},
		{
			iconSrc: "/static/minimize.svg",
			onClick: () => { }
		},
		{
			iconSrc: "/static/maximize.svg",
			onClick: () => { }
		},
		{
			iconSrc: "/static/up.svg",
			onClick: () => { }
		}
	];

const layerStyles: React.CSSProperties = {
	position: 'fixed',
	pointerEvents: 'none',
	zIndex: 100,
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
}

function getItemStyles(
	initialOffset: XYCoord | null,
	currentOffset: XYCoord | null
) {
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none',
		}
	}
	let x = currentOffset.x - initialOffset.x
	let y = currentOffset.y - initialOffset.y+46;

	const transform = `translate(${x}px, ${y}px)`
	return {
		transform,
		WebkitTransform: transform,
	}
}

export interface PhoneDragLayerProps {
}

export const PhoneDragLayer: React.FC<PhoneDragLayerProps> = props => {
	const {
		itemType,
		isDragging,
		item,
		initialOffset,
		currentOffset,
	} = useDragLayer(monitor => ({
		item: monitor.getItem(),
		itemType: monitor.getItemType(),
		initialOffset: monitor.getInitialSourceClientOffset(),
		currentOffset: monitor.getSourceClientOffset(),
		isDragging: monitor.isDragging(),
	}))

	function renderItem() {
		switch (itemType) {
			case ItemTypes.MiniToolBox:
				return <Phone btnProps={phoneBtnProps} />
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
				style={getItemStyles(initialOffset, currentOffset)}
			>
				{renderItem()}
			</div>
		</div>
	)
}
export default PhoneDragLayer
