import * as React from 'react';
import { useDrag } from 'react-dnd';
import { StylableDragItemProps, DragItem } from '../interfaces';

interface CollectedProps {
	isDragging: boolean;
}

const dragOpacityDummy: React.CSSProperties = {
	width: '100%',
	height: '100%',
	opacity: 0,
	left: 0,
	top: 0,
	position: 'absolute',
	pointerEvents: "all",
	zIndex: 99,
	backgroundColor: 'blue',
	cursor: 'move'
}

export function DragContainer<TItemType extends string, TData>
	(props: React.PropsWithChildren<StylableDragItemProps<TItemType, TData>>) {
	let preview = null;
	const [{ isDragging }, drag, /*preview*/] = useDrag<DragItem<TItemType, TData>, DragItem<TItemType, TData>, CollectedProps>({
		item: {
			id: props.id,
			type: props.type,
			sourceBhv: props.sourceBhv,
			targetBhv: props.targetBhv,
			data: props.data
		},
		collect: monitor => ({
			isDragging: monitor.isDragging()
		}),
		end(item, monitor) {
			if (monitor.didDrop()) {
				console.log(monitor.didDrop())
			} else {

				console.log(monitor.didDrop())
			}
		}
	})
	const returnContent = () => (
		props.children
	);

	const returnSourceBehaviour = () => {
		if (isDragging) {
			switch (props.sourceBhv) {
				case 'sGone':
					console.log("gone")
					return <div ref={preview} style={{ height: 0, width: 0 }}></div>
				case 'sCopy':
				//fallthrough on purpose
				default:
					break;
			}
		}
		return returnContent();
	}

	const dragStyle: React.CSSProperties = {
		pointerEvents: isDragging || props.isTransitDummy
			? 'none'
			: 'all',
		left: props.dragOrigin.left,
		top: props.dragOrigin.top
	};
	const dragOpacityDummyConditional: React.CSSProperties = {
		...dragOpacityDummy,
		pointerEvents: isDragging || props.isTransitDummy ? 'none' : 'all'
	};
	if (props.isWithDragHandle) {
		return <div ref={preview}
			style={dragStyle}
			className={`${props.className} ${isDragging ? props.className + '-drag' : ''}`}>
			<div className={`${props.className + '-handle'}`}>
				<div ref={drag} style={dragOpacityDummyConditional}></div>
			</div>
			{returnContent()}
		</div>
	} else {
		return <div
			style={dragStyle}
			className={`${props.className} ${isDragging ? props.className + '-drag' : ''}`}>
			<div style={{ position: 'relative' }}>
				{returnSourceBehaviour()}
				<div ref={drag} style={dragOpacityDummyConditional}>{returnSourceBehaviour()}</div>
			</div>
		</div >
	}
}