import * as React from 'react';
import { MiniButtonProps, MiniButton } from './mini-button';

export const CSS_CLASSNAME = "minitoolbox-phonemenu"

export interface PhoneProps {
	btnProps: MiniButtonProps[];
	phoneRef?;
	phoneStyle?;
	phoneClass?:string;
}

export const Phone: React.FC<PhoneProps> = (props) => {
	return (
		<div className={`${CSS_CLASSNAME} ${props.phoneClass ? props.phoneClass : ''}`} style={props.phoneStyle} ref={props.phoneRef}>
			{props.btnProps.map((btnProp, idx) =>
				<MiniButton className={`${CSS_CLASSNAME}-btn-${idx}`} key={`minibtn-${idx}`} {...btnProp} />)}
			<div className={`${CSS_CLASSNAME}-preview`} >
				{props.children}
			</div>
		</div>
	)
}