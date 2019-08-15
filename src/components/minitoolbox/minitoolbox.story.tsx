import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, button } from '@storybook/addon-knobs';
import "./minitoolbox.scss"
import { Phone } from "./opened-menus/phone";
import { Watch } from "./opened-menus/watch";
import { MiniButtonProps } from './opened-menus/mini-button';
import { MiniToolBox } from './dnd/minitoolbox-drag';
import { PhoneDND } from './dnd/phone-dnd';
import { WatchDND } from './dnd/watch-dnd';
import { DropContainer } from './dnd/dropcontainer';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';

let backendName = "html5"
let DNDBackend = TouchBackend;
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
));

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
));