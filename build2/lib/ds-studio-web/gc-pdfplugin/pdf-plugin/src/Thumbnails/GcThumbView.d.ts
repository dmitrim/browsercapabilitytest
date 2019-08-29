export declare enum RenderingStates {
    INITIAL = 0,
    RUNNING = 1,
    PAUSED = 2,
    FINISHED = 3
}
export declare class GcThumbView {
    div: HTMLDivElement;
    renderingState: RenderingStates;
    renderTask: any;
    resume: any;
    pdfPage: any;
    pdfPageRotate: any;
    rotation: any;
    viewport: any;
    pageWidth: any;
    pageHeight: any;
    pageRatio: number;
    canvasHeight: number;
    canvasWidth: number;
    ring: any;
    scale: number;
    canvas: any;
    image: any;
    private _serviceProvider;
    id: any;
    renderingId: string;
    pageLabel: any;
    linkService: any;
    renderingQueue: any;
    disableCanvasToImageConversion: boolean;
    l10n: any;
    anchor: HTMLAnchorElement;
    label: HTMLSpanElement;
    constructor(pageIndex: number, pageLabel: string, thumbsContainer: HTMLDivElement, serviceProvider: any, defaultViewPort: any, disableCanvasToImageConversion?: boolean);
    cancelRendering(): void;
    static cleanup(): void;
    _convertCanvasToImage(): void;
    draw(): Promise<any>;
    readonly pageId: string;
    setImage(pageView: any): void;
    setPageLabel(pageLabel?: string | null): void;
    _getPageDrawContext(dontScaleContext?: boolean): CanvasRenderingContext2D | null;
    reset(): void;
    setPdfPage(pdfPage: any): void;
    update(rotation: number): void;
}
