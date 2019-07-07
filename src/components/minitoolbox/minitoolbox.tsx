import * as React from 'react';
import { useDrag } from 'react-dnd'
import { MiniButton, MiniButtonProps } from './opened-menus/mini-button';
import ItemTypes from './dnd/ItemTypes';
import { Watch } from './opened-menus/watch';
import { Phone } from './opened-menus/phone';
import MiniToolBoxDragLayer from './dnd/minitoolbox-draglayer';

export const CSS_CLASSNAME = "minitoolbox"

export interface MiniToolBoxProps {
	className?: string;
	style?: React.CSSProperties;
}

type ActiveStates = "phoneEd" | "watchEd";

export const MiniToolBox: React.FC<MiniToolBoxProps> = (props: MiniToolBoxProps) => {

	const [isMini, setIsMini] = React.useState(false);
	const [activeEditor, setActiveEditor] = React.useState<ActiveStates>("phoneEd");

	const [{ isDragging }, drag, preview] = useDrag({
		item: { type: ItemTypes.MiniToolBox },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		}),
	})

	const phoneBtnProps: MiniButtonProps[] =
		[
			{
				iconSrc: "/static/minimize.svg",
				onClick: () => {
					console.log(isMini);
					toggleMini();
				}
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

	const toggleMini = () =>
		setIsMini(!isMini);
	const watchBtnProps: MiniButtonProps[] =
		[
			{
				iconSrc: "/static/minimize.svg",
				onClick: () => {
					toggleMini();
					console.log(isMini);
				}
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

	const renderContent = (isDragLayer: boolean) => {
		return (<div className={`${CSS_CLASSNAME}-enclosing ${className ? className : ''}`}>
			<div
				onClick={isMini ? (e) => toggleMini() : (e) => { }} 			 
				className={`
			${CSS_CLASSNAME}-watchcontainer
			${CSS_CLASSNAME}-watchcontainer-${isMini ? 'mini' : 'max'}
			${CSS_CLASSNAME}-watchcontainer-${activeEditor === 'watchEd' ? 'active' : 'inactive'}
			`}>
				<Watch btnProps={watchBtnProps} watchClass={`${CSS_CLASSNAME}-${isMini ? 'mini' : 'max'}`} />
			</div>
			<div
				onClick={isMini ? (e) => toggleMini() : (e) => { }}
				className={`
			${CSS_CLASSNAME}-phonecontainer
			${CSS_CLASSNAME}-phonecontainer-${isMini ? 'mini' : 'max'} 
			${CSS_CLASSNAME}-phonecontainer-${activeEditor === 'phoneEd' ? 'active' : 'inactive'}
			`}>
				<Phone btnProps={phoneBtnProps} phoneClass={`${CSS_CLASSNAME}-${isMini ? 'mini' : 'max'} `} />
			</div>
			{isDragLayer
				? <MiniButton className="minitoolbox-dndhandle" iconSrc="/static/move.svg" onClick={() => { }} />
				: <MiniButton className="minitoolbox-dndhandle" iconSrc="/static/move.svg" btnRef={drag} onClick={() => { }} />
			}
		</div>);
	}

	const { className } = props;
	return (
		<>
			<MiniToolBoxDragLayer>{renderContent(true)}</MiniToolBoxDragLayer>
			<div ref={preview} style={{ height: 0, width: 0 }}></div>
			{isDragging ? null : renderContent(false)}
		</>
	);
}