//「モーダルテストボタン」を押下したら、モーダルが表示されるような実装をしましょう！！
// __の箇所に適切なものを書きましょう！

const signInButton = document._______("_______");
const modalCloseButton = document.querySelector("_______");
const overlay = document.querySelector(".overlay");

signInButton._______("_______", function (event) {
  const modal = document._______(".modal");
  modal.classList.add("show");
});

modalCloseButton.addEventListener("click", function (event) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("show");
});

overlay.addEventListener("click", function (event) {
  const modal = document.querySelector(".modal");
  modal.classList.remove("show");
});
