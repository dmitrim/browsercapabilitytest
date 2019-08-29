import GcPdfViewer from "./GcPdfViewer";
//@ts-ignore
import { ViewSettings } from "@grapecity/viewer-core/lib/components/DocumentViewer";
import { ViewerOptions } from "./ViewerOptions";
import PdfReportPlugin from "./plugin";
declare type ViewerState = {
    settings: ViewSettings;
    rotation: number;
    theme?: string;
    activePanelId?: string | null;
    isSidebarPinned: boolean;
    file?: string;
};
export declare class GcPdfViewerStateStorage {
    private _viewer;
    private _plugin;
    private _file?;
    private _fileRestored;
    constructor(_viewer: GcPdfViewer, _plugin: PdfReportPlugin);
    save(viewerStateArg?: Partial<ViewerState>): void;
    load(options: ViewerOptions, initialViewWasSet: boolean): void;
    onFileClosed(): void;
    onFileOpenByData(fileData: Uint8Array): void;
    onFileOpenByUrl(pdfUrl: string): void;
}
export {};
