/// <reference path="../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
//@ts-ignore
import { ReportViewer } from '@grapecity/viewer-core/lib/control';
import 'whatwg-fetch';
//@ts-ignore
import { PanelHandle } from '@grapecity/viewer-core/lib/api/PluginModel';
declare type ReportInfo = {
    name: string;
    path: string;
};
declare type Model = {
    reports: ReportInfo[];
};
declare type Props = {
    openReport: (name: string) => void;
};
export declare class DocumentList extends Component<Props, Model> {
    constructor();
    onSelect: ({ path }: {
        path: any;
    }) => () => void;
    render(): JSX.Element;
}
declare function addDocumentListPanel(host: ReportViewer): PanelHandle;
export default addDocumentListPanel;
