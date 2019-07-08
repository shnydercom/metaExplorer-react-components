"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const ItemTypes_1 = require("./ItemTypes");
const immutability_helper_1 = require("immutability-helper");
const styles = {
    width: 1000,
    height: 1000,
    border: '1px solid black',
    position: 'relative',
};
const initialPosition = { top: 20, left: 80 };
exports.DropContainer = (props) => {
    const [boxes, setBoxes] = React.useState({
        a: Object.assign({}, initialPosition)
    });
    const [, drop] = react_dnd_1.useDrop({
        accept: ItemTypes_1.default.MiniToolBox,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveBox(item.id, left, top);
            return undefined;
        },
    });
    const moveBox = (id, left, top) => {
        setBoxes(immutability_helper_1.default(boxes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    };
    return (React.createElement("div", { ref: drop, style: styles }, (Object.keys(boxes).map((key, idx) => {
        const { left, top } = boxes[key];
        const newChildProps = { left, top };
        const isArr = Array.isArray(props.children);
        if (!isArr && idx > 0)
            return null;
        const newChild = isArr ? props.children[idx] : props.children;
        if (idx > props.children.length - 1)
            return null;
        if (!newChild)
            return null;
        return React.cloneElement(newChild, newChildProps);
    }))));
};