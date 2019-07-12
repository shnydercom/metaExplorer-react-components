import * as React from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import ItemTypes from './ItemTypes'
import update from 'immutability-helper'
import { DragItem } from './interfaces'

const styles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0
}

export interface ContainerProps {
  isDropZoneClickthrough: boolean;
}

export interface ContainerState {
  boxes: { [key: string]: { top: number; left: number; } }
}

const initialPosition = { top: 20, left: 80 }

export const DropContainer: React.FC<ContainerProps> = (props) => {
  let containerStyles = { ...styles };

  const [boxes, setBoxes] = React.useState<{
    [key: string]: {
      top: number
      left: number
    }
  }>({
    a: { ...initialPosition }
  })
  const [isClickThrough, setIsClickThrough] = React.useState<boolean>(!!props.isDropZoneClickthrough);

  const [, drop] = useDrop({
    accept: [ItemTypes.MiniToolBox, ItemTypes.Block],
    drop(item: DragItem, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
      if(!!item.data) return item.data;
      return undefined
    },
  })

  const moveBox = (id: string, left: number, top: number) => {
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }

  containerStyles.pointerEvents = isClickThrough ? 'none' : 'all';

  return (
    <div ref={drop} style={containerStyles}>
      {(Object.keys(boxes).map((key, idx) => {
        const { left, top } = boxes[key];
        const newChildProps = { left, top };

        const isArr = Array.isArray(props.children);
        if (!isArr && idx > 0) return null;
        const newChild = isArr ? props.children[idx] : props.children;
        if (idx > (props.children as []).length - 1) return null;
        if (!newChild) return null;
        newChildProps['onOutDragHandle'] = () => setIsClickThrough(true);
        newChildProps['onOverDragHandle'] = () => setIsClickThrough(false);
        return React.cloneElement(newChild, newChildProps);
      }))
      }
    </div>
  )
}
