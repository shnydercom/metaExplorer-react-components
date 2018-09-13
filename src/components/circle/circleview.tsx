import * as React from 'react';
export interface CircleViewProps {
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
		const { children } = this.props;
		console.dir(this.state);
		const isWider = this.state.width > this.state.height;
		const outerClassName = isWider ? "outer-h" : "outer-v";
		const svgClassName = isWider ? "svg-class-h" : "svg-class-v";
		const innerClassName = isWider ? "inner-h" : "inner-v";
		return <div className="circle"
			ref={(divElement) => this.divElement = divElement}
		>
			<div className={outerClassName}>
				<svg className={svgClassName} viewBox='0 0 1 1'></svg>
				<div className={innerClassName}>
					{children}
				</div>
			</div>
		</div>

		/*<div className='circle-container-inner outer'>
			<svg className="svg-class-v" viewBox='0 0 1 1'></svg>
			<div className='circle-content-inner'>
				{children}</div>
		</div>;*/
		/**<div className=' inner'>

				<div className='circle-container-inner '>
					<div className='circle-content-inner'>
						{children}</div>
				</div>
			</div> */
		/*<div className='circle-container-outer'>
			<div className='circle-content-outer'>
				<div className='circle-container-inner'>
					<div className='circle-content-inner'>
						{children}
					</div>
				</div>
			</div>
		</div>;*/
	}
}