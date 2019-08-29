import { Component } from 'preact';
import { Model } from "./types";
import { ReportViewer } from "../../control";
declare type Props = {
    viewer: ReportViewer;
    onPanelChange?: (panelId: string | null) => void;
};
declare type State = Model & {
    narrowScreen: boolean;
};
export declare class View extends Component<Props, State> {
    private _menu;
    constructor(props: Props);
    private onStateChanged;
    private onToggle;
    render(): JSX.Element | null;
}
export {};
