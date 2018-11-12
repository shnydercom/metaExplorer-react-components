"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const aspect_container_1 = require("./aspect-container");
class HeroGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { backgroundComp, foregroundComp } = this.props;
        const { leftBtnLabel, rightBtnLabel, topHeader, subHeader } = this.props;
        return React.createElement("div", { className: "hero-gallery" },
            React.createElement("div", { className: "bg-container" }, backgroundComp),
            React.createElement("div", { className: "hero-front-outer overlay-gradient" },
                React.createElement(aspect_container_1.default, { ratioA: 16, ratioB: 9, topTitle: React.createElement("div", { className: "hero-text" },
                        React.createElement("h4", null, topHeader)), subTitle: React.createElement("div", { className: "hero-text" },
                        React.createElement("h4", null, subHeader)) },
                    React.createElement("div", { className: "hero-front-inner" },
                        React.createElement("div", { className: "fg-container" }, foregroundComp),
                        React.createElement("div", { className: "btns" },
                            React.createElement("div", { className: "prev" },
                                React.createElement("span", { className: "start" }),
                                React.createElement("span", { className: "mid" }, leftBtnLabel),
                                React.createElement("span", { className: "end" })),
                            React.createElement("div", { className: "nxt" },
                                React.createElement("span", { className: "start" }),
                                React.createElement("span", { className: "mid" }, rightBtnLabel),
                                React.createElement("span", { className: "end" })))))));
    }
}
exports.default = HeroGallery;
