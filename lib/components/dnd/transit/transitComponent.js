"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
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
    let x = /* -*/ currentOffset.x; //- initialClientOffset.x + initialOffset.x;
    let y = /* -*/ currentOffset.y; //- initialClientOffset.y + initialOffset.y;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        width: 'fit-content',
        transform,
        WebkitTransform: transform,
    };
}
function TransitComponent(props) {
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
        const transitComp = props.transitComponents.find((val) => val.forType === itemType);
        if (transitComp) {
            return transitComp.componentFactory(item)(item);
        }
        return null;
    }
    if (!isDragging) {
        return null;
    }
    return (React.createElement("div", { style: layerStyles, className: props.className },
        React.createElement("div", { style: getItemStyles(initialOffset, currentOffset, initialClientOffset) }, renderItem())));
}
exports.TransitComponent = TransitComponent;
