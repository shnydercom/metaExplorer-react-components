import * as React from 'react';

export interface AspectContainerProps {
	ratioA: number;
	ratioB: number;
	topTitle: JSX.Element;
	subTitle: JSX.Element;
}
export interface AspectContainerState {

}
export default class AspectContainer extends React.Component<AspectContainerProps, AspectContainerState> {
	constructor(props?: AspectContainerProps) {
		super(props);
	}
	render() {
		const {topTitle, subTitle} = this.props;
		let viewBoxVal = '0 0 ' + this.props.ratioA + ' ' + this.props.ratioB;
		return (
			<div className="hero-h-square">
				<svg viewBox='0 0 1 1'></svg>
				<div className="hero-h-inner">
					<div className="titles">{topTitle}</div>
					<div className="hero-v-square">
						<svg viewBox={viewBoxVal}></svg>
						<div className="hero-v-inner">
							{this.props.children}
						</div>
					</div>
					<div className="titles">{subTitle}</div>
				</div>
			</div>
		);
	}
}