import * as React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton
} from 'react-accessible-accordion';

export interface TreeEntry {
	subEntries: TreeEntry[];
	label: string;
	flatContent: JSX.Element[];
}

export interface TreeViewProps {
	entry: TreeEntry;
}
export interface TreeViewState {
}

export default class TreeView extends React.Component<TreeViewProps, TreeViewState> {
	constructor(props?: any) {
		super(props);
		this.state = {
		};
	}
	render() {
		const { entry, children } = this.props;
		let subTrees = [];
		let flatContents = [];
		for (let idx = 0; idx < entry.subEntries.length; idx++) {
			const elem = entry.subEntries[idx];
			subTrees.push(<TreeView key={idx} entry={elem} />);
		}
		for (let idx = 0; idx < entry.flatContent.length; idx++) {
			const fc = entry.flatContent[idx];
			flatContents.push(<div className="treeview-flatcontent-item" key={idx}>{fc}</div>);
		}
		return <Accordion allowMultipleExpanded={true}
			allowZeroExpanded={true}
		>
			<AccordionItem>
				<AccordionItemHeading>
					<AccordionItemButton>
						<div className="u-position-relative">
							{entry.label}
							<div className="accordion__arrow" role="presentation" />
						</div>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel>
					<div className="treeview-content treeview-top">{children}</div>
					{subTrees.length > 0 ? <div className="treeview-content">{subTrees}</div> : null}
					<div className="treeview-content">{flatContents}</div>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion >;
	}
}
