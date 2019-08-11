"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const mini_button_1 = require("../opened-menus/mini-button");
const ItemTypes_1 = require("./ItemTypes");
const watch_1 = require("../opened-menus/watch");
const phone_1 = require("../opened-menus/phone");
const minitoolbox_draglayer_1 = require("./minitoolbox-draglayer");
exports.CSS_CLASSNAME = "minitoolbox";
exports.MiniToolBox = (props) => {
    const [isMini, setIsMini] = React.useState(false);
    const [isMiniOpen, setIsMiniOpen] = React.useState(false);
    const [activeEditor, setActiveEditor] = React.useState("phoneEd");
    const [{ isDragging }, drag, preview] = react_dnd_1.useDrag({
        item: { id: props.id, left: props.left, top: props.top, type: ItemTypes_1.ItemTypes.MiniToolBox },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        }),
    });
    const phoneBtnProps = [
        {
            iconSrc: "/static/minimize.svg",
            onClick: () => {
                console.log(isMini);
                toggleMini();
            }
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
    const toggleMini = () => {
        setIsMini(!isMini);
        if (!isMini)
            setIsMiniOpen(false);
    };
    const watchBtnProps = [
        {
            iconSrc: "/static/minimize.svg",
            onClick: () => {
                toggleMini();
                console.log(isMini);
            }
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
    const renderContent = (isDragLayer) => {
        return (React.createElement("div", { onMouseOver: isMini ? (e) => setIsMiniOpen(true) : (e) => { }, onMouseOut: isMini ? (e) => {
                setIsMiniOpen(false);
                if (props.onOutDragHandle)
                    props.onOutDragHandle();
            } : (e) => { }, className: `${exports.CSS_CLASSNAME}-enclosing ${className ? className : ''}` },
            React.createElement("div", { onClick: isMini ? (e) => {
                    setActiveEditor("watchEd");
                    toggleMini();
                } : (e) => { }, className: `
			${exports.CSS_CLASSNAME}-watchcontainer
			${exports.CSS_CLASSNAME}-watchcontainer-${isMini ? 'mini' : 'max'}
			${exports.CSS_CLASSNAME}-watchcontainer-${activeEditor === 'watchEd' ? 'active' : 'inactive'}
			${isMini ? isMiniOpen && activeEditor !== 'watchEd' ? 'mini-open' : 'mini-closed' : ''}
			`, style: { pointerEvents: 'all' } },
                React.createElement(watch_1.Watch, { btnProps: watchBtnProps, watchClass: `${exports.CSS_CLASSNAME}-${isMini ? 'mini' : 'max'}` }, !isMini && activeEditor === 'watchEd' ? props.children : null)),
            React.createElement("div", { onMouseOut: (e) => { if (props.onOutDragHandle)
                    props.onOutDragHandle(); }, onClick: isMini ? (e) => {
                    setActiveEditor("phoneEd");
                    toggleMini();
                } : (e) => { }, className: `
			${exports.CSS_CLASSNAME}-phonecontainer
			${exports.CSS_CLASSNAME}-phonecontainer-${isMini ? 'mini' : 'max'} 
			${exports.CSS_CLASSNAME}-phonecontainer-${activeEditor === 'phoneEd' ? 'active' : 'inactive'}
			${isMini ? isMiniOpen && activeEditor !== 'phoneEd' ? 'mini-open' : 'mini-closed' : ''}
			`, style: { pointerEvents: 'all' } },
                React.createElement(phone_1.Phone, { btnProps: phoneBtnProps, phoneClass: `${exports.CSS_CLASSNAME}-${isMini ? 'mini' : 'max'} ` }, !isMini && activeEditor === 'phoneEd' ? props.children : null)),
            isDragLayer
                ? React.createElement(mini_button_1.MiniButton, { className: "minitoolbox-dndhandle", iconSrc: "/static/move.svg", onClick: () => { }, btnStyle: { pointerEvents: 'all' }, onMouseOut: (e) => { if (props.onOutDragHandle)
                        props.onOutDragHandle(); }, onMouseEnter: (e) => { if (props.onOverDragHandle)
                        props.onOverDragHandle(); } })
                : React.createElement(mini_button_1.MiniButton, { className: "minitoolbox-dndhandle", iconSrc: "/static/move.svg", btnRef: drag, onClick: () => { }, btnStyle: { pointerEvents: 'all' }, onMouseOut: (e) => { if (props.onOutDragHandle)
                        props.onOutDragHandle(); }, onMouseEnter: (e) => { if (props.onOverDragHandle)
                        props.onOverDragHandle(); } })));
    };
    //					
    const { className } = props;
    return (React.createElement("div", { className: `${exports.CSS_CLASSNAME}-root`, style: { left: props.left, top: props.top } },
        React.createElement(minitoolbox_draglayer_1.default, { style: { left: props.left, top: props.top } }, renderContent(true)),
        React.createElement("div", { ref: preview, style: { height: 0, width: 0 } }),
        isDragging ? null : renderContent(false)));
};
