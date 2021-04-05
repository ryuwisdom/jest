/*
input (any) : target value to convert
output (string) :
    fail > '-'
    pass > '0.33435'
 */
const bonnieString = function (rawValue) {
    let ret = '-'
    // filter NaN (Not a Number), Invalid value
    if (isNaN(rawValue)) {
        return ret
    } else if (rawValue == 0) {
        return '0.0'
    }

    try {
        rawValue = Number(rawValue)
    } catch {
        return '-'
    }

    // check condition
    if (rawValue > 0.0000001 && rawValue < 1) {
        ret = rawValue.toFixed(6)
    } else if (rawValue >= 1 && rawValue < 100) {
        ret = rawValue.toFixed(3)
    } else if (rawValue >= 100 && rawValue < 10000) {
        ret = rawValue.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    console.log(ret)
    return ret
}

module.exports = bonnieString

