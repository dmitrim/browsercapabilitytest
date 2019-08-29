//@ts-ignore
import { PluginModel, SearchFeature } from "@grapecity/viewer-core";
//@ts-ignore
import { Store } from '@grapecity/viewer-core/lib/control';
import { GcPdfSearcher } from './Search/GcPdfSearcher';
export declare class ReportPage implements PluginModel.IPageData {
    readonly pageIndex: number;
    readonly pageSize: PluginModel.PageSize;
    constructor(pageIndex: number, pageSize: PluginModel.PageSize);
}
export declare class GcPdfDocumentView implements PluginModel.IDocumentView {
    readonly docViewer: any;
    private readonly _searcher;
    private _outlineStore;
    private _articlesStore;
    constructor(docViewer: any, _searcher: GcPdfSearcher);
    readonly pageCount: PluginModel.PageCountResult;
    readonly outlineStore: Store<any, any>;
    readonly articlesStore: Store<any, any>;
    awaitPage: (index: number) => Promise<ReportPage>;
    search: (options: SearchFeature.FindOptions, startFrom: any) => AsyncIterableIterator<SearchFeature.SearchResult>;
}
