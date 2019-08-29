/// <reference path="../../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
import { ArticlesModel, ArticleNode, ArticleBead } from './types';
import PdfReportPlugin from '../plugin';
export declare type ArticlesProps = {
    navigate: (node: ArticleNode) => void;
    pligin: PdfReportPlugin;
};
export declare class Articles extends Component<ArticlesProps, ArticlesModel> {
    onFirstArticleBead(articleBead: ArticleBead): any;
    onLastArticleBead(articleBead: ArticleBead): any;
    setActiveBead(articleBead: ArticleBead): any;
    currentArticleObjId: string;
    private onItemClick;
    private renderArticles;
    render({}: ArticlesProps, { articles }: ArticlesModel): JSX.Element;
}
