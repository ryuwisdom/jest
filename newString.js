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
function bonnieEqualString(rawString, matchIndex, targetString) {
    // parameter를 matchIndex가 들어간다면 아래 방법이 가장 적절한것 같은..

    // 일치여부 확인할 변수
    let destString = ''

    // matchIndex기준으로 targetString의 length까지 탐색하며 targetString의 index의 값 추출하여 destString에 담기
    // 이후 targetString과 destString의 일치 확인
    for (let i = matchIndex; i < matchIndex + targetString.length; i++) {
        destString += rawString[i]
    }
    return destString == targetString
}
function bonnieIndexOf(rawString, targetString, startIndex = 0) {
    try {
        if (rawString.length < targetString.length) {
            return -1
        }

        let matchIndex = -1
        for (let i = 0; i < rawString.length; i++) {
            const target = targetString[0] // startIndex

            if (target === rawString[i]) {
                matchIndex = i
                if (startIndex > matchIndex) {
                    matchIndex = -1
                    continue;
                }
            //
            //     //if (bonnieEqualString(rawString, matchIndex, targetString)) return matchIndex
                if (rawString.startsWith(targetString, matchIndex)) return matchIndex
            //     //if (rawString.includes(targetString, matchIndex)) return matchIndex
            }
        }
    } catch {
        console.log('err', targetString)
    }

    return -1
};
function bonnieSplit(rawString, separator, limit) {

    if (typeof rawString !== 'string') return ''
    if (typeof separator !== 'string') return [rawString]

    const rawLength = rawString.length
    if (!limit) limit = rawLength

    const matchIndexList = []
    for (let i = 0; i < rawLength; i++) {
        if (rawString[i] === separator) {
            if (matchIndexList.length === 0) matchIndexList.push(0)
            matchIndexList.push(i)
        }
        if (matchIndexList.length >= limit) break;

        //console.log(matchIndexList)  // [3,7 11,17] 인덱스를 사용해서 split하는 법

        // 해당되는 인덱스 자리마다 잘라서 반환해주는 함수(substr사용)를
        // reduce에 사용하기
    }

    const result = []
    for (let n = 0; n < matchIndexList.length; n++) {
        const startIndex = matchIndexList[n]
        const endIndex = matchIndexList[n + 1]
        result.push(rawString.substring(startIndex, endIndex).trim())

    }

    return result
    /*function bonnieSubStr(rawString, startIndex, endIndex) {
        let destString = ''
        for (let i = startIndex; i < endIndex; i++) {
            destString += rawString[i]
        }
        console.log(destString)
        return destString
    }*/

}
exports.bonnie = {
    length: function (rawValue) {
        return bonnieLength(rawValue)
    },
    indexOf: function (rawString, targetString, startIndex) {
        return bonnieIndexOf(rawString, targetString, startIndex)
    },
    split: function (rawString, separator, limit) {
        return bonnieSplit(rawString, separator, limit)
    },

}
