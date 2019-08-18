import * as React from 'react';

export interface ITabProps {
	index: number;
	label: string;
	className: string;
	isSelected: boolean;
	onTabClicked: (index: number) => void;
}

export const Tab: React.FC<ITabProps> = (props) => {
	return (<div
		className={`${props.className} ${props.isSelected ? props.className+'-selected' : ''}`}
		onClick={() => { props.onTabClicked(props.index) }}>
		{props.label}
	</div>);
}