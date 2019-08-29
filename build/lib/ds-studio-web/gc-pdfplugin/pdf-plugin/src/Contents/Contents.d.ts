/// <reference path="../../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
import { ContentsModel, TocNode } from './types';
export declare type ContentsProps = {
    navigate: (node: TocNode) => void;
};
export declare class Contents extends Component<ContentsProps, ContentsModel> {
    private onItemClick;
    private renderContents;
    render({}: ContentsProps, { content }: ContentsModel): JSX.Element;
}
