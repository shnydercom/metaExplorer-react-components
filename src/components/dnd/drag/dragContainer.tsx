import * as React from 'react';
import { useDrag } from 'react-dnd';
import { StylableDragItemProps } from '../interfaces';

export function DragContainer<TItemType extends string>
	(props: React.PropsWithChildren<StylableDragItemProps<TItemType>>) {
	const [{ isDragging }, drag, preview] = useDrag({
		item: {
			id: props.id,
			left: props.left,
			top: props.top,
			type: props.type
		},
		collect: monitor => ({
			isDragging: monitor.isDragging()
		}),
		end(item, monitor) {
			console.log(item)
			console.log(monitor)
		}
	})
	const returnContent = () => (
		props.children
	)
	if (props.isWithDragHandle) {
		return <div ref={preview}
			className={`${props.className} ${isDragging ? props.className + '-drag' : ''}`}
			style={{
				left: props.left,
				top: props.top,
				//position: 'absolute'
			}}>
			<div ref={drag} className={`${props.className + '-handle'}`}>
			</div>
			{returnContent()}
		</div>
	} else {
		return <div ref={drag}
			className={`${props.className} ${isDragging ? props.className + '-drag' : ''}`}
			style={{
				left: props.left,
				top: props.top,
				//position: 'absolute'
			}}>
			{/*<div ref={preview} style={{ height: 0, width: 0 }}>*/}
			{returnContent()}
		</div >
	}
}