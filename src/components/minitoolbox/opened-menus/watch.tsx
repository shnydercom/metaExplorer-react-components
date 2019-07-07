import * as React from 'react';
import { MiniButton, MiniButtonProps } from './mini-button';

export const CSS_CLASSNAME = "minitoolbox-watchmenu"

export interface WatchProps {
	btnProps: MiniButtonProps[];
	watchStyle?;
}

export const Watch: React.FC<WatchProps> = (props) => {
	return (
		<div className={`${CSS_CLASSNAME}`} style={props.watchStyle}>
			{props.btnProps.map((btnProp, idx) =>
				<MiniButton className={`${CSS_CLASSNAME}-btn-${idx}`} key={`minibtn-${idx}`} {...btnProp} />)}
			<div className={`${CSS_CLASSNAME}-preview`}>
				{props.children}
			</div>
		</div>
	)
}