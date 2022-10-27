const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};
console.time('전체시간');
console.log('평범한 로그입니다 쉼표로 ㄱ분해 여러 값을 찍을 수 있습니다.');
console.log(string, number, boolean);
console.error('에러 메시지는console,error에 담아주세요');

console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1988}]);

console.dir(obj, { color: false, depth: 2 });
console.dir(obj, { color: true, depth: 1 });

console.time('시간측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간측정');

function b() {
    console.trace('에러 위치 추적');
}
function a() {
    b();
}
a();

console.timeEnd('전체시간');
