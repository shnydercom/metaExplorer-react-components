import { IPositionMap } from "../interfaces";
import * as React from 'react'
import update from 'immutability-helper'
import { MoveWrapper } from './moveWrapper';

export interface MoveContainerProps {
	className: string;
	positionMap: IPositionMap;
	style?: React.CSSProperties;
}

const childrenContainerCSS: React.CSSProperties = {
  position: "relative",
  height: '100%',
  width: '100%'
}

export function MoveContainer(props: MoveContainerProps) {

	React.useEffect(() => {
		const posMap = props.positionMap;
		const nextInternalPositions = {};
		for (const pos in posMap) {
			if (posMap.hasOwnProperty(pos)) {
				const posElem = posMap[pos];
				nextInternalPositions[pos] = {
					top: posElem.pos.top,
					left: posElem.pos.left
				}
			}
		}
		setInternalPositions(nextInternalPositions);
	}, [props]);

	const [internalPositions, setInternalPositions] = React.useState<{
		[key: string]: {
			top: number
			left: number
		}
	}>({
	})

	const moveInternalPositions = (id: string, left: number, top: number) => {
		setInternalPositions(
			update(internalPositions, {
				[id]: {
					$merge: { top, left },
				},
			}),
		)
	}

	return (
		<div style={childrenContainerCSS}>
			{(Object.keys(internalPositions).map((key, idx) => {
				const { left, top } = internalPositions[key];
				const newChildProps = { left, top };
				const newChild = props.positionMap[key].child;
				if (!newChild) return null;
				return (
					<MoveWrapper
						{...newChildProps}>
						{newChild}
					</MoveWrapper>
				);
			}))
			}
		</div>
	)
}