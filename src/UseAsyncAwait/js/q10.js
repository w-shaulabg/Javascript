//ユーザー情報を取得してhtml出力してみよう！！
// __の箇所に適切なものを書きましょう！

const url = '_____';

const fetchUser = _____() => {
  const response = _____ _____(url);
  const result = _____ response._____();
  console.log("res", result);
  return result;
};

const outputData = _____() => {
  const user = _____ fetchUser();
  const userInfo = `_____`;
  const output = document.querySelector('.output_area');
  output.innerHTML = userInfo;
}
outputData();
