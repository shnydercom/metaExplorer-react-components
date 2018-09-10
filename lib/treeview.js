"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_accessible_accordion_1 = require("react-accessible-accordion");
require("./treeview.scss");
class TreeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { entry, children } = this.props;
        let subTrees = [];
        for (let idx = 0; idx < entry.subEntries.length; idx++) {
            const elem = entry.subEntries[idx];
            subTrees.push(React.createElement(TreeView, { entry: elem }));
        }
        return React.createElement(react_accessible_accordion_1.Accordion, { accordion: false },
            React.createElement(react_accessible_accordion_1.AccordionItem, null,
                React.createElement(react_accessible_accordion_1.AccordionItemTitle, null,
                    React.createElement("div", { className: "u-position-relative" },
                        entry.label,
                        React.createElement("div", { className: "accordion__arrow", role: "presentation" }))),
                React.createElement(react_accessible_accordion_1.AccordionItemBody, null,
                    React.createElement("div", { className: "treeview-content treeview-top" }, children),
                    subTrees.length > 0 ? React.createElement("div", { className: "treeview-content" }, subTrees) : null,
                    React.createElement("div", { className: "treeview-content" }, entry.flatContent))));
        /*return <>
            <button onClick={() => {
                this.setState({ isOpen: !this.state.isOpen });
            }} className={buttonStyles}>{entry.label}</button>
            <div className="treeview-panel" style={isOpen ? { maxHeight: entryHeight + "px" } : null}>
                {subTrees.length > 0 ? <p>{subTrees}</p> : null}
                <div>{entry.flatContent}</div>
                <div>{children}</div>
            </div>
        </>;*/
    }
}
exports.default = TreeView;
//# sourceMappingURL=treeview.js.map