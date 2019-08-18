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
        setSelectedIdx(val);
        return true;
    };
    React.useEffect(() => {
        const selIdx = props.selectedIdx;
        const isUpdatable = updateInternalIdx(selIdx);
        if (props.onSelectionChange && isUpdatable) {
            props.onSelectionChange(props.tabs[selIdx], selIdx);
        }
    }, [props]);
    return React.createElement("div", { className: props.className },
        React.createElement("div", { className: internalCSSClass }, props.tabs.map((tab, idx) => {
            return React.createElement(Tab_1.Tab, { className: `${internalCSSClass}-tab`, label: tab.label, index: idx, key: 'tab' + idx, isSelected: idx === selectedIdx, onTabClicked: (index) => { setSelectedIdx(index); } });
        })));
}
exports.Tabs = Tabs;
