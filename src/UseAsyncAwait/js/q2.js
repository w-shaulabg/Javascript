//ユーザー情報を取得してhtml出力してみよう！！
// __の箇所に適切なものを書きましょう！

const excuteButton = document.querySelector('.excute');

excuteButton.addEventListener('click', (event) => {

  const fetchData = _____() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("ここが２番目に実行される。(3秒後)");
      }, 3000);
    });
  };

  const fetchResult = _____() => {
    const result = await fetchData();
    console.log("result:", result);
  };
  
  fetchResult();

  console.log("ここが一番最初に実行される");  
  
});

