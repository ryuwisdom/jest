const fn = require('./fn');

const result = fn.converter();
describe('data status check', () => {
  console.log(result);

  test('data의 current_price의 type은 Number', () => {
    for (const iterator of result) {
      console.log(iterator.current_price);
      expect(typeof iterator.current_price).toBe('number');
    }
  });

  test('current_price는 Positive Number', () => {
    for (const iterator of result) {
      expect(iterator.current_price).toBeGreaterThanOrEqual(0);
    }
  });
});

// describe('decimal standard check', () => {
// test('current_price의  소수점 길이가 14자리 이상이면 fail', () => {
//   const regex = new RegExp(/\.(\d+)/, 'g');
//   expect(regex.exec(String(cost))[1].length < 15).toBeTruthy();
// });
//   test('current_price가 0 또는 null일 때 N/A 반환이 되었는지', ()=> {
// expect(cost === 0 | cost === null ).
//   })
// });

describe('decimal standard check', () => {
  test('current_price의  소수점 길이가 14자리 이상이면', () => {
    for (const iterator of result) {
      const temp = String(iterator.current_price).split('.')[1];
      expect(temp.length < 14).toBeTruthy();
      console.log(`${temp} Pass !`);
    }
  });

  test('current_price가 0일 때 N/A', () => {
    for (const iterator of result) {
      expect(iterator.current_price).not.toEqual(0);
      console.log(`${iterator.current_price} Pass !`);
    }
  });

  test('current_price가 null일 때 N/A', () => {
    for (const iterator of result) {
      expect(iterator.current_price).not.toEqual(null);
      console.log(`${iterator.current_price} Pass !`);
    }
  });

  test('소수점 6자리까지 출력 > 1미만 (0.034087)', () => {
    for (const iterator of result) {
      const temp = String(iterator.current_price).split('.');
      if (temp.length !== 2) {
        console.log(`${iterator.current_price} Pass !`);
        continue;
      }
      const left = temp[0];
      const right = temp[1];

      expect(left < 1 && right.length > 6).toBeFalsy();
      console.log(`${iterator.current_price} Pass !`);
    }
  });
});
