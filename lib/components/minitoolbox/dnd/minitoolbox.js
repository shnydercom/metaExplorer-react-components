"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const watch_1 = require("../opened-menus/watch");
const phone_1 = require("../opened-menus/phone");
exports.CSS_CLASSNAME = "minitoolbox";
const hiddenIntangibleChildren = {
    height: "100px",
    width: "100px",
    visibility: "hidden",
    pointerEvents: "none",
    opacity: 0,
    position: "fixed",
    top: "-200px",
    left: "-200px"
};
exports.MiniToolBox = (props) => {
    //is it minified or previewing?
    const [isMini, setIsMini] = React.useState(false);
    //when hovering, opens up the phone/watch selection
    const [isMiniOpen, setIsMiniOpen] = React.useState(false);
    //which preview is shown
    const [activeEditor, setActiveEditor] = React.useState(props.activeState ? props.activeState : "phoneEd");
    React.useEffect(() => {
        const lIsMiniOpen = props.isMini;
        if (lIsMiniOpen !== undefined && lIsMiniOpen !== null && lIsMiniOpen !== isMini) {
            setIsMini(lIsMiniOpen);
        }
        if (props.activeState) {
            setActiveEditor(props.activeState);
        }
    }, [props]);
    const phoneBtnProps = [
        {
            iconSrc: "/static/minimize.svg",
            onClick: () => {
                props.onMiniChanged && props.onMiniChanged(isMini);
                toggleMini();
            }
        },
        {
            iconSrc: "/static/maximize.svg",
            onClick: () => {
                props.onMaxiClick && props.onMaxiClick();
            }
        },
        {
            iconSrc: "/static/up.svg",
            onClick: () => {
                props.onUpClick && props.onUpClick();
            }
        }
    ];
    const toggleMini = () => {
        setIsMini(!isMini);
        if (!isMini) {
            setIsMiniOpen(false);
        }
        else {
            setIsMiniOpen(true);
        }
    };
    const watchBtnProps = [
        {
            iconSrc: "/static/minimize.svg",
            onClick: () => {
                props.onMiniChanged && props.onMiniChanged(isMini);
                toggleMini();
            }
        },
        {
            iconSrc: "/static/maximize.svg",
            onClick: () => {
                props.onMaxiClick && props.onMaxiClick();
            }
        },
        {
            iconSrc: "/static/up.svg",
            onClick: () => {
                props.onUpClick && props.onUpClick();
            }
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
                React.createElement(phone_1.Phone, { btnProps: phoneBtnProps, phoneClass: `${exports.CSS_CLASSNAME}-${isMini ? 'mini' : 'max'} ` }, !isMini && activeEditor === 'phoneEd' ? props.children : null)),
            isMini ? React.createElement("div", { style: hiddenIntangibleChildren }, props.children) : null));
    };
    const { className } = props;
    return (React.createElement("div", { className: `${exports.CSS_CLASSNAME}-root` }, renderContent()));
};
