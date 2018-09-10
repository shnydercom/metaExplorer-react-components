import * as React from 'react';
import { Component } from "react";
import {
	Accordion,
	AccordionItem,
	AccordionItemTitle,
	AccordionItemBody,
} from 'react-accessible-accordion';
import './treeview.scss';

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

export class TreeView extends Component<TreeViewProps, TreeViewState> {
	constructor(props?: any) {
		super(props);
		this.state = {
		}
	}
	render() {
		const { entry, children } = this.props;
		let subTrees = [];
		for (let idx = 0; idx < entry.subEntries.length; idx++) {
			const elem = entry.subEntries[idx];
			subTrees.push(<TreeView entry={elem} />);
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
		/*return <>
			<button onClick={() => {
				this.setState({ isOpen: !this.state.isOpen });
			}} className={buttonStyles}>{entry.label}</button>
			<div className="treeview-panel" style={isOpen ? { maxHeight: entryHeight + "px" } : null}>
				{subTrees.length > 0 ? <p>{subTrees}</p> : null}
				<div>{entry.flatContent}</div>
				<div>{children}</div>
			</div>
		</>;*/
	}
}