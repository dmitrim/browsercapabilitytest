declare const CharacterType: {
    SPACE: number;
    ALPHA_LETTER: number;
    PUNCT: number;
    HAN_LETTER: number;
    KATAKANA_LETTER: number;
    HIRAGANA_LETTER: number;
    HALFWIDTH_KATAKANA_LETTER: number;
    THAI_LETTER: number;
};
declare function normalize(text: any): any;
declare function getCharacterType(charCode: any): number;
export { CharacterType, getCharacterType, normalize, };
