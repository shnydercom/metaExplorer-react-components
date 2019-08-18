"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const watch_1 = require("../opened-menus/watch");
const phone_1 = require("../opened-menus/phone");
exports.CSS_CLASSNAME = "minitoolbox";
exports.MiniToolBox = (props) => {
    const [isMini, setIsMini] = React.useState(false);
    const [isMiniOpen, setIsMiniOpen] = React.useState(false);
    const [activeEditor, setActiveEditor] = React.useState("phoneEd");
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
    const renderContent = () => {
        return (React.createElement("div", { onMouseOver: isMini ? (e) => setIsMiniOpen(true) : (e) => { }, onMouseOut: isMini ? (e) => {
                setIsMiniOpen(false);
            } : (e) => { }, className: `${exports.CSS_CLASSNAME}-enclosing ${className ? className : ''}` },
            React.createElement("div", { onClick: isMini ? (e) => {
                    setActiveEditor("watchEd");
                    toggleMini();
                } : (e) => { }, className: `
			${exports.CSS_CLASSNAME}-watchcontainer
			${exports.CSS_CLASSNAME}-watchcontainer-${isMini ? 'mini' : 'max'}
			${exports.CSS_CLASSNAME}-watchcontainer-${activeEditor === 'watchEd' ? 'active' : 'inactive'}
			${isMini ? isMiniOpen && activeEditor !== 'watchEd' ? 'mini-open' : 'mini-closed' : ''}
			` },
                React.createElement(watch_1.Watch, { btnProps: watchBtnProps, watchClass: `${exports.CSS_CLASSNAME}-${isMini ? 'mini' : 'max'}` }, !isMini && activeEditor === 'watchEd' ? props.children : null)),
            React.createElement("div", { onClick: isMini ? (e) => {
                    setActiveEditor("phoneEd");
                    toggleMini();
                } : (e) => { }, className: `
			${exports.CSS_CLASSNAME}-phonecontainer
			${exports.CSS_CLASSNAME}-phonecontainer-${isMini ? 'mini' : 'max'} 
			${exports.CSS_CLASSNAME}-phonecontainer-${activeEditor === 'phoneEd' ? 'active' : 'inactive'}
			${isMini ? isMiniOpen && activeEditor !== 'phoneEd' ? 'mini-open' : 'mini-closed' : ''}
			` },
                React.createElement(phone_1.Phone, { btnProps: phoneBtnProps, phoneClass: `${exports.CSS_CLASSNAME}-${isMini ? 'mini' : 'max'} ` }, !isMini && activeEditor === 'phoneEd' ? props.children : null))));
    };
    const { className } = props;
    return (React.createElement("div", { className: `${exports.CSS_CLASSNAME}-root` }, renderContent()));
};
