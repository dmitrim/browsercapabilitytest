/// <reference path="../../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
export declare type GcPdfPasswordDialogState = {
    inputValue: string;
    lastShowReason: number;
};
export declare class GcPdfPasswordDialog extends Component<any, GcPdfPasswordDialogState> {
    rootElement: HTMLDivElement;
    _updateCallback: any;
    _wrongPasswordMessage: HTMLSpanElement;
    _cancelCallback: any;
    constructor(props: any);
    readonly inputElement: HTMLInputElement;
    readonly wrongPassword: HTMLElement;
    onFormSubmit(event: Event): boolean;
    readonly isVisible: boolean;
    submitPassword(): void;
    cancel(): void;
    show(updateCallback: any, cancelCallback: any, reason?: any): void;
    hide(): void;
    onInputChange(e: any): void;
    onKeyUp(e: any): void;
    render(): JSX.Element;
}
