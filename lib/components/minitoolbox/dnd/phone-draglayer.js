"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const ItemTypes_1 = require("./ItemTypes");
const phone_1 = require("../opened-menus/phone");
const phoneBtnProps = [
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
function getItemStyles(initialOffset, currentOffset, initialClientOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }
    console.log(currentOffset);
    console.log(initialOffset);
    console.log(initialClientOffset);
    let x = currentOffset.x - initialOffset.x; //- initialClientOffset.x;
    let y = currentOffset.y - initialOffset.y + 46; // - initialClientOffset.y;
    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
    };
}
exports.PhoneDragLayer = props => {
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
                return React.createElement(phone_1.Phone, { btnProps: phoneBtnProps });
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
exports.default = exports.PhoneDragLayer;
