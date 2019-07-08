import * as React from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import ItemTypes from './ItemTypes'
import update from 'immutability-helper'
import { DragItem } from '../interfaces'

const styles: React.CSSProperties = {
  width: 1000,
  height: 1000,
  border: '1px solid black',
  position: 'relative',
}

export interface ContainerProps {
}

export interface ContainerState {
  boxes: { [key: string]: { top: number; left: number; } }
}

const initialPosition = { top: 20, left: 80 }

export const DropContainer: React.FC<ContainerProps> = (props) => {
  const [boxes, setBoxes] = React.useState<{
    [key: string]: {
      top: number
      left: number
    }
  }>({
    a: { ...initialPosition }
  })

  const [, drop] = useDrop({
    accept: ItemTypes.MiniToolBox,
    drop(item: DragItem, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveBox(item.id, left, top)
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

  return (
    <div ref={drop} style={styles}>
      {(Object.keys(boxes).map((key, idx) => {
        const { left, top } = boxes[key];
        const newChildProps = { left, top };

        const isArr = Array.isArray(props.children);
        if (!isArr && idx > 0) return null;
        const newChild = isArr ? props.children[idx] : props.children;
        if (idx > (props.children as []).length - 1) return null;
        if (!newChild) return null;
        return React.cloneElement(newChild, newChildProps);
      }))

      }
    </div>
  )
}
