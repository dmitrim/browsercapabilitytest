import './themes/default.scss';
import PdfReportPlugin, { ErrorEventArgs } from './plugin';
import { ViewerOptions } from './ViewerOptions';
//@ts-ignore
import { ReportViewer, LoadResult, EventFan } from '@grapecity/viewer-core';
export declare class GcPdfViewer extends ReportViewer {
    private _plugin;
    private _isUpdating;
    constructor(element: any, options?: Partial<ViewerOptions>);
    enablePdfToolButtons(buttons?: string[] | "all" | 'none'): void;
    addDefaultPanels(): void;
    addDocumentListPanel(): void;
    addThumbnailsPanel(): void;
    addOutlinePanel(): void;
    addArticlesPanel(): void;
    addAttachmentsPanel(): void;
    readonly fileData: Uint8Array | null;
    readonly plugin: PdfReportPlugin;
    options: Partial<ViewerOptions>;
    open(file: any): Promise<LoadResult>;
    openLocalFile(): any;
    print(): void;
    save(fileName?: string): void;
    goBack(): void;
    goForward(): void;
    setTheme(theme?: string): void;
    rotation: number;
    readonly onError: EventFan<ErrorEventArgs>;
    beginUpdate(): void;
    endUpdate(): void;
    readonly isUpdating: boolean;
    applyOptions(): void;
    hideAnnotations: boolean;
    readonly version: string;
}
export default GcPdfViewer;
