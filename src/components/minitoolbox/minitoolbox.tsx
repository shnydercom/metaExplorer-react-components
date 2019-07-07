import * as React from 'react';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

export interface MiniToolBoxProps {
	className?: string;
	style?: React.CSSProperties;
}
export interface MiniToolBoxState {
}

export class MiniToolBox extends React.Component<MiniToolBoxProps, MiniToolBoxState> {
	constructor(props?: any) {
		super(props);
		this.state = {
		};
	}
	render() {
		const { className, style } = this.props;
		return <div style={style} className={className ? className : null}>
			<DndProvider backend={HTML5Backend}>...</DndProvider>
		</div>
	}
}