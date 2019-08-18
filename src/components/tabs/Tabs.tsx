import * as React from 'react';
import { Tab } from './Tab';

export interface ITabData<TData> {
	label: string;
	data: TData;
}

export interface ITabsProps<TData> {
	selectedIdx: number;
	tabs: ITabData<TData>[];
	className: string;
	onSelectionChange?: (data: ITabData<TData>, idx: number) => void;
}

export function Tabs<TData>(props: ITabsProps<TData>) {

	const internalCSSClass = 'mrc-tabs';

	const [selectedIdx, setSelectedIdx] = React.useState(0);

	const updateInternalIdx = (val: number) => {
		if (val < 0 || val > props.tabs.length - 1) return false;
		setSelectedIdx(val);
		return true;
	}

	React.useEffect(() => {
		const selIdx = props.selectedIdx;
		const isUpdatable = updateInternalIdx(selIdx);
		if (props.onSelectionChange && isUpdatable) {
			props.onSelectionChange(props.tabs[selIdx], selIdx);
		}
	}, [props])

	return <div className={props.className}>
		<div className={internalCSSClass}>
			{props.tabs.map((tab, idx) => {
				return <Tab className={`${internalCSSClass}-tab`}
					label={tab.label}
					index={idx}
					key={'tab' + idx}
					isSelected={idx === selectedIdx}
					onTabClicked={(index) => { setSelectedIdx(index) }}
				></Tab>
			})}
		</div></div>
}
