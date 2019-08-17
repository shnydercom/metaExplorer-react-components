import * as React from 'react';
import { useDrag } from 'react-dnd'
import { MiniButton, MiniButtonProps } from '../opened-menus/mini-button';
import { ItemTypes } from './ItemTypes';
import { Watch } from '../opened-menus/watch';
import { Phone } from '../opened-menus/phone';
import DragLayerWChildren from './draglayer-w-children';
import { DragItem } from './interfaces';

export const CSS_CLASSNAME = "minitoolbox"

export interface MiniToolBoxProps {
	className: string;
}

type ActiveStates = "phoneEd" | "watchEd";

export const MiniToolBox: React.FC<MiniToolBoxProps> = (props) => {

	const [isMini, setIsMini] = React.useState(false);
	const [isMiniOpen, setIsMiniOpen] = React.useState(false);
	const [activeEditor, setActiveEditor] = React.useState<ActiveStates>("phoneEd");

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

	const toggleMini = () => {
		setIsMini(!isMini);
		if (!isMini) setIsMiniOpen(false);
	}

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

	const renderContent = () => {
		return (
			<div
				onMouseOver={isMini ? (e) => setIsMiniOpen(true) : (e) => { }}
				onMouseOut={isMini ? (e) => {
					setIsMiniOpen(false);
				} : (e) => { }}
				className={`${CSS_CLASSNAME}-enclosing ${className ? className : ''}`}
			>
				<div
					onClick={isMini ? (e) => {
						setActiveEditor("watchEd");
						toggleMini();
					} : (e) => { }}
					className={`
			${CSS_CLASSNAME}-watchcontainer
			${CSS_CLASSNAME}-watchcontainer-${isMini ? 'mini' : 'max'}
			${CSS_CLASSNAME}-watchcontainer-${activeEditor === 'watchEd' ? 'active' : 'inactive'}
			${isMini ? isMiniOpen && activeEditor !== 'watchEd' ? 'mini-open' : 'mini-closed' : ''}
			`}
					style={{ pointerEvents: 'all' }}>
					<Watch btnProps={watchBtnProps} watchClass={`${CSS_CLASSNAME}-${isMini ? 'mini' : 'max'}`} >
						{!isMini && activeEditor === 'watchEd' ? props.children : null}
					</Watch>
				</div>
				<div
					onClick={isMini ? (e) => {
						setActiveEditor("phoneEd");
						toggleMini();
					} : (e) => { }}
					className={`
			${CSS_CLASSNAME}-phonecontainer
			${CSS_CLASSNAME}-phonecontainer-${isMini ? 'mini' : 'max'} 
			${CSS_CLASSNAME}-phonecontainer-${activeEditor === 'phoneEd' ? 'active' : 'inactive'}
			${isMini ? isMiniOpen && activeEditor !== 'phoneEd' ? 'mini-open' : 'mini-closed' : ''}
			`}
					style={{ pointerEvents: 'all' }}>
					<Phone btnProps={phoneBtnProps} phoneClass={`${CSS_CLASSNAME}-${isMini ? 'mini' : 'max'} `}>
						{!isMini && activeEditor === 'phoneEd' ? props.children : null}
					</Phone>
				</div>
			</div>);
	}
	const { className } = props;
	return (
		<div className={`${CSS_CLASSNAME}-root`}>
			{renderContent()}
		</div>
	);
}