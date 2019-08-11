"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const ItemTypes_1 = require("./ItemTypes");
const immutability_helper_1 = require("immutability-helper");
const styles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
};
const initialPosition = { top: 20, left: 80 };
exports.DropContainer = (props) => {
    let containerStyles = Object.assign({}, styles);
    const [boxes, setBoxes] = React.useState({
        a: Object.assign({}, initialPosition)
    });
    const [, drop] = react_dnd_1.useDrop({
        accept: [ItemTypes_1.ItemTypes.MiniToolBox, ItemTypes_1.ItemTypes.Block],
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            if (item.type === ItemTypes_1.ItemTypes.MiniToolBox)
                moveBox(item.id, left, top);
            if (!!item.data)
                return Object.assign({}, item);
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
    containerStyles.pointerEvents = props.isDropZoneClickthrough ? 'none' : 'all';
    return (React.createElement("div", { ref: drop, style: containerStyles }, (Object.keys(boxes).map((key, idx) => {
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
