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
	position: 'absolute'
}

export function DragContainer<TItemType extends string>
	(props: React.PropsWithChildren<StylableDragItemProps<TItemType>>) {
	let preview = null;
	const [{ isDragging }, drag, /*preview*/] = useDrag<DragItem<TItemType>, DragItem<TItemType>, CollectedProps>({
		item: {
			id: props.id,
			top: props.top,
			left: props.left,
			type: props.type,
			sourceBhv: props.sourceBhv,
			targetBhv: props.targetBhv
		},
		collect: monitor => ({
			isDragging: monitor.isDragging()
		}),
		end(item, monitor) {
			console.log(item)
			if (monitor.didDrop()) {
				console.log(monitor.didDrop())
			}else{
				
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
	if (props.isWithDragHandle) {
		return <div ref={preview}
			className={`${props.className} ${isDragging ? props.className + '-drag' : ''}`}
			style={{
				left: props.left,
				top: props.top
				//position: 'absolute'
			}}>
			<div className={`${props.className + '-handle'}`}>
				<div ref={drag} style={dragOpacityDummy}></div>
			</div>
			{returnContent()}
		</div>
	} else {
		return <div
			className={`${props.className} ${isDragging ? props.className + '-drag' : ''}`}
			style={{
				left: props.left,
				top: props.top
				//position: 'absolute'
			}}>
			<div style={{ position: 'relative' }}>
				<div ref={drag} style={dragOpacityDummy}>{returnSourceBehaviour()}</div>
				{returnSourceBehaviour()}
			</div>
		</div >
	}
}