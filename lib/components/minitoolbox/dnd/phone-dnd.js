"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const ItemTypes_1 = require("./ItemTypes");
const phone_1 = require("../opened-menus/phone");
const phone_draglayer_1 = require("./phone-draglayer");
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
const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'grey',
    width: '100%',
    height: '100%'
};
const handleStyle = {
    backgroundColor: 'green',
    width: '1rem',
    height: '1rem',
    display: 'inline-block',
    marginRight: '0.75rem',
    cursor: 'move',
};
exports.PhoneDND = () => {
    const [{ opacity, height }, drag, preview] = react_dnd_1.useDrag({
        item: { type: ItemTypes_1.ItemTypes.MiniToolBox },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0 : 1,
            height: monitor.isDragging() ? 0 : '',
        }),
    });
    phoneBtnProps[0].btnRef = drag;
    //phoneBtnProps[0].btnStyle = { opacity, height };
    return (
    //<div  style={{ ...style, opacity }}>
    /*<div ref={drag} style={handleStyle} />*/
    React.createElement(React.Fragment, null,
        React.createElement(phone_draglayer_1.default, null),
        React.createElement("div", { ref: preview, style: { height: 0, width: 0 } }),
        React.createElement(phone_1.Phone, { phoneStyle: { opacity, height }, btnProps: phoneBtnProps }))
    //	</div>
    );
};
exports.default = exports.PhoneDND;
