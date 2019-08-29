import * as wijmo from '@grapecity/core';
import { DocumentViewer, Toolbar } from "../components";
import { ViewMode, ZoomSettings, MouseMode } from '../components/DocumentViewer';
import { PluginModel, ReportViewerCmd, ReportViewerCommandStatus, DocumentMoniker } from '../api';
import * as SearchPanel from '../features/search';
import { EventFan } from './EventFan';
import { LoadResult } from './SessionState';
import { CancellationToken } from './CancellationToken';
import i18next from 'i18next';
export declare class ChangedEventArgs extends wijmo.EventArgs {
    readonly state: DocumentViewer.Model;
    constructor(state: DocumentViewer.Model);
}
export declare class DocumentOpenedEventArgs {
    readonly document: PluginModel.IDocument | null;
    constructor(document: PluginModel.IDocument | null);
}
export declare class DocumentViewOpenedEventArgs extends wijmo.EventArgs {
    readonly view: PluginModel.IDocumentView | null;
    constructor(view: PluginModel.IDocumentView | null);
}
export declare type CustomDocumentViewFactory = (connectProps: any, handleViewerCmd: (cmd: ReportViewerCmd) => void, handleClick: (event: MouseEvent) => void, placeholder: Element) => void;
export declare type SearchOptions = {
    text: string;
    matchCase?: boolean;
    searchBackward?: boolean;
    wholeWord?: boolean;
    startPage?: number;
};
export declare class ReportViewer extends wijmo.Control implements PluginModel.IViewerHost {
    static controlTemplate: string;
    private readonly _viewerState;
    private readonly _stateChanged;
    private readonly _documentViewOpened;
    private readonly _stateChangeEvent;
    private readonly _documentViewOpenedEvent;
    private readonly _documentOpenedEvent;
    private readonly _documentProgressEvent;
    private readonly _menuPanelChangeEvent;
    private readonly _mainElement;
    private readonly _toolbarElement;
    private readonly _menuElement;
    private readonly _panelsStore;
    private readonly _errorsStore;
    private readonly _progressStore;
    private readonly _toolbar;
    private _errorHandler;
    private handleClick;
    constructor(element: any, options?: any, customDocumentView?: CustomDocumentViewFactory, xi18n?: i18next.i18n);
    setPlugin<TEvent extends PluginModel.IViewerEvent>(plugin: PluginModel.IPluginModule<TEvent, any>): void;
    private _panelLastKey;
    private _cancelTaskRequested;
    executeTask(task: (callbacks: PluginModel.TaskCallbacks) => Promise<void>, settings?: PluginModel.TaskSettings): Promise<void>;
    createPanel<TState>(component: preact.ComponentChild, binder: PluginModel.IStateBinder<TState>, key: string, { icon, description, visible, enabled, label }: Partial<PluginModel.PanelSettings>): PluginModel.PanelHandle;
    showPanel(panelKey: PluginModel.PanelHandle, visible?: boolean): void;
    updatePanel(panelKey: PluginModel.PanelHandle, settings: Partial<PluginModel.PanelSettings>): void;
    getPanelState(panelKey: PluginModel.PanelHandle): PluginModel.PanelSettings | null;
    layoutPanels(layout: string[]): void;
    bringPanelToFront(panelKey: PluginModel.PanelHandle): void;
    bindPanel<TState, TMsg>(panelKey: PluginModel.PanelHandle, store: PluginModel.IStore<TState, TMsg>): void;
    processCommand: (cmd: ReportViewerCmd) => void;
    reportError(params: PluginModel.IErrorParams): void;
    errorHandler: PluginModel.ErrorHandler;
    readonly onDocumentOpen: EventFan<DocumentOpenedEventArgs>;
    readonly onDocumentViewOpen: EventFan<DocumentViewOpenedEventArgs>;
    readonly onDocumentProgress: EventFan<PluginModel.ProgressMessage>;
    readonly onViewerStateChange: EventFan<ChangedEventArgs>;
    readonly tempOnPanelChange: EventFan<string | null>;
    load(moniker: DocumentMoniker, token?: CancellationToken): Promise<LoadResult>;
    open(moniker: DocumentMoniker): Promise<LoadResult>;
    readonly toolbar: Toolbar;
    readonly viewerState: DocumentViewer.Model;
    viewMode: ViewMode;
    zoom: ZoomSettings;
    mouseMode: MouseMode;
    processCustomAction: (action: any) => boolean | undefined;
    processAction: (action: any) => boolean | undefined;
    readonly commandStatus: ReportViewerCommandStatus;
    readonly isFullscreen: boolean;
    toggleFullscreen(fullscreen?: boolean): void;
    readonly isToolbarHidden: boolean;
    toggleToolbar(show?: boolean): void;
    toggleSidebar: (show?: boolean | undefined) => void;
    readonly document: PluginModel.IDocumentView | null;
    search({ text, matchCase, wholeWord, searchBackward, startPage }: SearchOptions, resultFn: (result: SearchPanel.SearchResult) => void, progressFn?: (progress: {
        pageIndex: number;
        pageCount: number | null;
    }) => void, cancel?: CancellationToken): Promise<SearchPanel.SearchStatus>;
    highlight(result: SearchPanel.SearchResult): Promise<void>;
    private adjustComponentsVisibility;
}
