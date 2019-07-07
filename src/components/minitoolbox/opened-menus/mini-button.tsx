import * as React from 'react';

export const CSS_CLASSNAME = "minitoolbox-minibutton"

export interface MiniButtonProps {
	iconSrc: string;
	onClick: (event) => void;
	className?: string;
	btnRef?;
}

export const MiniButton: React.FC<MiniButtonProps> = (props) => {
	return (
		<div ref={props.btnRef} className={`${CSS_CLASSNAME} ${props.className}`} onClick={props.onClick}>
			<div className={`${CSS_CLASSNAME}-display`}>
				<img src={props.iconSrc}/>
				{props.children}
			</div>
		</div>
	)
}