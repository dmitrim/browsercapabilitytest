/// <reference path="../../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
export declare class GcPdfPrintProgress extends Component<any, {
    percentage: number;
    maxValue: number;
}> {
    rootElement: HTMLDivElement;
    _cancel: any;
    constructor(props: any);
    maxValue: number;
    value: number;
    cancel(): void;
    show(cancelCallback: any): void;
    hide(): void;
    render(): JSX.Element;
}
