func = async () => { //関数に対してasyncと宣言すると　→「この関数は非同期関数だよ！」ということになる
    await log(3);
    await log(2);
    await log(1); //関数の呼び出しの前にawaitと書くと →Promiseの結果が帰ってくるまで（resolveするまで）待ってくれる
};

log = (num) => { // logという関数を定義。内容はPromiseの学習の時に書いた、new PromiseとsetTimeoutの処理を関数化したもの
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(num);
            resolve();
        }, 1000);
    })
}

func();