"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dnd_1 = require("react-dnd");
const dragOpacityDummy = {
    width: '100%',
    height: '100%',
    opacity: 0,
    position: 'absolute',
    pointerEvents: "all"
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
        }),
        end(item, monitor) {
            console.log(item);
            if (monitor.didDrop()) {
                console.log(monitor.didDrop());
            }
            else {
                console.log(monitor.didDrop());
            }
        }
    });
    const returnContent = () => (props.children);
    const returnSourceBehaviour = () => {
        if (isDragging) {
            switch (props.sourceBhv) {
                case 'sGone':
                    console.log("gone");
                    return React.createElement("div", { ref: preview, style: { height: 0, width: 0 } });
                case 'sCopy':
                //fallthrough on purpose
                default:
                    break;
            }
        }
        return returnContent();
    };
    if (props.isWithDragHandle) {
        return React.createElement("div", { ref: preview, className: `${props.className} ${isDragging ? props.className + '-drag' : ''}` },
            React.createElement("div", { className: `${props.className + '-handle'}` },
                React.createElement("div", { ref: drag, style: dragOpacityDummy })),
            returnContent());
    }
    else {
        return React.createElement("div", { className: `${props.className} ${isDragging ? props.className + '-drag' : ''}` },
            React.createElement("div", { style: { position: 'relative' } },
                React.createElement("div", { ref: drag, style: dragOpacityDummy }, returnSourceBehaviour()),
                returnSourceBehaviour()));
    }
}
exports.DragContainer = DragContainer;
