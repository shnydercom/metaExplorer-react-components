import * as React from 'react';

const CSS_CLASSNAME = "minitoolbox-minibutton"

export interface MiniButtonProps {
	iconSrc: string;
	onClick: (event) => void;
	onMouseEnter?: (event) => void;
	onMouseOut?: (event) => void;
	className?: string;
	btnRef?;
	btnStyle?:React.CSSProperties;
}

export const MiniButton: React.FC<MiniButtonProps> = (props) => {
	return (
		<div ref={props.btnRef} style={props.btnStyle} className={`${CSS_CLASSNAME} ${props.className}`} 
		onMouseEnter={props.onMouseEnter}
		onMouseOut={props.onMouseOut}
		onClick={props.onClick}>
			<div className={`${CSS_CLASSNAME}-display`}>
				<img src={props.iconSrc}/>
				{props.children}
			</div>
		</div>
	)
}