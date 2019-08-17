import { storiesOf } from "@storybook/react";
import * as React from 'react';
import './dnd.scss';

import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { DragContainer } from './drag/dragContainer';
import { DropContainer, StylableDropContainerProps } from './drop/dropContainer';
import { DragItem, StylableDragItemProps } from "./interfaces";

const stories = storiesOf('dnd', module);

type TestItemTypes = "typeA" | "typeB";

const ColorSwappingDIV = (props) => {
	const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	return (<div style={{
		height: '100%', width: '100%',
		backgroundColor: randomColor
	}}>{props.children}</div>);
}

const testDataDragItem: DragItem<TestItemTypes> = {
	id: 'a',
	left: 20,
	top: 30,
	type: 'typeA'
}

const testStylableDragItem: StylableDragItemProps<TestItemTypes> = {
	...testDataDragItem,
	className: 'dragcontainer',
	sourceBhv: 'sCopy',
	targetBhv: 'tCopy'
}
let DNDBackend = HTML5Backend;

stories.add('dragContainer', () => (
	<DndProvider backend={DNDBackend}>
		<DragContainer {...testStylableDragItem}>
			<ColorSwappingDIV>testing a drag container</ColorSwappingDIV>
		</DragContainer>
	</DndProvider>
));

stories.add('dragContainers', () => (
	<DndProvider backend={DNDBackend}>
		<DragContainer
			{...testStylableDragItem}>
			<ColorSwappingDIV>testing a drag container</ColorSwappingDIV>
		</DragContainer>
		<DragContainer
			{...testStylableDragItem}
			id="b"
			top={200}
			left={300}>
			<ColorSwappingDIV>testing a drag container "b"</ColorSwappingDIV>
		</DragContainer>
	</DndProvider>
));

const testDropContainerProps: StylableDropContainerProps<TestItemTypes> = {
	acceptedItemTypes: ['typeA'],
	className: 'dropcontainer'
}

stories.add('dropContainer', () => (
	<DndProvider backend={DNDBackend}>
		<DropContainer {...testDropContainerProps}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
	</DndProvider>
));

stories.add('dropContainers', () => (
	<DndProvider backend={DNDBackend}>
		<DragContainer
			{...testStylableDragItem}
			top={80}
			left={200}
		>
			<ColorSwappingDIV>testing a drag container</ColorSwappingDIV>
		</DragContainer>
		<DragContainer
			{...testStylableDragItem}
			id="b"
			top={50}
			left={300}>
			<ColorSwappingDIV>testing a drag container</ColorSwappingDIV>
		</DragContainer>
		<DropContainer {...testDropContainerProps} style={{ height: '100px', width: '100px' }}>
			<ColorSwappingDIV>a drop container</ColorSwappingDIV>
		</DropContainer>
	</DndProvider>
));
