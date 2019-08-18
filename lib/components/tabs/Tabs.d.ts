export interface ITabData<TData> {
    label: string;
    data: TData;
}
export interface ITabsProps<TData> {
    selectedIdx: number;
    tabs: ITabData<TData>[];
    className: string;
    onSelectionChange?: (data: ITabData<TData>, idx: number) => void;
}
export declare function Tabs<TData>(props: ITabsProps<TData>): JSX.Element;
