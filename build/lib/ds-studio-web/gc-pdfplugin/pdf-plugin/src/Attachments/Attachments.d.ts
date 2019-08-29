/// <reference path="../../../../../vendor/preact.d.ts" />
//@ts-ignore
import { Component } from 'preact';
import { AttachmentsModel, AttachmentNode } from './types';
export declare type AttachmentsProps = {
    navigate: (node: AttachmentNode) => void;
};
export declare class Attachments extends Component<AttachmentsProps, AttachmentsModel> {
    private onItemClick;
    private renderAttachments;
    render({}: AttachmentsProps, { attachments }: AttachmentsModel): JSX.Element;
}
