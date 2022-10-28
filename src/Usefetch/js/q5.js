//ユーザー情報を取得してhtml出力してみよう！！
// __の箇所に適切なものを書きましょう！

fetch("_____")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log("data:", user);
    const userInfo = `_____`;
    const output = document.querySelector("_____");
    output.innerHTML = userInfo;
  })
  .catch((error) => {
    console.log("失敗しました");
  });
