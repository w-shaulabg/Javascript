//ユーザー情報を取得してhtml出力してみよう！！
// __の箇所に適切なものを書きましょう！

fetch("_____")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log("data:", user);
    const userInfo = `
          <p><span>id: </span>_____</p>
          <p><span>name: </span>_____</p>
          <p><span>user name: </span>${user.username}</p>
          <p><span>email: </span>${user.email}</p>
          <p><span>phone: </span>${user.phone}</p>
        `;
    const output = document.querySelector("_____");
    output.innerHTML = userInfo;
  })
  .catch((error) => {
    console.log("失敗しました");
  });
