export interface DragItem {
    type: string;
    id: string;
    top: number;
    left: number;
    data?: any;
}
export declare const DND_MINI_TOOLBOX_TYPE = "minitoolbox";
export default DragItem;
