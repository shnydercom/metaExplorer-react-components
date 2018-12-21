"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_accessible_accordion_1 = require("react-accessible-accordion");
class TreeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    render() {
        const { entry, children } = this.props;
        const { isOpen } = this.state;
        let subTrees = [];
        let flatContents = [];
        if (isOpen) {
            for (let idx = 0; idx < entry.subEntries.length; idx++) {
                const elem = entry.subEntries[idx];
                subTrees.push(React.createElement(TreeView, { key: idx, entry: elem }));
            }
            for (let idx = 0; idx < entry.flatContent.length; idx++) {
                const fc = entry.flatContent[idx];
                flatContents.push(React.createElement("div", { className: "treeview-flatcontent-item", key: idx }, fc));
            }
        }
        return React.createElement(react_accessible_accordion_1.Accordion, { accordion: false, onChange: (ev) => {
                this.setState({ isOpen: ev[0] });
            } },
            React.createElement(react_accessible_accordion_1.AccordionItem, { expanded: isOpen },
                React.createElement(react_accessible_accordion_1.AccordionItemTitle, null,
                    React.createElement("div", { className: "u-position-relative" },
                        entry.label,
                        React.createElement("div", { className: "accordion__arrow", role: "presentation" }))),
                isOpen ? React.createElement(react_accessible_accordion_1.AccordionItemBody, null,
                    React.createElement("div", { className: "treeview-content treeview-top" }, children),
                    subTrees.length > 0 ? React.createElement("div", { className: "treeview-content" }, subTrees) : null,
                    React.createElement("div", { className: "treeview-content" }, flatContents))
                    : null));
    }
}
exports.default = TreeView;
