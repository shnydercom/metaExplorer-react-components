import * as React from 'react'
import { DragItem, IPositionMap } from "../interfaces";
import { useDrop } from "react-dnd";

export interface StylableDropContainerProps<TItemType extends string> {
  onItemDropped?: (droppedItem: DragItem<TItemType>) => void;
  acceptedItemTypes: TItemType[] | TItemType;
  onlyAppearOnDrag: boolean;
  className: string;
  style?: React.CSSProperties;
}

export interface ContainerState {
  positionMap: IPositionMap;
}

const draggingCSSProperties: React.CSSProperties = {
  pointerEvents: 'none',
  opacity: 0,
  visibility: "hidden"
}

export function DropContainer<TItemType extends string>
  (props: React.PropsWithChildren<StylableDropContainerProps<TItemType>>) {
  const [{ isActive, isDragging }, drop] = useDrop({
    hover: (itm) => { console.log(itm) },
    accept: props.acceptedItemTypes,
    collect: monitor => /*{
      console.log(monitor.canDrop());
      console.log(monitor.getItem())
      console.log(props.acceptedItemTypes)
      return*/ ({
        isActive: monitor.canDrop() && monitor.isOver(),
        isDragging: monitor.getItem()
      })
    /*},
    drop(item, monitor) {
      console.log(monitor.getDifferenceFromInitialOffset())
      return item
    }*/
  })
  return (
    <div ref={drop} style={props.onlyAppearOnDrag && !isDragging ? { ...props.style, ...draggingCSSProperties } : { ...props.style }}
      className={`${props.className} ${isActive ? props.className + '-active' : ''}`}
    >
      {props.children}
    </div>
  )
}
