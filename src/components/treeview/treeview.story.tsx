import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TreeView, { TreeEntry } from './treeview';
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs';
import './treeview.scss';

const stories = storiesOf('plain components', module);
stories.addDecorator(withKnobs);

const singleTreeItem: TreeEntry = {
	flatContent: [
		<p>flat content paragraph</p>,
		<h1>flat content h1</h1>,
		<div>flat content div</div>,
		<h1>another flat content h1</h1>
	],
	label: 'single Tree Item',
	subEntries: []
}

const multiTreeItem: TreeEntry = {
	flatContent: [
		<h1>this is a heading</h1>,
		<p>this is a p</p>
	],
	label: 'multi Tree Item',
	subEntries: [
		{
			flatContent: [
				<h1>this is a heading in a sub-tree</h1>,
				<div>this is a div in a sub-tree</div>
			],
			label: 'first sub-item',
			subEntries: [
				{
					flatContent: [<div>here we only have flat content, nothing else</div>],
					label: 'sub-sub-item with only one flat content',
					subEntries: []
				}
			]
		},
		{
			flatContent: [
				<h1>this is a heading in the second sub-tree-item</h1>,
				<div>this is a div in there</div>
			],
			label: 'second sub-item',
			subEntries: [
				{
					flatContent: [<div>last flat sub-content</div>],
					label: 'second sub-sub-item',
					subEntries: []
				}
			]
		}
	]
}

const itptItmStyles = {
	color: "#fff",
	border: "solid 1px",
	"borderRadius": "5px",
	"padding": "5px",
	"marginBottom": "3px"
}

const itptDesignerTreeItem1: TreeEntry = {
	flatContent: [
		<div style={itptItmStyles}>Simple Data Type</div>,
		<div style={itptItmStyles}>External Input Marker</div>,
		<div style={itptItmStyles}>Linear Data Display</div>
	],
	label: 'Special Nodes',
	subEntries: []
}
const itptDesignerTreeItem2: TreeEntry = {
	flatContent: [
	],
	label: 'Atomic Nodes',
	subEntries: [
		{
			label: 'shnyder',
			flatContent: [
				<div style={itptItmStyles}>imageDisplay</div>,
				<div style={itptItmStyles}>imageRetriever</div>,
				<div style={itptItmStyles}>ImgHeadSubDescInterpreter</div>,
				<div style={itptItmStyles}>OrganizationRetriever</div>,
				<div style={itptItmStyles}>ProductRetriever</div>,
				<div style={itptItmStyles}>Route</div>
			],
			subEntries: [
				{
					label: 'md',
					flatContent: [
						<div style={itptItmStyles}>BottomNavigation</div>,
						<div style={itptItmStyles}>NavBarWActions</div>,
						<div style={itptItmStyles}>NavSearchBar</div>,
						<div style={itptItmStyles}>SingleImageSelector</div>,
					],
					subEntries: [
						{
							label: 'http://schema.org',
							flatContent: [
								<div style={itptItmStyles}>Boolean</div>,
								<div style={itptItmStyles}>Date</div>,
								<div style={itptItmStyles}>DateTime</div>,
								<div style={itptItmStyles}>Integer</div>,
								<div style={itptItmStyles}>Number</div>,
								<div style={itptItmStyles}>Text</div>
							],
							subEntries: []
						}
					]
				}
			]
		},
		{
			label: 'shnyder-website',
			flatContent: [
				<div style={itptItmStyles}>this is used to separate shnyder and shnyder-website</div>
			],
			subEntries: [
			]
		}
	]
}
const itptDesignerTreeItem3: TreeEntry = {
	flatContent: [
	],
	label: 'Compound Nodes',
	subEntries: [
		{
			label: '愿望清单',
			subEntries: [],
			flatContent: [
				<div style={itptItmStyles}>AppEntry</div>,
				<div style={itptItmStyles}>BottomBar</div>
			]
		},
		{
			label: 'self-employed-toolbox',
			subEntries: [],
			flatContent: [
				<div style={itptItmStyles}>TimeEntry</div>,
				<div style={itptItmStyles}>ExpenseEntry</div>
			]
		}
	]
}
stories.add('treeview/singleItem', () => (
	<TreeView entry={singleTreeItem} >{text("child content", "single child Content")}</TreeView>
));

stories.add('treeview/multiItem', () => (
	<div style={{ width: "100%" }}>
		<TreeView entry={multiTreeItem} >{text("child content", "multi child Content")}</TreeView>
	</div>
));

stories.add('treeview/itpt-designer-demo', () => (
	<div style={{ width: "100%", backgroundColor: "#000" }}>
		<TreeView entry={itptDesignerTreeItem1} >{text("description Special", "Set standard values, mark a value for later input, build forms with as many interpreters as you want")}</TreeView>
		<TreeView entry={itptDesignerTreeItem2} >{text("description Atomic", "Use these elements to create compound nodes. As basic building blocks, they can't be split up into smaller parts")}</TreeView>
		<TreeView entry={itptDesignerTreeItem3} >{text("description Compound", "Combine any node type to make up new nodes, or drop one in the box below to see how it's been made")}</TreeView>
	</div>
));