import { Component } from 'preact';
import { PageInfo } from './types';
import { PluginModel } from '../../api';
export declare type PageProps = {
    pageIndex: number;
    pageModel: PageInfo | null;
    zoomFactor: number;
    defaultPageSize?: PluginModel.PageSize;
};
export declare class Page extends Component<PageProps> {
    render(): JSX.Element;
}
