"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const CSS_CLASSNAME = "minitoolbox-minibutton";
exports.MiniButton = (props) => {
    return (React.createElement("div", { ref: props.btnRef, style: props.btnStyle, className: `${CSS_CLASSNAME} ${props.className}`, onClick: props.onClick },
        React.createElement("div", { className: `${CSS_CLASSNAME}-display` },
            React.createElement("img", { src: props.iconSrc }),
            props.children)));
};
