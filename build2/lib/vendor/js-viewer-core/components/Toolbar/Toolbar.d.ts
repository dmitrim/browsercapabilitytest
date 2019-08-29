import * as wijmo from '@grapecity/core';
import { Icon } from '@grapecity/core-ui-preact';
import { ReportViewer, ChangedEventArgs } from '../../control';
import i18next from 'i18next';
export declare type ToolbarItem = {
    key: string;
    iconCssClass?: string;
    icon?: Icon;
    text?: string;
    title?: string;
    checked?: boolean;
    enabled?: boolean;
    action?: (curr?: ToolbarItem) => Partial<ToolbarItem> | void;
    onUpdate?: (args: ChangedEventArgs, curr: ToolbarItem) => Partial<ToolbarItem> | void;
};
export declare type ToolbarLayout = {
    default?: string[];
    fullscreen?: string[];
    mobile?: string[];
};
export declare class Toolbar extends wijmo.Control {
    private _view;
    constructor(element: HTMLElement | string, viewer: ReportViewer, i18n: i18next.WithT);
    addItem: (item: ToolbarItem) => void;
    updateItem: (key: string, itemUpdate?: Partial<ToolbarItem> | undefined) => void;
    removeItem: (key: string) => void;
    updateLayout(layout: ToolbarLayout): void;
    getDefaultToolbarItems: () => string[];
    recalculateBounds: () => void;
}
