"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const ItemTypes_1 = require("./ItemTypes");
const watch_1 = require("../opened-menus/watch");
const watchBtnProps = [
    {
        iconSrc: "/static/minimize.svg",
        onClick: () => { }
    },
    {
        iconSrc: "/static/maximize.svg",
        onClick: () => { }
    },
    {
        iconSrc: "/static/up.svg",
        onClick: () => { }
    }
];
const layerStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
};
function getItemStyles(initialOffset, currentOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    let x = currentOffset.x - initialOffset.x;
    let y = currentOffset.y - initialOffset.y + 46;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}
exports.WatchDragLayer = props => {
    const { itemType, isDragging, item, initialOffset, currentOffset, } = react_dnd_1.useDragLayer(monitor => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }));
    function renderItem() {
        switch (itemType) {
            case ItemTypes_1.default.MiniToolBox:
                return React.createElement(watch_1.Watch, { btnProps: watchBtnProps });
            default:
                return null;
        }
    }
    if (!isDragging) {
        return null;
    }
    return (React.createElement("div", { style: layerStyles },
        React.createElement("div", { style: getItemStyles(initialOffset, currentOffset) }, renderItem())));
};
exports.default = exports.WatchDragLayer;
