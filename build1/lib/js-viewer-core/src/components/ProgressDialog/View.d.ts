import { Model, Msg as ModelMsg } from "./types";
/// <reference path="../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
declare type Props = {
    dispatch: (cmd: ModelMsg) => void;
    onCancel: () => void;
};
export declare class View extends Component<Props, Model> {
    constructor();
    onCancel: (_: any) => void;
    render(): JSX.Element | null;
}
export {};
