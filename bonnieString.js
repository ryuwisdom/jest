/*
input (any) : target value to convert
output (string) :
    fail > '-'
    pass > 각 지정값

    오늘의 핵심
    요구사항 정의 및 확인
    //
 */

let ret = '-';
// filter NaN (Not a Number), Invalid value
if (!isNaN(rawValue)) {
  return ret;
}
try {
  rawValue = String(rawValue);
} catch {
  return '-';
}

exports.bonnieLength = function (rawValue) {
  // check condition
  let count = 0;
  for (element of rawValue) {
    count++;
  }
  return count;

  //   return [...this].reduce((v) => v + 1, 0);
};

exports.bonnieIndexOf = function (rawValue) {
  // 11번째에 존재하는 문자열을 넣었을때 해당 index return
  const result = rawValue.split(',');
  //   const initValue = 0;
  const exampleWord = 'With';
  result.map((v, index) => {
    console.log(index);
    console.log(v);
    return index;
  });

  //   result.reduce(function())
  console.log(result);
};
