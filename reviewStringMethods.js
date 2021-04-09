// 문자열의 길이를 구하는 함수
// 문자열의 수만큼 반복하는 수 count check (before used for of)
function bonnieLength(rawValue) {
    // 1st
    // let result = []
    // for(let i =0;i<rawValue.length;i++){
    //     result.push(i)
    // }
    // return result.length

    // 2nd
    // let items = [...rawValue]
    // items.reduce((v)=> v,0)
    // return items.length
}

// rawString의 지정된 index targetString의 일치여부 검사하는 함수
// parameter : rawString, matchIndex(targetString의 위치를 찾기위한), targetString
function bonnieEqualString(rawString, matchIndex, targetString) {
    // parameter를 matchIndex가 들어간다면 아래 방법이 가장 적절한것 같은..

    // 일치여부 확인할 변수
    let destString = ''

    // matchIndex기준으로 targetString의 length까지 탐색하며 targetString의 index의 값 추출하여 destString에 담기
    // 이후 targetString과 destString의 일치 확인
    for (let i = matchIndex; i < matchIndex + targetString.length; i++) {
        destString += targetString[i]
    }
    return destString == targetString
}


// rawString에서 targetString의 (첫)index를 알아내는 함수
// parameter : rawString, targetString, matchIndex
// exception handling
// - targetString 부재시 return -1


function bonnieIndexOf(rawString, targetString, startIndex = 0) {

};
// rawString에서 startIndex부터 endIndex까지의 문자열을 잘라주는 함수
// parameter : rawString, startIndex, endIndex
    function bonnieSlice(rawString, startIndex, endIndex) {
        const rawLength = rawString.length

        // exception handling
        if (typeof rawString !== 'string') return '';
        if (!rawString) return ''
        if (!startIndex) startIndex = 0
        if (!endIndex) endIndex = rawLength
        if (startIndex < 0) startIndex = rawLength + startIndex
        if (endIndex < 0) endIndex = rawLength + endIndex

        let result = ''

        for (let i = startIndex; i < endIndex; i++) {
            result += rawString[i]
        }
        return result
    }

// rawString에서 startIndex부터 endIndex까지 추출하는 함수
// parameter : rawString, startIndex, endIndex
    function bonnieSubstring(rawString, startIndex, endIndex) {
        let destString = ''
        for (let i = startIndex; i < endIndex; i++) {
            destString += rawString[i]
        }
        return destString
    }

// rawString에서 separator를 기준으로 분리되어 배열로 반환하는 함수 (limit 있을시 반환하는 인덱스의 수)
// parameter : rawString, startIndex, endIndex
    function bonnieSplit(rawString, separator, limit) {
   // // separator의 인덱스를 찾아서 배열에 담고 (indexof)
   //
   //      const matchIndexList = []
   //
   //      for (let i = 0; i < rawString.length;) {
   //
   //              console.log(rawString.indexOf(separator, i)); // 0, 1, 6, 7
   //              if(i == -1) {
   //                  i++; // 일치하는 값이 없을 시 증가
   //              } else {
   //                  i = rawString.indexOf(separator, i) + 1; // 중복 값 출력 방지용
   //              }
   //
   //
   //      console.log(matchIndexList)
   //
   //  }
        // return result
}

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
        }
        // replace: function (rawString, currentValue, newValue) {
        //     return bonnieReplace(rawString, currentValue, newValue)
    }

