"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.Tab = (props) => {
    return (React.createElement("div", { className: `${props.className} ${props.isSelected ? props.className + '-selected' : ''}`, onClick: () => { props.onTabClicked(props.index); } }, props.label));
};
