"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class CircleView extends React.Component {
    constructor(props) {
        super(props);
        this.divElement = null;
        this.state = {
            height: 0,
            width: 0
        };
    }
    componentDidMount() {
        const height = this.divElement.clientHeight;
        const width = this.divElement.clientWidth;
        this.setState({ height, width });
    }
    componentDidUpdate() {
        const height = this.divElement.clientHeight;
        const width = this.divElement.clientWidth;
        if (height !== this.state.height && width !== this.state.width) {
            this.setState({ height, width });
        }
    }
    render() {
        const { children, className } = this.props;
        console.dir(this.state);
        const isWider = this.state.width > this.state.height;
        const innerCircleStyle = {
            borderRadius: "50%",
            height: isWider ? this.state.height : this.state.width,
            width: isWider ? this.state.height : this.state.width,
            overflow: "hidden"
        };
        return React.createElement("div", { className: className ? "circle " + className : "circle", ref: (divElement) => this.divElement = divElement },
            React.createElement("div", { style: innerCircleStyle }, children));
    }
}
exports.default = CircleView;
