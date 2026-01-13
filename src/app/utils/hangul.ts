
const CHOSUNG = [
    'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];
const JUNGSUNG = [
    'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];
const JONGSUNG = [
    '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄴㅈ', 'ㄴㅎ', 'ㄷ', 'ㄹ', 'ㄹㄱ', 'ㄹㅁ', 'ㄹㅂ', 'ㄹㅅ', 'ㄹㅌ', 'ㄹㅍ', 'ㄹㅎ', 'ㅁ', 'ㅂ', 'ㅂㅅ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

/**
 * Decomposes a Hangul string into individual Jamo.
 */
export function decomposeHangul(str: string): string {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >= 0xAC00 && code <= 0xD7A3) {
            const syllableIndex = code - 0xAC00;
            const chosungIndex = Math.floor(syllableIndex / 588);
            const jungsungIndex = Math.floor((syllableIndex % 588) / 28);
            const jongsungIndex = syllableIndex % 28;
            result += CHOSUNG[chosungIndex] + JUNGSUNG[jungsungIndex] + JONGSUNG[jongsungIndex];
        } else {
            result += str[i];
        }
    }
    return result;
}

/**
 * Checks if the target string contains the query string, supporting Korean Chosung/Hangul decomposition search.
 */
export function hangulIncludes(target: string, query: string): boolean {
    const normalizedTarget = target.toLowerCase().replace(/\s/g, '');
    const normalizedQuery = query.toLowerCase().replace(/\s/g, '');

    if (normalizedTarget.includes(normalizedQuery)) return true;

    const decomposedTarget = decomposeHangul(normalizedTarget);
    const decomposedQuery = decomposeHangul(normalizedQuery);

    return decomposedTarget.includes(decomposedQuery);
}

/**
 * Checks if the target string matches the query string using Chosung only search.
 * e.g., "ㄱㄴ" matches "강남"
 */
export function chosungSearch(target: string, query: string): boolean {
    const normalizedTarget = target.toLowerCase().replace(/\s/g, '');
    const normalizedQuery = query.toLowerCase().replace(/\s/g, '');

    let targetChosung = '';
    for (let i = 0; i < normalizedTarget.length; i++) {
        const code = normalizedTarget.charCodeAt(i);
        if (code >= 0xAC00 && code <= 0xD7A3) {
            const syllableIndex = code - 0xAC00;
            const chosungIndex = Math.floor(syllableIndex / 588);
            targetChosung += CHOSUNG[chosungIndex];
        } else {
            targetChosung += normalizedTarget[i];
        }
    }

    return targetChosung.includes(normalizedQuery);
}
