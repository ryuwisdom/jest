/*
input (string) : target string length to count
output (number) :
    fail > -1
    pass > 각 지정값
 */


exports.bonnieLength = function (rawValue) {
    let count = -1;
    // filter NaN (Not a Number), Invalid value
    if (typeof rawValue !== 'string') {
        return count;
    }

    // check condition
    count = 0;
    for (let element of rawValue) {
        count++;
    }
    return count;

};

/*
behavior: rawString에서 targetString이 매칭이 되는 index시작점
input (string, string) : 원본 텍스트, 찾을 대상 텍스트
output (number) : 찾을 대상의 텍스트의 첫번째 매칭되는 자리수
    fail > -1
    pass > 0이상 number
 */
exports.bonnieIndexOf = function (rawString, targetString, startIndex = 0) {
    // 11번째에 존재하는 문자열을 넣었을때 해당 index return
    function bonnieSubstr(rawString, matchIndex, targetString) {
        let destString = ''
        for (let i = matchIndex; i < matchIndex + targetString.length; i++) {
            destString += rawString[i]
        }
        return destString == targetString
    }

    if (rawString.length < targetString.length) {
        return -1
    }

    // match target 1st char == raw specific index char
    // after match, check target string include rawstring from index
    let matchIndex = -1
    for (let i = 0; i < rawString.length; i++) {

        const target = targetString[0] // startIndex

        if (target === rawString[i]) {
            matchIndex = i
            if (startIndex > matchIndex) {
                matchIndex = -1
                continue;
            }

            if (bonnieSubstr(rawString, matchIndex, targetString)) return matchIndex
        }
    }
    return -1
};

/*
behavior: rawString에서 startIndex 에서 endIndex의 범위에 포함하는 문자열 추출
input (number, number(optional)) : startIndex, endIndex
- endIndex가 없으면 startIndex부터 rawInex의 length까지의 문자열 추출
- startIndex가 -1일때 오직 마지막 문자열만 추출
output (string) : startIndex와 endIndex를 포함하는 문자열
    fail > ''
    pass > 지정한 범위에 포함하는 문자
 */

exports.bonnieSlice = function (rawString, startIndex, endIndex) {
    if (typeof rawString !== 'string') return '';
    if (!rawString) return ''
    if (!startIndex) startIndex = 0
    if (!endIndex) endIndex = rawString.length
    if (startIndex < 0) startIndex = rawString.length + startIndex
    if (endIndex < 0) endIndex = rawString.length + endIndex

    let result = ''

    for (let i = startIndex; i < endIndex; i++) {
        result += rawString[i]
    }

    return result
}


exports.bonnieSplit = function (rawString, separator, limit) {

    if (typeof rawString !== 'string') return ''
    if (typeof separator !== 'string') return [rawString]
    // if (!) return [rawString]
    if (!limit) limit = rawString.length

    const result = []
    const matchIndexList = []
    let temp = ''
    let startIndex = 0

    function bonnieSubstr(rawString, startIndex, endIndex) {
        let destString = ''
        for (let i = startIndex; i < endIndex; i++) {
            destString += rawString[i]
        }
        return destString
    }

    // matchIndexList 생성 로직
    for (let i = 0; i < rawString.length; i++) {

        if (rawString[i] === separator) {
            matchIndexList.push(i)
        }
        if (matchIndexList.length >= limit) break;
    }


    for (let index of matchIndexList) {
        temp = bonnieSubstr(rawString, startIndex, index)
        result.push(temp)
        startIndex = index + 1
    }

    if (result.length < limit && startIndex < rawString.length) {
        temp = bonnieSubstr(rawString, startIndex, rawString.length)
        result.push(temp)
    }

    return result

    // using separator index만 matching index 찾고 잘라버리기
    // using indexOf
    // match index의 배열에 그 index수대로


}



