import { Model, Msg as ModelMsg } from "./types";
/// <reference path="../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
declare type ErrorPanelProps = {
    dispatch: (cmd: ModelMsg) => void;
};
declare type ErrorPanelState = Model & {
    dismissedErrors: number[];
};
export declare class View extends Component<ErrorPanelProps, ErrorPanelState> {
    constructor(props: ErrorPanelProps);
    private onDismissAll;
    private dismissError;
    render(): JSX.Element | null;
}
export {};
