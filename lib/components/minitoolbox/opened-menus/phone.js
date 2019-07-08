"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const mini_button_1 = require("./mini-button");
const CSS_CLASSNAME = "minitoolbox-phonemenu";
exports.Phone = (props) => {
    return (React.createElement("div", { className: `${CSS_CLASSNAME} ${props.phoneClass ? props.phoneClass : ''}`, style: props.phoneStyle, ref: props.phoneRef },
        props.btnProps.map((btnProp, idx) => React.createElement(mini_button_1.MiniButton, Object.assign({ className: `${CSS_CLASSNAME}-btn-${idx}`, key: `minibtn-${idx}` }, btnProp))),
        React.createElement("div", { className: `${CSS_CLASSNAME}-preview` }, props.children)));
};
