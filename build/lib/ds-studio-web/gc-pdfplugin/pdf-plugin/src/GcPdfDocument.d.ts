//@ts-ignore
import { PluginModel } from "@grapecity/viewer-core";
import { IHttpClient } from './httpClient';
import { GcPdfSearcher } from './Search/GcPdfSearcher';
import { AttachmentNode } from './Attachments/types';
import { GcPdfPrintService } from './Print/GcPdfPrintService';
//@ts-ignore
import { Store } from "@grapecity/viewer-core/lib/control";
export declare type ParameterInfo = {
    Name: string;
    Omit?: boolean;
    Value: string;
};
export declare type InteractivityAction = {
    Type: 'toggle';
    Data: string;
} | {
    Type: 'sort';
    Data: string;
};
export declare type DrillthroughAction = {
    Type: 'drillthrough';
    Target: string;
    Parameters: ParameterInfo[];
};
export declare class GcPdfDocument implements PluginModel.IDocument {
    readonly docViewer: any;
    readonly fileDataOrUrl: any;
    readonly http: IHttpClient;
    readonly _searcher: GcPdfSearcher;
    private _attachmentsStore;
    private _pdfDocument;
    private _interactivityActions;
    private _documentView;
    private _printService;
    private _openDocPromise;
    constructor(docViewer: any, fileDataOrUrl: any, http: IHttpClient, _searcher: GcPdfSearcher);
    cleanup(): void;
    canView: () => boolean;
    readonly fileData: Uint8Array;
    storeInteractivity: (it: InteractivityAction[]) => number;
    readonly storeI11yPos: number;
    truncateInteractivityStore(pos: number): void;
    createView: (baseView: PluginModel.IDocumentView | null, sink: PluginModel.IRunEventsSink) => Promise<PluginModel.IDocumentView>;
    readonly attachmentsStore: Store<any, any>;
    updateView: (view: PluginModel.IDocumentView, sink: PluginModel.IRunEventsSink) => Promise<PluginModel.IDocumentView>;
    readonly printService: GcPdfPrintService;
    print(): void;
    private loadAttachments;
    appendAttachment(attachment: AttachmentNode): void;
    private getArticles;
    private getOutline;
    private _fillOutlineTree;
}
