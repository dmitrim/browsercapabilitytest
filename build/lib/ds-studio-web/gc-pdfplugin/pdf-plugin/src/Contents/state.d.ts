import { ContentsModel } from './types';
export declare const init: () => ContentsModel;
declare const reducer: (message: {
    type: "reset";
}, model: ContentsModel) => ContentsModel;
export { reducer as update };
