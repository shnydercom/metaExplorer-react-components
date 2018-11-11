import * as React from 'react';

export interface AspectContainerProps {
	ratioA: number;
	ratioB: number;
}
export interface AspectContainerState {

}
export default class AspectContainer extends React.Component<AspectContainerProps, AspectContainerState> {
	constructor(props?: AspectContainerProps) {
		super(props);
	}
	render() {
		let viewBoxVal = '0 0 ' + this.props.ratioA + ' ' + this.props.ratioB;
		return (
			<div className="hero-h-square">
				<svg viewBox='0 0 1 1'></svg>
				<div className="hero-h-inner">
					<div className="hero-v-square">
						<svg viewBox={viewBoxVal}></svg>
						<div className="hero-v-inner">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
		);
	}
}