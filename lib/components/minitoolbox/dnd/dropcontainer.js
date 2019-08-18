"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const ItemTypes_1 = require("./ItemTypes");
const immutability_helper_1 = require("immutability-helper");
const shortId = require("shortid");
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
    React.useEffect(() => {
        console.log("effect triggered");
        const isArr = Array.isArray(props.children);
        if (!isArr) {
            setBoxes({ a: Object.assign({}, initialPosition) });
            return;
        }
        const childrenArr = props.children;
        const nextBoxes = {};
        childrenArr.forEach(child => {
            console.log(child);
            const childProps = child['props'];
            console.log(childProps);
            if (!childProps.id
                || (!childProps.top && childProps.top !== 0)
                || (!childProps.left && childProps.left !== 0)
                || !childProps.type) {
                nextBoxes[shortId.generate()] = initialPosition;
            }
            else {
                nextBoxes[childProps.id] = {
                    top: childProps.top,
                    left: childProps.left
                };
            }
        });
        setBoxes(nextBoxes);
    }, [props]);
    const [boxes, setBoxes] = React.useState({});
    const [, drop] = react_dnd_1.useDrop({
        accept: [ItemTypes_1.ItemTypes.MiniToolBox, ItemTypes_1.ItemTypes.Block],
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            console.log(item);
            if (item.type === ItemTypes_1.ItemTypes.MiniToolBox)
                moveBox(item.id, left, top);
            if (item.type === ItemTypes_1.ItemTypes.Block) {
                if (!props.onBlockDropped) {
                    console.warn('dropped a block element but no onBlockDropped-handler was provided');
                    return Object.assign({}, item);
                }
                props.onBlockDropped(Object.assign({}, item));
                return Object.assign({}, item);
            }
            if (!!item.data)
                return Object.assign({}, item);
            return undefined;
        },
    });
    const moveBox = (id, left, top) => {
        console.log("moving blox");
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
