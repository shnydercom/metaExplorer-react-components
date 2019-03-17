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
            React.createElement("div", { className: "overlay-gradient" }),
            React.createElement("div", { className: "hero-front-outer" },
                React.createElement(aspect_container_1.default, { ratioA: 4, ratioB: 3, topTitle: React.createElement("div", { className: "hero-text" },
                        React.createElement("h4", null, topHeader)), subTitle: React.createElement("div", { className: "hero-text" },
                        React.createElement("h4", null, subHeader)) },
                    React.createElement("div", { className: "hero-front-inner" },
                        React.createElement("div", { className: "fg-container" }, foregroundComp),
                        React.createElement("div", { className: "btns" },
                            React.createElement("div", { className: "prev hero-btn", onClick: () => this.props.onLeftBtnClick() },
                                React.createElement("span", { className: "start" },
                                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "200%", height: "100%", viewBox: "-12 0 24 24" },
                                        React.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z", className: "chevron-left" }),
                                        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))),
                                React.createElement("span", { className: "mid" }, leftBtnLabel),
                                React.createElement("span", { className: "end" })),
                            React.createElement("div", { className: "nxt hero-btn", onClick: () => this.props.onRightBtnClick() },
                                React.createElement("span", { className: "start" }),
                                React.createElement("span", { className: "mid" }, rightBtnLabel),
                                React.createElement("span", { className: "end" },
                                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "200%", height: "100%", viewBox: "0 0 48 24" },
                                        React.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z", className: "chevron-right" }),
                                        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })))))))));
    }
}
exports.default = HeroGallery;
