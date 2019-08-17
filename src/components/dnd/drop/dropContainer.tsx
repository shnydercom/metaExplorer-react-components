import * as React from 'react'
import { DragItem, IPositionMap } from "../interfaces";
import { useDrop } from "react-dnd";

export interface StylableDropContainerProps<TItemType extends string> {
  onItemDropped?: (droppedItem: DragItem<TItemType>) => void;
  acceptedItemTypes: TItemType[];
  className: string;
  style?: React.CSSProperties;
}

export interface ContainerState {
  positionMap: IPositionMap;
}

export function DropContainer<TItemType extends string>
  (props: React.PropsWithChildren<StylableDropContainerProps<TItemType>>) {
  const [{ isActive }, drop] = useDrop({
    hover: (itm) => { console.log(itm) },
    accept: props.acceptedItemTypes,
    collect: monitor => ({
      isActive: monitor.canDrop() && monitor.isOver(),
    }),
  })
  return (
    <div ref={drop} style={props.style}
      className={`${props.className} ${isActive ? props.className + '-active' : ''}`}
    >
      {props.children}
    </div>
  )
}
