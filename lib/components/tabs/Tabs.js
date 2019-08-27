"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Tab_1 = require("./Tab");
function Tabs(props) {
    const internalCSSClass = 'mrc-tabs';
    const [selectedIdx, setSelectedIdx] = React.useState(0);
    const updateInternalIdx = (val) => {
        if (val < 0 || val > props.tabs.length - 1)
            return false;
        if (val === selectedIdx)
            return false;
        setSelectedIdx(val);
        if (props.onSelectionChange) {
            props.onSelectionChange(props.tabs[val], val);
        }
        return true;
    };
    React.useEffect(() => {
        const selIdx = props.selectedIdx;
        updateInternalIdx(selIdx);
    }, [props]);
    return React.createElement("div", { className: props.className },
        React.createElement("div", { className: internalCSSClass }, props.tabs.map((tab, idx) => {
            return React.createElement(Tab_1.Tab, { className: `${internalCSSClass}-tab`, label: tab.label, index: idx, key: 'tab' + idx, isSelected: idx === selectedIdx, onTabClicked: (index) => { updateInternalIdx(index); } });
        })));
}
exports.Tabs = Tabs;
