import * as React from 'react';
import { MiniButtonProps } from '../opened-menus/mini-button';
import { Watch } from '../opened-menus/watch';
import { Phone } from '../opened-menus/phone';

export const CSS_CLASSNAME = "minitoolbox"

export interface MiniToolBoxProps {
	className: string;
	onMiniChanged?: (isMini: boolean) => void;
	onMaxiClick?: () => void;
	onUpClick?: () => void;
	onActiveStateChanged?: (activeState: ActiveStates) => void;
	isMini?: boolean;
	activeState?: ActiveStates;
}

export type ActiveStates = "phoneEd" | "watchEd";

const hiddenIntangibleChildren: React.CSSProperties = {
	height: "100px",
	width: "100px",
	visibility: "hidden",
	pointerEvents: "none",
	opacity: 0,
	position: "fixed",
	top: "-200px",
	left: "-200px"
}

export const MiniToolBox: React.FC<MiniToolBoxProps> = (props) => {

	//is it minified or previewing?
	const [isMini, setIsMini] = React.useState(false);
	//when hovering, opens up the phone/watch selection
	const [isMiniOpen, setIsMiniOpen] = React.useState(false);
	//which preview is shown
	const [activeEditor, setActiveEditor] = React.useState<ActiveStates>(props.activeState ? props.activeState : "phoneEd");

	React.useEffect(() => {
		const lIsMiniOpen = props.isMini;
		if (lIsMiniOpen !== undefined && lIsMiniOpen !== null && lIsMiniOpen !== isMini) {
			setIsMini(lIsMiniOpen);
		}
		if(props.activeState){
			setActiveEditor(props.activeState);
		}
	}, [props]);

	const phoneBtnProps: MiniButtonProps[] =
		[
			{
				iconSrc: "/static/minimize.svg",
				onClick: () => {
					props.onMiniChanged && props.onMiniChanged(isMini);
					toggleMini();
				}
			},
			{
				iconSrc: "/static/maximize.svg",
				onClick: () => {
					props.onMaxiClick && props.onMaxiClick();
				}
			},
			{
				iconSrc: "/static/up.svg",
				onClick: () => {
					props.onUpClick && props.onUpClick();
				}
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
					props.onMiniChanged && props.onMiniChanged(isMini);
					toggleMini();
				}
			},
			{
				iconSrc: "/static/maximize.svg",
				onClick: () => {
					props.onMaxiClick && props.onMaxiClick();
				}
			},
			{
				iconSrc: "/static/up.svg",
				onClick: () => {
					props.onUpClick && props.onUpClick();
				}
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
			`}>
					<Watch btnProps={watchBtnProps} watchClass={`${CSS_CLASSNAME}-${isMini ? 'mini' : 'max'}`} >
						{/*!isMini && activeEditor === 'watchEd' ? props.children : null*/}
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
			`}>
					<Phone btnProps={phoneBtnProps} phoneClass={`${CSS_CLASSNAME}-${isMini ? 'mini' : 'max'} `}>
						{/*!isMini && activeEditor === 'phoneEd' ? props.children : null*/}
					</Phone>
				</div>
				{true ? <div style={{}/*hiddenIntangibleChildren*/}>{props.children}</div>: null}
			</div>);
	}
	const { className } = props;
	return (
		<div className={`${CSS_CLASSNAME}-root`}>
			{renderContent()}
		</div>
	);
}