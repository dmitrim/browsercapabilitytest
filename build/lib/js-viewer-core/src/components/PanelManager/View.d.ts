/// <reference path="../../../../vendor/preact.d.ts" />
//@ts-ignore
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
    private _disposables;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private onStateChanged;
    render(): JSX.Element | null;
}
export {};
