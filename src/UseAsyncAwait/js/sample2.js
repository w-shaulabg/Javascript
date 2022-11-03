//ユーザー情報を取得してhtml出力してみよう！！
// __の箇所に適切なものを書きましょう！

//urlの設定
const url = 'https://jsonplaceholder.typicode.com/users/1';

//async関数定義
const fetchUser = async () => {
  //awaitでデータを待つ
  const response = await fetch(url);
  const result = await response.json();
  console.log("res", result);
  return result;
};

//async関数定義
const outputData = async() => {
  //user情報を取得するまで待つ
  const user = await fetchUser();
  //画面に出力するデータを作成
  const userInfo = `
    <p><span>id: </span>${user.id}</p>
    <p><span>name: </span>${user.name}</p>
    <p><span>user name: </span>${user.username}</p>
    <p><span>email: </span>${user.email}</p>
    <p><span>phone: </span>${user.phone}</p>
  `;
  //出力先を取得
  const output = document.querySelector('.output_area');
  //出力
  output.innerHTML = userInfo;
}
//関数実行
outputData();
