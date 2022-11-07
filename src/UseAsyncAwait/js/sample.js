//async awaitについて学ぶサンプルコードです

//実行ボタンを作成
const excuteButton = document.querySelector(".excute");

//ボタンをクリックした時にイベントを行う
excuteButton.addEventListener("click", (event) => {
  //asyncを使った関数を作成
  const fetchData = async () => {
    //Promiseで処理を管理
    return new Promise((resolve) => {
      //3000で 3秒遅らせる設定
      setTimeout(() => {
        //Promiseが成功
        resolve("ここが２番目に実行される。(3秒後)");
      }, 3000);
    });
  };

  const fetchResult = async () => {
    //awaitでデータを待つ！！
    const result = await fetchData();
    //データを待ってからconsole.logをする
    console.log("result:", result);
  };

  fetchResult();
  console.log("ここが一番最初に実行される");
});
