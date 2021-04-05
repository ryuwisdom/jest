
const funcLoop = function() {
    let result = 0
    for (let i = 1; i <= 10; i++) {
        console.log(result, 'result')
        result += i
    }
    console.log(result)
    return result
}
const funcRecursive = function(sum, count) {
    sum += count
    if (count > 0) {
        return funcRecursive(sum, count - 1)
    } else {
        console.log(sum)
        return sum
    }
}
// funcLoop()
funcRecursive(0, 10)

