import { Component } from 'preact';
import { Model } from "./types";
import { ReportViewerCmd } from "../../api/ReportViewerCmd";
export declare type DocumentViewerProps = {
    dispatchViewerCmd: (cmd: ReportViewerCmd) => void;
    onClick: JSX.EventHandler<MouseEvent>;
};
export declare class View extends Component<DocumentViewerProps, Model> {
    constructor();
    render(): JSX.Element;
}
