//addEventListenerのサンプルコードです
//SignInボタンクリック時に「hoge」と出力できます

//DOMの取得
const signInButton = document.querySelector('.open-modal');

//クリックしたらconsole.log("hoge");を実行する
signInButton.addEventListener('click', (event) => {
  console.log("hoge");
});
