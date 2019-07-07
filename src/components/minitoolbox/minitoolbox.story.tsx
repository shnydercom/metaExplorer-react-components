import * as React from 'react';
import { storiesOf } from '@storybook/react';
import "./minitoolbox.scss"
import { Phone } from "./opened-menus/phone";
import { Watch } from "./opened-menus/watch";
import { MiniButtonProps } from './opened-menus/mini-button';
import { MiniToolBox } from './minitoolbox';
import { PhoneDND } from './dnd/phone-dnd';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'


const areaTestingStyle = { backgroundColor: "#FF0000aa", height: "100%", width: "100%", flex: 1 }

const btnProps: MiniButtonProps[] =
	[
		{
			iconSrc: "/static/move.svg",
			onClick: () => { }
		},
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

stories.add('minitoolbox', () => (
	<div style={{ backgroundColor: "#001e34" }}>
		<MiniToolBox><div style={areaTestingStyle} /></MiniToolBox>
	</div>
));

stories.add('phonednd', () => (
	<DndProvider backend={HTML5Backend}>
		<div style={{ backgroundColor: "#001e34" }}>
			<PhoneDND></PhoneDND>
		</div>
	</DndProvider>
));