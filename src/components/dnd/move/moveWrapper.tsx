import * as React from 'react'
import { IPosition } from '../interfaces';

export interface MoveWrapperProps extends IPosition {

}

export const MoveWrapper: React.FC<
	React.PropsWithChildren<MoveWrapperProps>> = props => {
		return <div
			style={{
				position: 'absolute',
				left: props.left,
				top: props.top
			}}
		>
			{props.children}
		</div>
	}