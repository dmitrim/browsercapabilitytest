//@ts-ignore
import { SearchFeature as Search } from "@grapecity/viewer-core";
//@ts-ignore
import { SearchResult } from '@grapecity/viewer-core/lib/features/search';
import PdfReportPlugin from "../plugin";
export declare class GcPdfSearcher {
    private readonly _factory;
    private readonly _plugin;
    _cancellation: {
        promise: Promise<any>;
        resolve: Function;
        reject: Function;
    };
    _extractTextPromises: any[];
    _normalizedQuery: string;
    _pageContents: string[];
    _pageMatches: number[][];
    _pageMatchesLength: number[][];
    _pagesCount: number;
    _pdfDocument: any;
    _rawQuery: string;
    _state: {
        query: string;
        phraseSearch: boolean;
        caseSensitive: boolean;
        entireWord: boolean;
        findPrevious: boolean;
    };
    constructor(_factory: any, _plugin: PdfReportPlugin);
    readonly searchPanelId: string;
    toggle(): void;
    close(): void;
    updateUIState(state: any, previous: any, matchesCount: any): void;
    nextSearchResult(result: SearchResult, cancellation: any): Promise<SearchResult>;
//@ts-ignore
    search(options: Search.FindOptions, startFrom: any): AsyncIterableIterator<SearchResult>;
    cancel(): void;
    _initialize(): void;
    readonly _query: string;
    _extractText(): void;
    _reset(): void;
    _prepareMatches(matchesWithLength: any, matches: any, matchesLength: any): void;
    _isEntireWord(content: any, startIdx: any, length: any): boolean;
    _calculatePhraseMatch(query: any, pageIndex: any, pageContent: any, entireWord: any): void;
    _calculateWordMatch(query: any, pageIndex: any, pageContent: any, entireWord: any): void;
    _calculateMatch(pageIndex: any): void;
}
