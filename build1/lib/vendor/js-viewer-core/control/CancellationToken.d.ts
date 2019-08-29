export declare class CancellationToken {
    readonly parentToken?: CancellationToken | undefined;
    private _isCancellationRequested;
    private _cancellationPromise;
    private _cancel;
    private constructor();
    static create(parentToken?: CancellationToken): {
        token: CancellationToken;
        cancel: (e: any) => void;
    };
    readonly isCancellationRequested: boolean;
    readonly promise: Promise<any>;
    register(callback: (reason: any) => any): void;
}
