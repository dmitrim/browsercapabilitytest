/// <reference path="../../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
import { DocumentProperties } from './DocumentProperties';
export declare function readableBytes(bytes: any): string;
export declare class PropertiesDialog extends Component<any, DocumentProperties> {
    rootElement: HTMLDivElement;
    constructor(props: any);
    readonly isVisible: boolean;
    close(): void;
    shouldComponentUpdate(): boolean;
    show(metaDataPromise: Promise<DocumentProperties>): void;
    hide(): void;
    onMouseUp(e: Event): boolean;
    render(): JSX.Element;
    showTab(e: Event): void;
    _showTabInternal(className: string): void;
    _fillElements(fieldNames: {
        key: string;
        label?: string;
        value?: string;
        optional?: boolean;
        noLabel?: boolean;
    }[], state: any): JSX.Element[];
}
