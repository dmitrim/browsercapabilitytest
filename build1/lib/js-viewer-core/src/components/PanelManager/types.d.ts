/// <reference path="../../../../vendor/preact.d.ts" />
//@ts-ignore
import { ComponentChild } from 'preact';
import { PluginModel } from '../../api';
export declare type PanelInfo = {
    hash: string;
    key: string;
    binder: PluginModel.IStateBinder<any>;
    component: ComponentChild;
    settings: PluginModel.PanelSettings;
};
export declare type Model = {
    panels: PanelInfo[];
    layout: string[];
};
export declare type Msg = {
    type: 'Register-Panel';
    payload: {
        panelId: string;
        key: string;
        component: ComponentChild;
        binder: PluginModel.IStateBinder<any>;
        settings: PluginModel.PanelSettings;
    };
} | {
    type: 'update-panel';
    payload: {
        panelId: string;
        settings: Partial<PluginModel.PanelSettings>;
    };
} | {
    type: 'set-layout';
    payload: {
        layout: string[];
    };
};
