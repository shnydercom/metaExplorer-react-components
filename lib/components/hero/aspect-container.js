"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class AspectContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { topTitle, subTitle } = this.props;
        let viewBoxVal = '0 0 ' + this.props.ratioA + ' ' + this.props.ratioB;
        return (React.createElement("div", { className: "hero-h-square" },
            React.createElement("svg", { viewBox: '0 0 1 1' }),
            React.createElement("div", { className: "hero-h-inner" },
                React.createElement("div", { className: "titles" }, topTitle),
                React.createElement("div", { className: "hero-v-square" },
                    React.createElement("svg", { viewBox: viewBoxVal }),
                    React.createElement("div", { className: "hero-v-inner" }, this.props.children)),
                React.createElement("div", { className: "titles" }, subTitle))));
    }
}
exports.default = AspectContainer;
