import { FindOptions } from './types';
export { FindOptions, SearchResult, Range, Model, Msg } from './types';
export { search, SearchStatus } from './api';
export declare function areOptionsEqual(o1: FindOptions, o2: FindOptions): boolean;
export { register, init, reducer } from './SearchPanel';
