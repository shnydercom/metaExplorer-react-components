import * as React from 'react';
export interface CircleViewProps {
}
export interface CircleViewState {
}

export default class CircleView extends React.Component<CircleViewProps, CircleViewState> {
	constructor(props?: any) {
		super(props);
		this.state = {
		};
	}
	render() {
		const { children } = this.props;
		return <div className='outer'>
			<svg className="svg-class-v" viewBox='0 0 1 1'></svg>
			<svg className="svg-class-h" viewBox='0 0 1 1'></svg>
			<div className=' inner'>

				<div className='circle-container-inner '>
					<div className='circle-content-inner'>
						{children}</div>
				</div>
			</div>
		</div>;
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