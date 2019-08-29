/// <reference path="../../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
import { GcThumbnailViewer } from './GcThumbnailViewer';
import PdfReportPlugin from '../plugin';
export declare type ThumbnailsProps = {
    plugin: PdfReportPlugin;
    thumbnailViewer: GcThumbnailViewer;
    thumbnailsPanelInner: HTMLDivElement;
};
export declare class Thumbnails extends Component<ThumbnailsProps, any> {
    private _thumbsOuter;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _onPageLabels;
    private _onThumbnailsPanelMount;
}
