"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ThreePartCardView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { children, className, frontContent, middleContent, lastContent, style } = this.props;
        return React.createElement("div", { style: style, className: className ? className : null },
            React.createElement("div", { className: "mdc-card card" },
                frontContent ?
                    React.createElement("div", { className: "mdc-card__actions front" }, frontContent)
                    : null,
                middleContent ?
                    React.createElement("div", { className: "mdc-card__primary-action middle" },
                        middleContent,
                        children)
                    : null,
                lastContent ?
                    React.createElement("div", { className: "mdc-card__actions last" }, lastContent)
                    : null));
    }
}
exports.default = ThreePartCardView;
