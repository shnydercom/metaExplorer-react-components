"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const dragOpacityDummy = {
    width: '100%',
    height: '100%',
    opacity: 0,
    left: 0,
    top: 0,
    position: 'absolute',
    pointerEvents: "all",
    zIndex: 99,
    backgroundColor: 'blue',
    cursor: 'move'
};
function DragContainer(props) {
    let preview = null;
    const [{ isDragging }, drag,] = react_dnd_1.useDrag({
        item: {
            id: props.id,
            type: props.type,
            sourceBhv: props.sourceBhv,
            targetBhv: props.targetBhv,
            data: props.data
        },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });
    const returnContent = () => (props.children);
    const returnSourceBehaviour = () => {
        if (isDragging) {
            switch (props.sourceBhv) {
                case 'sGone':
                    return React.createElement("div", { ref: preview, style: { height: 0, width: 0 } });
                case 'sCopy':
                //fallthrough on purpose
                default:
                    break;
            }
        }
        return returnContent();
    };
    const dragStyle = {
        pointerEvents: isDragging || props.isTransitDummy
            ? 'none'
            : 'all',
        left: props.dragOrigin.left,
        top: props.dragOrigin.top
    };
    const dragOpacityDummyConditional = Object.assign({}, dragOpacityDummy, { pointerEvents: isDragging || props.isTransitDummy ? 'none' : 'all' });
    if (props.isWithDragHandle) {
        return React.createElement("div", { ref: preview, style: dragStyle, className: `${props.className} ${isDragging ? props.className + '-drag' : ''}` },
            React.createElement("div", { className: `${props.className + '-handle'}` },
                React.createElement("div", { ref: drag, style: dragOpacityDummyConditional })),
            returnContent());
    }
    else {
        return React.createElement("div", { style: dragStyle, className: `${props.className} ${isDragging ? props.className + '-drag' : ''}` },
            React.createElement("div", { style: { position: 'relative' } },
                returnSourceBehaviour(),
                React.createElement("div", { ref: drag, style: dragOpacityDummyConditional }, returnSourceBehaviour())));
    }
}
exports.DragContainer = DragContainer;
