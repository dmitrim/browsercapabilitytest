import { ErrorDetails } from "./types";
import { Component } from 'preact';
declare type ErrorViewProps = {
    error: ErrorDetails;
    onDismiss: () => void;
};
declare type ErrorViewState = {
    expanded: boolean;
};
export declare class ErrorView extends Component<ErrorViewProps, ErrorViewState> {
    private static classModifierBase;
    private static styleMap;
    state: {
        expanded: boolean;
    };
    toggleExpand: () => void;
    render(): JSX.Element;
}
export {};
