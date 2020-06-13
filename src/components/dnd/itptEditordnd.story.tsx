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
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DropContainer, StylableDropContainerProps } from "./drop/dropContainer";
import { DragContainer } from "./drag/dragContainer";
import { MoveContainer } from "./move/moveContainer"
import { MiniToolBox, ActiveStates } from "../minitoolbox/dnd/minitoolbox";

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
	"marginBottom": "3px",
	height: '200px',
	width: '300px',
	backgroundColor: '#00FF00AA'
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
	className: 'block-dragcontainer',
	dragOrigin: { top: 0, left: 0 }
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
			componentFactory: (dragItem) => (props) => (
				<MTBItemDragContainer {...mtbStylableDragItem} isTransitDummy={true}>
					<MiniToolBox activeState='watchEd' className='minitoolbox'>
					</MiniToolBox>
				</MTBItemDragContainer>)
		}
	]
}

const itptEditorDropContainerProps: StylableDropContainerProps<EditorItemTypes, TestDataType> = {
	onlyAppearOnDrag: true,
	acceptedItemTypes: ['block', "previewWindow"],
	className: 'editor-dropcontainer'
}

const backStyle: React.CSSProperties = {
	width: "100%", height: "100%", position: 'absolute', left: 0, top: 0, backgroundColor: 'blue', opacity: .5,
	zIndex: 0, pointerEvents: "all"
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
				style={{ height: '100%', width: '100%', backgroundColor: 'red', opacity: 0.5 }}>
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
	sourceBhv: 'sCopy',
	targetBhv: 'tCopy',
	data: ''
}

const mtbStylableDragItem: StylableDragItemProps<EditorItemTypes, TestDataType> = {
	...mtbDragItem,
	isWithDragHandle: true,
	className: 'mtb-dragcontainer',
	dragOrigin: { top: -10 - 36 + 4, left: -163 - 36 - 4 }
}

const MTBItemDragContainer = (props: React.PropsWithChildren<StylableDragItemProps<EditorItemTypes, TestDataType>>) => {
	return <DragContainer<EditorItemTypes, TestDataType>
		{...props}
	>
		<div>{props.children}</div>
	</DragContainer >
}

const IntegTest = (props) => {
	const [isMini, setIsMini] = React.useState(false);
	const [activeEditor, setActiveEditor] = React.useState<ActiveStates>(props.activeState ? props.activeState : "phoneEd");

	const [internalPositions, setInternalPositions] = React.useState<{
		[key: string]: {
			top: number
			left: number
		}
	}>({
		mtb: { top: 40, left: 400 }
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
					style={{ height: '100%', width: '100%', backgroundColor: 'red', opacity: 0.5 }}>
				</DropContainer>
				<MoveContainer
					className='editor-movecontainer'
					positionMap={{
						mtb: {
							pos: internalPositions['mtb'],
							child: <MTBItemDragContainer {...mtbStylableDragItem}>
								<MiniToolBox
									className='minitoolbox'
									isMini={isMini}
									activeState={activeEditor}
									onActiveStateChanged={(as) => setActiveEditor(as)}
									onMiniChanged={(mini) => setIsMini(mini)}
								></MiniToolBox>
							</MTBItemDragContainer>
						}
					}}
				/>
				<div style={{ height: '100%', width: '200px', position: "absolute", left: 0, top: 0 }}>
					<TreeView entry={itptDesignerTreeItem1} >{
						text("description Special", "when hovering over field on the right should turn grey, when hovering over minitoolobx should be blue-ish, when dragging red-ish")
					}</TreeView>
				</div>
			</div>
		</DndProvider>
	)
}

stories.add('integration-minitoolbox', () => (
	<IntegTest />
));