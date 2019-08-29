export declare type AttachmentNode = {
    name: string;
    data: any;
};
export declare type AttachmentsModel = {
    attachments: AttachmentNode[] | null;
};
export declare type AttachmentsMsg = {
    type: 'reset';
};
