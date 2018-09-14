import * as React from 'react';
export interface CircleViewProps {
	className?: string;
}
export interface CircleViewState {
	height: number;
	width: number;
}

export default class CircleView extends React.Component<CircleViewProps, CircleViewState> {
	constructor(props?: any) {
		super(props);
		this.state = {
			height: 0,
			width: 0
		};
	}
	divElement = null;
	componentDidMount() {
		const height = this.divElement.clientHeight;
		const width = this.divElement.clientWidth;
		this.setState({ height, width });
	}
	componentDidUpdate() {
		const height = this.divElement.clientHeight;
		const width = this.divElement.clientWidth;
		if (height !== this.state.height && width !== this.state.width) {
			this.setState({ height, width });
		}
	}
	render() {
		const { children, className } = this.props;
		console.dir(this.state);
		const isWider = this.state.width > this.state.height;
		const innerCircleStyle = {
			borderRadius: "50%",
			height: isWider ? this.state.height : this.state.width,
			width: isWider ? this.state.height : this.state.width,
			overflow: "hidden"
		}
		return <div className={"circle" + className ? " "+ className : ""}
			ref={(divElement) => this.divElement = divElement}
		>
			<div style={innerCircleStyle}>
				{children}
			</div>
		</div>
	}
}