//@ts-ignore
import { PluginModel, DocumentMoniker, SearchFeature, ToolbarItem, Model } from '@grapecity/viewer-core';
//@ts-ignore
import { Store, EventFan } from '@grapecity/viewer-core/lib/control';
import * as Articles from './Articles';
import { ParameterInfo, InteractivityAction, DrillthroughAction } from './GcPdfDocument';
import { ViewerOptions } from './ViewerOptions';
import { GcPdfViewer } from './GcPdfViewer';
import { ArticleBead } from './Articles/types';
import { GcPdfViewerStateStorage } from './GcPdfViewerStateStorage';
import { ShortcutsConfig } from './Keyboard/ShortcutsConfig';
//@ts-ignore
import { PanelHandle } from '@grapecity/viewer-core/lib/api/PluginModel';
import { DocumentProperties } from './Properties/DocumentProperties';
declare type ReportEvent = PluginModel.ViewerEvent | {
    type: "ItemClicked";
    iStorePos: number;
    a: InteractivityAction;
};
declare type ReportAction = InteractivityAction | DrillthroughAction | {
    Type: "print";
} | {
    Type: "download";
} | {
    Type: "rotate";
} | {
    Type: "text-selection";
} | {
    Type: "pan";
} | {
    Type: "doc-properties";
};
export declare class ReportDocumentMoniker implements DocumentMoniker {
    readonly uri: string;
    readonly params: ParameterInfo[];
    readonly pluginKey = "pdf";
    constructor(uri: string, params: ParameterInfo[]);
}
export declare class ErrorEventArgs {
    readonly message: string;
    readonly source: GcPdfViewer;
    readonly type: 'open' | string;
    readonly exception?: any;
    constructor(message: string, source: GcPdfViewer, type: 'open' | string, exception?: any);
}
declare class PdfReportPlugin implements PluginModel.IPluginModule<ReportEvent, ReportAction> {
    readonly _viewer: GcPdfViewer;
    readonly pluginKey = "pdf";
    private readonly _httpClient;
    private _searcher;
    private _attachmentsPanel;
    private _articlesPanel;
    private _contentsPanel;
    private _thumbnailsPanel;
    private _pinchZoomGesture;
    private _shortcutsConfig;
    private _document;
    private _lastViewerState;
    private _titleToolbarItem;
    private _titleToolbarItemRemoved;
    private readonly _errorEvent;
    _options: ViewerOptions;
    _documentTitle: string;
    _outlineStore: Store<any, any> | null;
    _articlesStore: Store<any, any> | null;
    _attachmentsStore: Store<any, any> | null;
    _panelsUpdateKey: any;
    _pendingBinaryFiles: any;
    private _gcpdfdocumentviewer;
    private pdfUrl;
    _initialViewStateSetFlag: boolean;
    _articlesPanelComponent: Articles.View;
    _stateStorage: GcPdfViewerStateStorage;
    _loadDocViewerPromise: Promise<{}>;
    _cancelledInternal: boolean;
    private _constructed;
    _documentListPanel: PluginModel.PanelHandle;
    private _availablePanelsHash;
    _licenseErrorShown: boolean;
    constructor(_viewer: GcPdfViewer, options: Partial<ViewerOptions>);
    applyOptions(): void;
    options: ViewerOptions;
    readonly shortcutsConfig: ShortcutsConfig;
    readonly docViewer: any;
    dispose(): void;
    setDocumentListPanel(handle: PanelHandle): void;
    readonly documentListPanelId: string | null;
    _onError(event: any): void;
    _onMouseModeChange(event: any): void;
    _onFirstArticleBead(event: any): void;
    _onLastArticleBead(event: any): void;
    _onArticleBeadNavigate(event: any): void;
    _onDocumentClosed(): void;
    _onDocumentFullyLoaded(): void;
    private _onPageChange;
    private _onScaleChange;
    private _activePanelId;
    readonly activePanelId: string | null;
    pluginReady(): boolean;
    private _onPanelChange;
    private _onStateChange;
    _updatePanels(state: Model, force?: boolean): void;
    isPanelAvailable(panelId: string): boolean;
    addDocumentTitleTool(): void;
    addOutlinePanel(): void;
    addThumbnailsPanel(): void;
    addArticlesPanel(): void;
    addAttachmentsPanel(): void;
    readonly fileData: Uint8Array | null;
    _updateDocumentTitle(title?: string | null): void;
    renderPage(page: PluginModel.IPageData): PluginModel.PageView;
    renderHighlightPage(page: PluginModel.IPageData, results: SearchFeature.SearchResult[]): PluginModel.PageView;
    onEscapePressed(): void;
    onOpenDocument(document: PluginModel.IDocument | null): void;
    loadDocumentTitle(): Promise<void>;
    onOpenDocumentView(view: PluginModel.IDocumentView): void;
    resolveAction(_: any, event: MouseEvent): PluginModel.ViewerAction | ReportAction | null;
    processAction(context: PluginModel.ActionContext<ReportEvent>, action: ReportAction): boolean;
    getDocumentProperties(): Promise<DocumentProperties>;
    showAbout(): void;
    processEvent(context: PluginModel.ActionContext<ReportEvent>, event: ReportEvent, direction: PluginModel.TimeDirection): void;
    openLocalFile(): void;
    rotate(value: any): void;
    beep(): void;
    readonly scrollViewElement: HTMLDivElement;
    readonly hostElement: HTMLElement;
    goBack(): void;
    goForward(): void;
    cleanupDocument(): void;
    openDocument: (moniker: ReportDocumentMoniker) => Promise<PluginModel.IDocument>;
    _ensureInitialViewState(): void;
    onBeforeOpenFile(file: any): string;
    open(file: any): void;
    print(): void;
    close(): void;
    save(fileName?: string): void;
    scrollPageIntoView(params: {
        pageNumber: number;
        destArray: any[];
        allowNegativeOffset: boolean | undefined;
    }): void;
    scrollBeadIntoView(articleBead: ArticleBead): void;
    isPageVisible(pageNumber: number): boolean;
    language: string;
    rotation: number;
    currentPageNumber: number;
    readonly version: string;
    updateVisiblePages(): void;
    setTheme(theme?: string): void;
    hideAnnotations: boolean;
    readonly onError: EventFan<ErrorEventArgs>;
    private _loadDocViewer;
    private _onDocViewerReady;
    private _showLicenseError;
    private _appendAttachment;
    private onArticleNavigate;
    private onAttachmentNavigate;
    private onNavigate;
}
export declare function HideAnnotationsButton(viewer: GcPdfViewer, shortcutTip?: string): ToolbarItem;
export declare function SaveButton(processCustomAction: any, shortcutTip?: string): ToolbarItem;
export declare function PrintButton(processCustomAction: any, shortcutTip?: string): ToolbarItem;
export declare function RotateButton(processCustomAction: any, shortcutTip?: string): ToolbarItem;
export declare function OpenButton(viewer: GcPdfViewer, shortcutTip?: string): ToolbarItem;
export declare function TextSelectionButton(processCustomAction: any, shortcutTip?: string): ToolbarItem;
export declare function PanButton(processCustomAction: any, shortcutTip?: string): ToolbarItem;
export declare function DocPropertiesButton(processCustomAction: any, shortcutTip?: string): ToolbarItem;
export declare function AboutButton(viewer: GcPdfViewer, shortcutTip?: string): ToolbarItem;
export declare let inputPassword: any;
export declare let printProgress: any;
export declare let propertiesDialog: any;
export default PdfReportPlugin;
