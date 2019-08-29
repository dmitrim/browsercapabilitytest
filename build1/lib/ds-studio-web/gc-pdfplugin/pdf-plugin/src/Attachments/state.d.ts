import { AttachmentsModel } from './types';
export declare const init: () => AttachmentsModel;
declare const reducer: (message: {
    type: "reset";
}, model: AttachmentsModel) => AttachmentsModel;
export { reducer as update };
