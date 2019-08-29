export declare type TocNode = {
    anchor?: string;
    name: string;
    dest: any;
    isLeaf: boolean;
    kids: TocNode[];
    newWindow?: boolean;
    url?: string;
};
export declare type ContentsModel = {
    content: TocNode | null;
};
export declare type ContentsMsg = {
    type: 'reset';
};
