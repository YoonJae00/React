/* 
    async / await 은 promise 를 더 쉽게 사용할 수 있도록 ES8 에서 추가 되었다.
*/

function increase(num){

    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            const result = num + 10;

            if(result > 50){
                const e = new Error('50이상입니다.')

                return reject(e);
            }

            resolve(result);
        },300)

        return promise;
    })
}

    /*
        await 의 두가지 기능
        1. await 가 달린 함수의 결과인 promise 에 담긴 결과(즉 promise 객체 내부의 resolve 에 담긴 결과)
        2. await 가 달린 비동기 처리들은 마치 동기식으로 동작하게 된다.
    */


    async function run(){

        try {
        let result = await increase(0);
        console.log(result);

        result = await increase(result);
        console.log(result);

        result = await increase(result);
        console.log(result);

        result = await increase(result);
        console.log(result);

        result = await increase(result);
        console.log(result);

        result = await increase(result);
        console.log(result);
        }
        catch (e) {
            console.log('error',e);
        }
    }

    




run();