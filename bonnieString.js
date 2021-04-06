/*
input (string) : target string length to count
output (number) :
    fail > -1
    pass > 각 지정값

    핵심 : 요구사항 정의 및 확인
    //
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
    //console.log([...rawValue].length)
    return count;

    // [...this].reduce((v) => v + 1, 0);
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
        for (let i = matchIndex; i < matchIndex + targetString.length; i++){
            destString += rawString[i]
        }
        return destString == targetString
    }

    if(rawString.length < targetString.length){
        return -1
    }

    // match target 1st char == raw specific index char
    // after match, check target string include rawstring from index
    let matchIndex = -1
    for (let i = 0; i < rawString.length; i++) {

        const target = targetString[0] // startIndex

        if (target === rawString[i]) {
            matchIndex = i
            if(startIndex > matchIndex) {
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

exports.bonnieSlice = function (rawString, startIndex=0, endIndex) {
    let result= ''
    let endIndex = rawString.length

    // startIndex가 0보다 크거나 같을때 rawString의 범위에서
    // startIndex를 찾고
    // startIndex부터 endIndex범위를 구하기

    // startIndex가 -1일때  rawString.length index 반환
    // startIndex가 -1미만일때  '' 반환

    if(startIndex >= 0) {
     // rawString[startIndex]
        for(let i =0; rawString.length ;i++){

        }

    }


}

