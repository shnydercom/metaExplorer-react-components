"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const immutability_helper_1 = require("immutability-helper");
const moveWrapper_1 = require("./moveWrapper");
const react_dnd_1 = require("react-dnd");
function MoveContainer(props) {
    const { itemType, isDragging, item, initialOffset, initialClientOffset, currentOffset, } = react_dnd_1.useDragLayer(monitor => {
        return {
            item: monitor.getItem(),
            itemType: monitor.getItemType(),
            initialClientOffset: monitor.getInitialClientOffset(),
            initialOffset: monitor.getInitialSourceClientOffset(),
            currentOffset: monitor.getSourceClientOffset(),
            isDragging: monitor.isDragging(),
        };
    });
    React.useEffect(() => {
        const posMap = props.positionMap;
        const nextInternalPositions = {};
        for (const pos in posMap) {
            if (posMap.hasOwnProperty(pos)) {
                const posElem = posMap[pos];
                nextInternalPositions[pos] = {
                    top: posElem.pos.top,
                    left: posElem.pos.left
                };
            }
        }
        setInternalPositions(nextInternalPositions);
    }, [props]);
    const [internalPositions, setInternalPositions] = React.useState({});
    const moveInternalPositions = (id, left, top) => {
        setInternalPositions(immutability_helper_1.default(internalPositions, {
            [id]: {
                $merge: { top, left },
            },
        }));
    };
    const childrenContainerCSS = {
        position: "relative",
        height: '100%',
        width: '100%'
    };
    return (React.createElement("div", { className: `${props.className}`, style: {
            pointerEvents: 'none'
        } },
        React.createElement("div", { style: childrenContainerCSS }, (Object.keys(internalPositions).map((key, idx) => {
            const { left, top } = internalPositions[key];
            const newChildProps = { left, top };
            const newChild = props.positionMap[key].child;
            if (!newChild)
                return null;
            return (React.createElement(moveWrapper_1.MoveWrapper, Object.assign({}, newChildProps), newChild));
        })))));
}
exports.MoveContainer = MoveContainer;
