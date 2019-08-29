import { Size } from '@grapecity/core-ui-preact';
import { Component } from 'preact';
import { ZoomSettings } from '../../DocumentViewer';
import i18next from 'i18next';
export declare type ZoomControlProps = {
    dropup?: boolean;
    size?: Size;
    zoom: ZoomSettings;
    disabled: boolean;
    onChange?: (zoom: ZoomSettings) => void;
    i18n: i18next.WithT;
};
export declare class ZoomControl extends Component<ZoomControlProps> {
    private onDecButtonClick;
    private onIncButtonClick;
    private onZoomSelect;
    render(): JSX.Element;
}
