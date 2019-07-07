import * as React from 'react'
import { useDrag, DragPreviewImage } from 'react-dnd'
import ItemTypes from './ItemTypes'
import { MiniButtonProps } from '../opened-menus/mini-button';
import { Phone } from '../opened-menus/phone';


const btnProps: MiniButtonProps[] =
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

export const PhoneDND: React.FC = () => {
	const [{ opacity }, drag, preview] = useDrag({
		item: { type: ItemTypes.MiniToolBox },
		collect: monitor => ({
			opacity: monitor.isDragging() ? 1 : 1,
		}),
	})

	btnProps[0].btnRef = drag;

	return (
		//<div  style={{ ...style, opacity }}>
		/*<div ref={drag} style={handleStyle} />*/
		<>
			<Phone phoneRef={preview} btnProps={btnProps} />
		</>
		//	</div>
	)
}
export default PhoneDND;
