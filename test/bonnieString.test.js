const bonnieString = require('../bonnieString');


// console.log('test1')

describe('bonnie string methods check', () => {
    it('length ', () => {
        expect(bonnieString('CrossAngleWithBonnie')).toBe(20)
    });
    it('indexOf ', () => {
        expect(bonnieString('Xangle App With Harry')).toBe(11)
    });
    it('slice ', () => {
        expect(bonnieString('XangleWithSimon')).toBe('WithSimon') // 인자 두 개
    });
    it('split ', () => {
        expect(bonnieString('CoinJab,withJeff')).toBe(['coinJab', 'withJeff'])
    });
});



