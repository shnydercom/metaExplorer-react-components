import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, button } from '@storybook/addon-knobs';
import "./minitoolbox.scss"
import { Phone } from "./opened-menus/phone";
import { Watch } from "./opened-menus/watch";
import { MiniButtonProps } from './opened-menus/mini-button';
import { MiniToolBox, StylableDragItemProps } from './dnd/minitoolbox-drag';
import { PhoneDND } from './dnd/phone-dnd';
import { WatchDND } from './dnd/watch-dnd';
import { DropContainer } from './dnd/dropcontainer';
import { DndProvider, useDrag } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { ItemTypes } from './dnd/ItemTypes';
import { DragLayerWChildren } from './dnd/draglayer-w-children';

let backendName = "html5"
let DNDBackend = HTML5Backend;
//TODO: implement automatic switching https://www.npmjs.com/package/react-dnd-multi-backend
//once the semver/breaking changes issue with react-dnd have been resolved, implement a proper switch


const areaTestingStyle = { backgroundColor: "#FF0000aa", height: "100%", width: "100%", flex: 1 }

const btnProps: MiniButtonProps[] =
	[
		{
			iconSrc: "/static/minimize.svg",
			onClick: () => { }
		},
		{
			iconSrc: "/static/maximize.svg",
			onClick: () => { }
		},
		{
			iconSrc: "/static/up.svg",
			onClick: () => { }
		}
	];

const stories = storiesOf('minitoolbox', module);
/*
stories.addDecorator(withKnobs);
stories.add('opened-menus/phone', () => (
	<div style={{ backgroundColor: "#001e34" }}>
		<Phone btnProps={btnProps}><div style={areaTestingStyle} /></Phone>
	</div>
));

stories.add('opened-menus/watch', () => (
	<div style={{ backgroundColor: "#001e34" }}>
		<Watch btnProps={btnProps}><div style={areaTestingStyle} /></Watch>
	</div>
));*/

stories.add('minitoolbox-drag', () => (
	<DndProvider backend={DNDBackend}>
		<MiniToolBox
			id="a"
			left={0}
			top={0}
			type="asdf"
			onOverDragHandle={() => { return; }}
		><div style={areaTestingStyle} /></MiniToolBox>
	</DndProvider >
));

stories.add('minitoolbox-dropcontainer', () => {
	button('switchBackend to ' + backendName, () => {
		if (backendName === "html5") {
			DNDBackend = HTML5Backend;
			backendName = "touch"
		} else {
			DNDBackend = TouchBackend
			backendName = "html5"
		}
	});
	return (
		<DndProvider backend={DNDBackend}>
			<DropContainer isDropZoneClickthrough={boolean("isDropZoneClickthrough", false)}>
				<MiniToolBox
					id="a"
					left={0}
					top={0}
					type="asdf"
				><div style={areaTestingStyle} /></MiniToolBox>
			</DropContainer>
		</DndProvider >
	)
});


export const BlockDragComponent: React.FC<StylableDragItemProps> = (props) => {
	const [{ /*isDragging*/ }, drag, preview] = useDrag({
		item: { id: props.id, left: props.left, top: props.top, type: props.type },
		collect: monitor => ({
			isDragging: monitor.isDragging()
		}),
		end(item, monitor) {
			console.log(item)
			console.log(monitor)
		}
	})
	const randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
	const returnContent = () => (
		<div style={{ backgroundColor: randomColor, height: '100px', width: '200px' }}>
			this is element with id: {props.id}
		</div>
	)
	return <div 
		style={{ left: props.left, top: props.top, position: "absolute" }}>
		<DragLayerWChildren
			includedItemId={props.id}
			acceptedItemTypes={[props.type]}>
			{returnContent()}
		</DragLayerWChildren>
		<div ref={preview} style={{ height: 0, width: 0 }}></div>
		<div ref={drag}>{returnContent()}</div>
	</div>
}

stories.add('minitoolbox-block-dnd', () => {
	button('switchBackend to ' + backendName, () => {
		if (backendName === "html5") {
			DNDBackend = HTML5Backend;
			backendName = "touch"
		} else {
			DNDBackend = TouchBackend
			backendName = "html5"
		}
	});
	return (
		<DndProvider backend={DNDBackend}>
			<DropContainer
				onBlockDropped={(dragItem) => alert('dropped: ' + JSON.stringify(dragItem))}
				isDropZoneClickthrough={boolean("isDropZoneClickthrough", false)}>
				<MiniToolBox
					id="a"
					left={0}
					top={0}
					type={ItemTypes.MiniToolBox}
				><div style={areaTestingStyle} /></MiniToolBox>
				<BlockDragComponent
					id="b"
					left={100}
					top={200}
					type={ItemTypes.Block}
				/>
				<BlockDragComponent
					id="c"
					left={100}
					top={100}
					type={ItemTypes.Block}
				/>
				<BlockDragComponent
					id="d"
					left={100}
					top={0}
					type={ItemTypes.Block}
				/>
			</DropContainer>
		</DndProvider >
	)
});
/*
stories.add('phonednd', () => (
	<DndProvider backend={DNDBackend}>
		<div style={{ backgroundColor: "#001e34" }}>
			<PhoneDND></PhoneDND>
		</div>
	</DndProvider>
));

stories.add('watchdnd', () => (
	<DndProvider backend={DNDBackend}>
		<div style={{ backgroundColor: "#001e34" }}>
			<WatchDND></WatchDND>
		</div>
	</DndProvider>
));*/