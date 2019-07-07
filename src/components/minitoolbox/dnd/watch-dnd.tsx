import * as React from 'react'
import { useDrag, DragPreviewImage, useDragLayer } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { MiniButtonProps } from '../opened-menus/mini-button';
import WatchDragLayer from './watch-draglayer';
import { Watch } from '../opened-menus/watch';


const watchBtnProps: MiniButtonProps[] =
	[
		{
			iconSrc: "/static/move.svg",
			onClick: () => { }
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


const style: React.CSSProperties = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'grey',
	width: '100%',
	height: '100%'
}

const handleStyle: React.CSSProperties = {
	backgroundColor: 'green',
	width: '1rem',
	height: '1rem',
	display: 'inline-block',
	marginRight: '0.75rem',
	cursor: 'move',
}

export const WatchDND: React.FC = () => {
	const [{ opacity, height }, drag, preview] = useDrag({
		item: { type: ItemTypes.MiniToolBox },
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0 : 1,
			height: monitor.isDragging() ? 0 : '',
		}),
	})

	watchBtnProps[0].btnRef = drag;
	//watchBtnProps[0].btnStyle = { opacity, height };
	return (
		//<div  style={{ ...style, opacity }}>
		/*<div ref={drag} style={handleStyle} />*/
		<>
			<WatchDragLayer />
			<div ref={preview} style={{ height: 0, width: 0 }}></div>
			<Watch watchStyle={{ opacity, height }} btnProps={watchBtnProps} />
		</>
		//	</div>
	)
}
export default WatchDND;
