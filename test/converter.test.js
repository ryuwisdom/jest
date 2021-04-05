const converter = require('../converter');
const recursion = require('../fn')

// console.log('test1')

describe('decimal check', () => {
    it('num은 valid value이다.', () => {
        expect(converter('invalid value')).toBe('-')
    });
    it('num의 정수값이 1미만일 때 소수 6자리까지 출력', () => {
        expect(converter('0.034087720541')).toBe('0.034088')
    });
    it('num의 정수값이 1미만일 때 소수 6자리까지 출력', () => {
        expect(converter(0.034087720541)).toBe('0.034088')
    });
    it('num의 정수값이 100미만일 때 소수 3자리까지 출력', () => {
        expect(converter(4.53323656)).toBe('4.533')
    });
    it('num의 정수값이 1일 때 소수 3자리까지 출력', () => {
        expect(converter(1.0000000)).toBe('1.000')
    });
    it('num의 정수값이 100일 때 소수 1자리까지 출력', () => {
        expect(converter(100.000000)).toBe('100.0')
    });
    it('num이 문자열이면서 정수값이 0이면 소수 1자리까지 출력', () => {
        expect(converter('0.000000')).toBe('0.0')
    });
    it('num의 정수값이 0일 때 소수 1자리까지 출력', () => {
        expect(converter(0.000000)).toBe('0.0')
    });
    it('num의 정수값이 100미만일 때 소수 3자리까지 출력', () => {
        expect(converter(4.5000)).toBe('4.500')
    });
    it('num의 정수값이 100미만일 때 소수 3자리까지 출력', () => {
        expect(converter(54.53323656)).toBe('54.533')
    });
    it('num의 정수값이 100초일 때 소수 1자리까지 출력', () => {
        expect(converter(351.5634445356)).toBe('351.6')
    });
    //숫자로 들어만오지만 출력은 문자열로
    it('num의 정수값이 100초과일 때 소수 1자리까지 출력', () => {
        expect(converter(2334.56333356)).toBe('2,334.6')
    });
    it('0.000000033 경우 - 출력', () => {
        expect(converter(0.000000033)).toBe('-')
    });
    it('음수인 경우 ', () => {
        expect(converter(-300.1234)).toBe('-')
    });
});



