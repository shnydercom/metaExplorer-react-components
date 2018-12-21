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
	isOpen: boolean;
}

export default class TreeView extends React.Component<TreeViewProps, TreeViewState> {
	constructor(props?: any) {
		super(props);
		this.state = {
			isOpen: false
		};
	}
	render() {
		const { entry, children } = this.props;
		const { isOpen } = this.state;
		let subTrees = [];
		let flatContents = [];
		if (isOpen) {
			for (let idx = 0; idx < entry.subEntries.length; idx++) {
				const elem = entry.subEntries[idx];
				subTrees.push(<TreeView key={idx} entry={elem} />);
			}
			for (let idx = 0; idx < entry.flatContent.length; idx++) {
				const fc = entry.flatContent[idx];
				flatContents.push(<div className="treeview-flatcontent-item" key={idx}>{fc}</div>);
			}
		}
		return <Accordion accordion={false} onChange={(ev) => {
			this.setState({ isOpen: ev[0] })
		}}>
			<AccordionItem expanded={isOpen}>
				<AccordionItemTitle>
					<div className="u-position-relative">
						{entry.label}
						<div className="accordion__arrow" role="presentation" />
					</div>
				</AccordionItemTitle>
				{isOpen ? <AccordionItemBody>
					<div className="treeview-content treeview-top">{children}</div>
					{subTrees.length > 0 ? <div className="treeview-content">{subTrees}</div> : null}
					<div className="treeview-content">{flatContents}</div>
				</AccordionItemBody>
					: null}
			</AccordionItem>
		</Accordion >;
	}
}
