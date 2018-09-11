import * as React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemTitle,
	AccordionItemBody,
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
		for (let idx = 0; idx < entry.subEntries.length; idx++) {
			const elem = entry.subEntries[idx];
			subTrees.push(<TreeView key={idx} entry={elem} />);
		}
		return <Accordion accordion={false}>
			<AccordionItem>
				<AccordionItemTitle>
					<div className="u-position-relative">
						{entry.label}
						<div className="accordion__arrow" role="presentation" />
					</div>
				</AccordionItemTitle>
				<AccordionItemBody>
					<div className="treeview-content treeview-top">{children}</div>
					{subTrees.length > 0 ? <div className="treeview-content">{subTrees}</div> : null}
					<div className="treeview-content">{entry.flatContent}</div>
				</AccordionItemBody>
			</AccordionItem>
		</Accordion>;
	}
}
