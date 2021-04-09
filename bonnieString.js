/*
input (string) : target string length to count
output (number) :
    fail > -1
    pass > 각 지정값
 */


function bonnieLength(rawValue) {
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

function bonnieEqualString(rawString, matchIndex, targetString) {
    let destString = ''
    for (let i = matchIndex; i < matchIndex + targetString.length; i++) {
        destString += rawString[i]
    }
    return destString == targetString
}

/*
behavior: rawString에서 targetString이 매칭이 되는 index시작점
input (string, string) : 원본 텍스트, 찾을 대상 텍스트
output (number) : 찾을 대상의 텍스트의 첫번째 매칭되는 자리수
    fail > -1
    pass > 0이상 number
 */
function bonnieIndexOf(rawString, targetString, startIndex = 0) {
    try {
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
                if (bonnieEqualString(rawString, matchIndex, targetString)) return matchIndex
            }
        }
    } catch {
        console.log('err', targetString)
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

function bonnieSlice(rawString, startIndex, endIndex) {
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

function bonnieSubstring(rawString, startIndex, endIndex) {
    let destString = ''
    for (let i = startIndex; i < endIndex; i++) {
        destString += rawString[i]
    }
    return destString
}

function bonnieSplit(rawString, separator, limit) {

    if (typeof rawString !== 'string') return ''
    if (typeof separator !== 'string') return [rawString]

    const rawLength = rawString.length
    if (!limit) limit = rawLength
    const result = []
    const matchIndexList = []
    let temp = ''
    let startIndex = 0

    for (let i = 0; i < rawLength; i++) {
        if (rawString[i] === separator) {
            matchIndexList.push(i)
        }
        if (matchIndexList.length >= limit) break;
    }
    for (let index of matchIndexList) {
        temp = bonnieSubstring(rawString, startIndex, index)
        result.push(temp)
        startIndex = index + 1
    console.log(index)
    }
    console.log(matchIndexList)
    if (result.length < limit) {
        temp = bonnieSubstring(rawString, startIndex, rawLength)
        result.push(temp)
    }
    return result
}

/*
input (rawString, regexp) > rawString(string),regexp(number, string)
output (array) > if /regex/ ['matchValue']

fail > '' || null
pass > ['matchValue']

exception handling
- regexp가 빈값, 일때 return ''
- regexp에 / matchValue /g 정규식으로 전역에서 찾을때는 match되는 수만큼 return
- rawString에 match되는 regex가 없을 때, invalid type이 들어갔을 때 return null
- regexp에 g존재 여부에 따라 result가 달라짐

main logic
if regular regexp, searches first matched value
if regexp with g, searches matched value globally
*/

function bonnieMatch(rawString, regexp) {
    if (!regexp) return ''

    const rawLength = rawString.length
    const [_, matcher, modifier] = bonnieSplit(regexp.toString(), '/')
    console.log(matcher, '+_+', modifier)
    const matchIndexList = []
    const matchList = []
    if (modifier) {
        let matchIndex = 0
        for (let i = 0; i < rawLength; i++) {
            matchIndex = bonnieIndexOf(rawString, matcher, i)
            if (matchIndex >= 0 && !matchIndexList.includes(matchIndex)) {
                matchIndexList.push(matchIndex)
                matchList.push(matcher)
                i += matcher.length
            }
            matchIndex = -1
        }
    } else {
        const idx = bonnieIndexOf(rawString, matcher, 0)
        if (idx >= 0) return [matcher]
    }

    return matchList
}

/*
modifier 존재 유무에 따른 currentValue에서 newValue 교체
*/
function bonnieReplace(rawString, currentValue, newValue) {
    const rawLength = rawString.length
    const [_, current, modifier] = bonnieSplit(currentValue.toString(), '/')
    console.log(current, modifier)
    const matchIndexList = []
    const matchList = []
    // let newWord = ''
    let changedString = ''
    // console.log(changedString)
    const [...spliter] = rawString.split('blue')
    if (modifier) {
        // changedString을 currentValue을 기준으로 분리한다.(bonnieSplit)
        // 분리된 배열에서 separator의  newValue로 교체
        // = newValue

        console.log(spliter)
        for (let i = 0; i < spliter.length; i++) {
            changedString += spliter[i]
            if (i < spliter.length - 1) {
                changedString += newValue
            }
        }
    } else {
        const idx = bonnieIndexOf(rawString, current, 0)
        if (idx < 0) return changedString

        const prefix = bonnieSubstring(rawString, 0, idx)
        const postfix = bonnieSubstring(rawString, idx + current.length, rawString.length)
        changedString = prefix + newValue + postfix
        // console.log(bonnieSubstring(rawString, idx + 4, rawString.length))
        // return bonnieSubstring(rawString, 0, idx) + newValue + bonnieSubstring(rawString, idx + 4, rawString.length)
    }
    return changedString
}


exports.bonnie = {
    length: function (rawValue) {
        return bonnieLength(rawValue)
    },
    indexOf: function (rawString, targetString, startIndex) {
        return bonnieIndexOf(rawString, targetString, startIndex)
    },
    subString: function (rawString, startIndex, endIndex) {
        return bonnieSubstring(rawString, startIndex, endIndex)
    },
    isEqualString: function (rawString, matchIndex, targetString) {
        return bonnieEqualString(rawString, matchIndex, targetString)
    },
    slice: function (rawString, startIndex, endIndex) {
        return bonnieSlice(rawString, startIndex, endIndex)
    },
    split: function (rawString, separator, limit) {
        return bonnieSplit(rawString, separator, limit)
    },
    match: function (rawString, regexp) {
        return bonnieMatch(rawString, regexp)
    },
    replace: function (rawString, currentValue, newValue) {
        return bonnieReplace(rawString, currentValue, newValue)
    }
}
