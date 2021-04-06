const bonnieMethods = require('../bonnieString');
// require('../bonnieString.js');

// console.log('test1')

describe('bonnie string methods', () => {
  it('length ', () => {
    expect(bonnieMethods.bonnieLength('CrossAngleWithBonnie')).toBe(20);
  });
  it('indexOf ', () => {
    expect(bonnieMethods.bonnieIndexOf('Xangle App With Harry')).toBe(11); // with가 몇번째
  });
  it('slice ', () => {
    expect('XangleWithSimon').toBe('WithSimon'); // 인자 두 개
  });
  it('split ', () => {
    expect('CoinJab,withJeff').toStrictEqual(['CoinJab', 'withJeff']);
  });
});
// describe('bonnie string methods', () => {
//   it('length ', () => {
//     expect('CrossAngleWithBonnie'.bonnieLength()).toBe(20);
//   });
//   it('indexOf ', () => {
//     expect('Xangle App With Harry'.bonnieIndexOf('With')).toBe(11); // with가 몇번째
//   });
//   it('slice ', () => {
//     expect('XangleWithSimon'.bonnieSlice(6)).toBe('WithSimon'); // 인자 두 개
//   });
//   it('split ', () => {
//     expect('CoinJab,withJeff'.bonnieSplit(',')).toBe(['coinJab', 'withJeff']);
//   });
// });
