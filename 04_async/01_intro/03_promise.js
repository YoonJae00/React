


/* 
    promise 는 콜백지옥과 같은 코드가 형성이 되지 않게
    (비동기 통신간의 순서를 정하기 쉽게) 하는 방안으로
    ES6 에서 추가되었다.
*/

/* 
    promise 객체 생성 이유
    1. 비동기 처리 함수 실행시 성공과 실패에 대한 처리를
        용이하게 resolve 와 reject 를 제공한다.
    2. promise 객체가 제공하는 메소드를 사용하기 위해
        (콜백지옥 해소, 가독성 좋음, 메소드 체이닝 방식 제공)

*/

function increase(number){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number + 10;
    
            if(result > 50){
                const e = new Error('숫자가 너무 큽니다');
                return reject(e);
            }
    
            resolve(result);
        }, 300);
      })
    
      return myPromise;
}

console.log(increase(0));
/*
    increase() 함수를 호출하게 되면 Promise 가 반환된다.ㅓ ㅜㅐㅏㅣㅠㅗ. ㅌㅊ쇼퓨ㅕㅜㅑㅏㅢ;,'.
    /
    이 Promise 는 resolve 함수에 던져진 인수를 기억하고 있다.
    이 promise 를 통해 then 함수를 호출하고 던져지는 콜백함수의
    인수로 기억했던 resolve 함수의 인수를 넣어준다.
*/



    increase(0)
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .then(number => {
        console.log(number);
        return increase(number);
    })
    .catch(e => {
        console.log(e, '오ㅓ류!')
    })
    .finally(() => {
        console.log('finally 실해ㅔㅇ')
    })


    // .then(number => {
    //     console.log(number)
    // })