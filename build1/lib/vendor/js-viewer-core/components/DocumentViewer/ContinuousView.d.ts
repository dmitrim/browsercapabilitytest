import { Component } from 'preact';
import { PageViewProps } from './types';
declare type ContinuousViewState = {
    viewportHeight: number;
    viewportWidth: number;
    scrollTopPosition: number;
};
export declare class ContinuousView extends Component<PageViewProps, ContinuousViewState> {
    private _view;
    private _pageCoords;
    private _zoomSettings;
    private _lastScrollRequestNo;
    private _moveHandler;
    constructor(props: PageViewProps);
    private checkMouseMode;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any): void;
    private getVisiblePageIndex;
    private onResize;
    private onScroll;
    private onClick;
    render(): JSX.Element;
    private getPageSize;
    private getPageViewportSize;
}
export {};
