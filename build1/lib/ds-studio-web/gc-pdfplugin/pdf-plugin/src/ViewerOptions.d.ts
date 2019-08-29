export declare class ViewerOptions {
    constructor(options?: Partial<ViewerOptions>);
    baseUrl?: string;
    buttons?: string[] | "all" | 'none';
    caret: any;
    disablePageLabels: boolean;
    externalLinkTarget: string;
    useCanvasForSelection: any;
    renderInteractiveForms: boolean;
    keepFileData: boolean;
    renderer: 'canvas' | 'svg';
    friendlyFileName?: string;
    file?: string;
    password: string;
    workerSrc: string;
    themes: string[];
    zoomByMouseWheel: any;
    shortcuts: any;
    theme: string;
    restoreViewStateOnLoad: false | true | {
        trackViewMode?: boolean;
        trackMouseMode?: boolean;
        trackScale?: boolean;
        trackPageRotation?: boolean;
        trackFullScreen?: boolean;
        trackTheme?: boolean;
        trackSidebar?: boolean;
        trackFile?: boolean;
    };
    documentListUrl: string;
    hideAnnotationTypes?: ('Text' | 'Link' | 'FreeText' | 'Line' | 'Square' | 'Circle' | 'Polygon' | 'Polyline' | 'Ink' | 'Popup' | 'FileAttachment' | 'Sound' | 'ThreadBead' | 'RadioButton' | 'Checkbox' | 'PushButton' | 'Choice' | 'TextWidget' | 'Redact')[] | 'All' | 'None';
    cMapUrl?: string;
    cMapPacked?: boolean;
}
