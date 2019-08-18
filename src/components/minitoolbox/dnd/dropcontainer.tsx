import * as React from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import update from 'immutability-helper'
import { DragItem } from './interfaces'
import * as shortId from "shortid";
import { StylableDragItemProps } from './minitoolbox-drag';

const styles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0
}

export interface ContainerProps {
  isDropZoneClickthrough: boolean;
  onBlockDropped?: (blockDragItem: DragItem) => void;
}

export interface ContainerState {
  boxes: { [key: string]: { top: number; left: number; } }
}

const initialPosition = { top: 20, left: 80 }

export const DropContainer: React.FC<ContainerProps> = (props) => {
  let containerStyles = { ...styles };

  React.useEffect(() => {
    console.log("effect triggered")
    const isArr = Array.isArray(props.children);
    if (!isArr) {
      setBoxes({ a: { ...initialPosition } });
      return;
    }
    const childrenArr = props.children as [];
    const nextBoxes = {};
    childrenArr.forEach(child => {
      console.log(child)
      const childProps = child['props'] as StylableDragItemProps;
      console.log(childProps)
      if(!childProps.id 
        || (!childProps.top && childProps.top !== 0) 
        || (!childProps.left && childProps.left !== 0) 
        || !childProps.type){
        nextBoxes[shortId.generate()] = initialPosition;
      }else{
        nextBoxes[childProps.id] = { 
          top: childProps.top,
          left: childProps.left
        }
      }
    });
    setBoxes(nextBoxes);
  }, [props]);

  const [boxes, setBoxes] = React.useState<{
    [key: string]: {
      top: number
      left: number
    }
  }>({
  })

  const [, drop] = useDrop({
    accept: [ItemTypes.MiniToolBox, ItemTypes.Block],
    drop(item: DragItem, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      console.log(item)
      if (item.type === ItemTypes.MiniToolBox) moveBox(item.id, left, top);
      if (item.type === ItemTypes.Block) {
        if (!props.onBlockDropped) {
          console.warn('dropped a block element but no onBlockDropped-handler was provided');
          return { ...item };
        }
        props.onBlockDropped({ ...item });
        return {...item}
      }
      if (!!item.data) return { ...item };
      return undefined
    },
  })

  const moveBox = (id: string, left: number, top: number) => {
    console.log("moving blox")
    setBoxes(
      update(boxes, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }

  containerStyles.pointerEvents = props.isDropZoneClickthrough ? 'none' : 'all';

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
        return React.cloneElement(newChild, newChildProps);
      }))
      }
    </div>
  )
}
