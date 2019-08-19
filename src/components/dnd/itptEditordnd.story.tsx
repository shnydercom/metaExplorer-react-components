import { withKnobs, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from 'react';
import update from 'immutability-helper'

import './../treeview/treeview.scss';
import './editor-dnd.scss'
import TreeView, { TreeEntry } from "../treeview/treeview";
import { TransitComponent } from "./transit/transitComponent";
import { StylableTransitComponentProps, StylableDragItemProps, DragItem } from "./interfaces";
import { DndProvider } from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';
import { DropContainer, StylableDropContainerProps } from "./drop/dropContainer";
import { DragContainer } from "./drag/dragContainer";
import { MoveContainer } from "./move/moveContainer"
import { MiniToolBox } from "../minitoolbox/dnd/minitoolbox";

const stories = storiesOf('dnd-itpt-editor', module);
stories.addDecorator(withKnobs);
let DNDBackend = HTML5Backend;

type TestDataType = string;
export const ItemTypes: { [s: string]: EditorItemTypes } = {
	previewWindow: 'previewWindow',
	Block: 'block'
}

type EditorItemTypes = "block" | "previewWindow";


const itptItmStyles = {
	color: "#fff",
	border: "solid 1px",
	"borderRadius": "5px",
	"padding": "5px",
	"marginBottom": "3px"
}

const editorDragItem: DragItem<EditorItemTypes, TestDataType> = {
	id: 'a',
	type: 'block',
	sourceBhv: 'sCopy',
	targetBhv: 'tGone',
	data: ''
}

const editorStylableDragItem: StylableDragItemProps<EditorItemTypes, TestDataType> = {
	...editorDragItem,
	isWithDragHandle: false,
	className: 'block-dragcontainer'
}

const TreeItemDragContainer = (props) => {
	return <DragContainer<EditorItemTypes, TestDataType>
		{...editorStylableDragItem}
	>
		<div style={{ ...itptItmStyles }}>{props.children}</div>
	</DragContainer >
}

const itptDesignerTreeItem1: TreeEntry = {
	flatContent: [
		<TreeItemDragContainer>TreeElement1</TreeItemDragContainer>,
		<TreeItemDragContainer>TreeElement2</TreeItemDragContainer>,
		<TreeItemDragContainer>TreeElement3</TreeItemDragContainer>,
		<div style={itptItmStyles}>not a drag container</div>
	],
	label: 'Itpt Blocks',
	subEntries: []
}

const itptEditorTransitComponent: StylableTransitComponentProps<EditorItemTypes, TestDataType> = {
	className: 'editor-transit',
	transitComponents: [
		{
			forType: 'block',
			componentFactory: (dragItem) => (props) => (<TreeItemDragContainer>{dragItem.id}</TreeItemDragContainer>)
		},
		{
			forType: 'previewWindow',
			componentFactory: (dragItem) => (props) => (<MiniToolBox className='minitoolbox'></MiniToolBox>)
		}
	]
}

const itptEditorDropContainerProps: StylableDropContainerProps<EditorItemTypes, TestDataType> = {
	onlyAppearOnDrag: false,
	acceptedItemTypes: ['block', "previewWindow"],
	className: 'editor-dropcontainer'
}

const backStyle: React.CSSProperties = {
	width: "100%", height: "100%", position: 'absolute', left: 0, top: 0, backgroundColor: 'blue', opacity: .5,
	zIndex: 0, pointerEvents: "none"
}

stories.add('integration-simple', () => (
	<DndProvider backend={DNDBackend}>
		<div style={{ width: "100%", height: "300px", position: 'relative' }}>
			<div style={backStyle} onMouseOver={(event) => event.currentTarget.style.setProperty('background-color', 'grey')}
				onMouseOut={(event) => event.currentTarget.style.setProperty('background-color', 'blue')}>
				something in the back
		</div>
			<TransitComponent {...itptEditorTransitComponent} />
			<DropContainer {...itptEditorDropContainerProps}
				style={{ height: '100%', width: '100%', backgroundColor: 'red', pointerEvents: "all", visibility: 'visible', opacity: 1, zIndex: 999 }}>
				a drop container
			</DropContainer>
			<div style={{ height: '100%', width: '200px', position: "absolute", left: 0, top: 0 }}>
				<TreeView entry={itptDesignerTreeItem1} >{
					text("description Special", "when hovering over field on the right, should become grey. When dragging, should'nt")
				}</TreeView>
			</div>
		</div>
	</DndProvider>
));


const mtbDragItem: DragItem<EditorItemTypes, TestDataType> = {
	id: 'mtb',
	type: 'previewWindow',
	sourceBhv: 'sGone',
	targetBhv: 'tCopy',
	data: ''
}

const mtbStylableDragItem: StylableDragItemProps<EditorItemTypes, TestDataType> = {
	...mtbDragItem,
	isWithDragHandle: true,
	className: 'mtb-dragcontainer'
}

const MTBItemDragContainer = (props) => {
	return <DragContainer<EditorItemTypes, TestDataType>
		{...mtbStylableDragItem}
	>
		<div>{props.children}</div>
	</DragContainer >
}

const IntegTest = (props) => {
	const [internalPositions, setInternalPositions] = React.useState<{
		[key: string]: {
			top: number
			left: number
		}
	}>({
		mtb: { top: 20, left: 200 }
	})

	const moveInternalPositions = (id: string, left: number, top: number) => {
		setInternalPositions(
			update(internalPositions, {
				[id]: {
					$merge: { top, left },
				},
			}),
		)
	}

	return (
		<DndProvider backend={DNDBackend}>
			<div style={{ width: "100%", height: "300px", position: 'relative' }}>
				<div style={backStyle} onMouseOver={(event) => event.currentTarget.style.setProperty('background-color', 'grey')}
					onMouseOut={(event) => event.currentTarget.style.setProperty('background-color', 'blue')}>
					something in the back
		</div>
				<TransitComponent {...itptEditorTransitComponent} />
				<DropContainer {...itptEditorDropContainerProps}
					onItemDropped={(item, pos) => moveInternalPositions(item.id, pos.left, pos.top)}
					style={{ height: '100%', width: '100%', backgroundColor: 'red', pointerEvents: "all", visibility: 'visible', opacity: 1, zIndex: 999 }}>
			</DropContainer>
				<MoveContainer
					className='editor-movecontainer'
					positionMap={{
						mtb: {
							pos: internalPositions['mtb'],
							child: <MTBItemDragContainer>
								<MiniToolBox className='minitoolbox'></MiniToolBox>
							</MTBItemDragContainer>
						}
					}}
				/>
				<div style={{ height: '100%', width: '200px', position: "absolute", left: 0, top: 0 }}>
					<TreeView entry={itptDesignerTreeItem1} >{
						text("description Special", "when hovering over field on the right, should become grey. When dragging, should'nt")
					}</TreeView>
				</div>
			</div>
		</DndProvider>
	)
}

stories.add('integration-minitoolbox', () => (
	<IntegTest />
));