import { IPositionMap } from "../interfaces";
import * as React from 'react'
import update from 'immutability-helper'
import { MoveWrapper } from './moveWrapper';
import { useDragLayer } from "react-dnd";

export interface MoveContainerProps {
	className: string;
	positionMap: IPositionMap;
	style?: React.CSSProperties;
}

export function MoveContainer(props: MoveContainerProps) {

	const {
		itemType,
		isDragging,
		item,
		initialOffset,
		initialClientOffset,
		currentOffset,
	} = useDragLayer(monitor => {
		return {
			item: monitor.getItem(),
			itemType: monitor.getItemType(),
			initialClientOffset: monitor.getInitialClientOffset(),
			initialOffset: monitor.getInitialSourceClientOffset(),
			currentOffset: monitor.getSourceClientOffset(),
			isDragging: monitor.isDragging(),
		}
	}
	)

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

	const childrenContainerCSS: React.CSSProperties = {
		position: "relative",
		height: '100%',
		width: '100%'
	}

	return (
		<div className={`${props.className}`} style={{visibility: isDragging ? 'hidden' : 'inherit',
		pointerEvents: 'none'
		}}>
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
		</div>
	)
}