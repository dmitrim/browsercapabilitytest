import { ArticlesModel } from './types';
export declare const init: () => ArticlesModel;
declare const reducer: (message: {
    type: "reset";
}, model: ArticlesModel) => ArticlesModel;
export { reducer as update };
