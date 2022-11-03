//SignInボタンクリック時にボタンの名前(SignIn)を出力してください
// __の箇所に適切なものを書きましょう！

const signInButton = document.querySelector('.open-modal');

signInButton.addEventListener('click', (event) => {
  console.log(event.target.innerHTML);
});
