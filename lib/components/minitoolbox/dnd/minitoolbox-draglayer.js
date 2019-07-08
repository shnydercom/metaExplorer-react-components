"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const ItemTypes_1 = require("./ItemTypes");
const layerStyles = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
};
function getItemStyles(initialOffset, currentOffset, initialClientOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    let x = currentOffset.x - initialOffset.x; //- initialClientOffset.x;
    let y = currentOffset.y - initialOffset.y; // - initialClientOffset.y;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}
exports.MiniToolBoxDragLayer = props => {
    const { itemType, isDragging, item, initialOffset, initialClientOffset, currentOffset, } = react_dnd_1.useDragLayer(monitor => {
        return {
            item: monitor.getItem(),
            itemType: monitor.getItemType(),
            initialClientOffset: monitor.getInitialClientOffset(),
            initialOffset: monitor.getInitialSourceClientOffset(),
            currentOffset: monitor.getSourceClientOffset(),
            isDragging: monitor.isDragging(),
        };
    });
    function renderItem() {
        switch (itemType) {
            case ItemTypes_1.default.MiniToolBox:
                if (props.children)
                    return React.createElement(React.Fragment, null, props.children);
            default:
                return null;
        }
    }
    if (!isDragging) {
        return null;
    }
    return (React.createElement("div", { style: layerStyles },
        React.createElement("div", { style: getItemStyles(initialOffset, currentOffset, initialClientOffset) }, renderItem())));
};
exports.default = exports.MiniToolBoxDragLayer;
