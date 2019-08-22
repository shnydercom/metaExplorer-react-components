"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const draggingCSSProperties = {
    pointerEvents: 'none',
    opacity: 0,
    visibility: "hidden"
};
function DropContainer(props) {
    const [{ isActive, isDragging }, drop] = react_dnd_1.useDrop({
        hover: (itm) => {
            console.log(itm);
        },
        accept: props.acceptedItemTypes,
        collect: monitor => ({
            isActive: monitor.canDrop() && monitor.isOver(),
            isDragging: monitor.getItem()
        }),
        drop(item, monitor) {
            const initial = monitor.getInitialSourceClientOffset();
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(delta.x + initial.x);
            const top = Math.round(delta.y + initial.y);
            if (props.onItemDropped) {
                props.onItemDropped(Object.assign({}, item), { top, left });
            }
            return Object.assign({}, item);
        }
    });
    return (React.createElement("div", { ref: drop, style: props.onlyAppearOnDrag && !isDragging ? Object.assign({}, props.style, draggingCSSProperties) : Object.assign({}, props.style), className: `${props.className} ${isActive ? props.className + '-active' : ''}` }, props.children));
}
exports.DropContainer = DropContainer;
