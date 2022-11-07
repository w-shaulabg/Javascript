//ユーザー情報を取得してhtml出力してみよう！！
// __の箇所に適切なものを書きましょう！

const url = 'https://jsonplaceholder.typicode.com/users/1';

const fetchUser = _____() => {
  const response = await _____(url);
  const result = _____ response.json();
  console.log("res", result);
  return result;
};

const outputData = _____() => {
  const user = _____ fetchUser();
  const userInfo = `
    <p><span>id: </span>${user.id}</p>
    <p><span>name: </span>${user.name}</p>
    <p><span>user name: </span>${user.username}</p>
    <p><span>email: </span>${user.email}</p>
    <p><span>phone: </span>${user.phone}</p>
  `;
  const output = document.querySelector('.output_area');
  output.innerHTML = userInfo;
}
outputData();
