"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
exports.MoveWrapper = props => {
    return React.createElement("div", { style: {
            position: 'absolute',
            left: props.left,
            top: props.top
        } }, props.children);
};
