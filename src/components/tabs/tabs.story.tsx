import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import './tabs.scss';
import { Tabs, ITabData } from './Tabs';

const stories = storiesOf('tabs', module);

stories.addDecorator(withKnobs);

const tabDatas: ITabData<string>[] = [
	{ data: 'Elem1', label: 'first Element' },
	{ data: 'Elem2', label: 'second Element' },
	{ data: 'Elem3', label: 'third Element' },
	{ data: 'Elem4', label: 'fourth Element' },
	{ data: 'Elem5', label: 'fifth Element' },
	{ data: 'Elem6', label: 'sixth Element' }
];

stories.add('many-tabs', () => (
	<Tabs
		className='editor-tabs'
		selectedIdx={number('selectedIdx', 0)}
		tabs={tabDatas}
	></Tabs>
))

stories.add('few-tabs', () => (
	<Tabs
		className='editor-tabs'
		selectedIdx={number('selectedIdx', 0)}
		tabs={[
			{ data: 'Elem1', label: 'first Element' },
			{ data: 'Elem2', label: 'second Element' }
		]}
		onSelectionChange={(data) => console.log(data)}
	></Tabs>
))