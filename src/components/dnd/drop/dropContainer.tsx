import * as React from 'react'
import { DragItem, IPosition } from "../interfaces";
import { useDrop, XYCoord } from "react-dnd";

export interface StylableDropContainerProps<TItemType extends string, TData> {
  onItemDropped?: (droppedItem: DragItem<TItemType, TData>, position: IPosition) => void;
  acceptedItemTypes: TItemType[] | TItemType;
  onlyAppearOnDrag: boolean;
  className: string;
  style?: React.CSSProperties;
}

const draggingCSSProperties: React.CSSProperties = {
  pointerEvents: 'none',
  opacity: 0,
  visibility: "hidden"
}

export function DropContainer<TItemType extends string, TData>
  (props: React.PropsWithChildren<StylableDropContainerProps<TItemType, TData>>) {
  const [{ isActive, isDragging }, drop] = useDrop({
    hover: (itm) => {
      console.log(itm)
    },
    accept: props.acceptedItemTypes,
    collect: monitor => ({
      isActive: monitor.canDrop() && monitor.isOver(),
      isDragging: monitor.getItem()
    }),
    drop(item: DragItem<TItemType, TData>, monitor) {
      const initial = monitor.getInitialSourceClientOffset() as XYCoord;
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      const left = Math.round(delta.x + initial.x)
      const top = Math.round(delta.y + initial.y)
      if (props.onItemDropped) {
        props.onItemDropped({ ...item }, { top, left });
      }
      return { ...item }
    }
  })

  return (
    <div ref={drop} style={props.onlyAppearOnDrag && !isDragging ? { ...props.style, ...draggingCSSProperties } : { ...props.style }}
      className={`${props.className} ${isActive ? props.className + '-active' : ''}`}
    >
      {props.children}
    </div>
  )
}
