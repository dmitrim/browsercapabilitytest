export declare class GcPinchZoomGesture {
    _active: boolean;
    _target: HTMLElement;
    _onGestureStartHandler: any;
    _onGestureStopHandler: any;
    _onGestureMoveHandler: any;
    _prevDiffX: number;
    _prevDiffY: number;
    _startDiffX: number;
    _startDiffY: number;
    _targetOffsetWidth: number;
    _targetOffsetHeight: number;
    constructor(target: HTMLElement, zoomInHandler: (zoomPercentX: number, zoomPercentY: number) => void, zoomOutHandler: (zoomPercentX: number, zoomPercentY: number) => void);
    zoomInHandler: (zoomPercentX: number, zoomPercentY: number) => void;
    zoomOutHandler: (zoomPercentX: number, zoomPercentY: number) => void;
    activate(): void;
    deactivate(): void;
    _registerEvents(): void;
    _unregisterEvents(): void;
    _onGestureStart(e: TouchEvent): boolean;
    _onGestureMove(e: TouchEvent): boolean | undefined;
    _onGestureStop(): void;
}
