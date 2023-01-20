const modal = document.querySelector('.modal');

/*
 * modalの表示非表示処理
 */
const openModalButton = document.querySelector('.openModalButton');
openModalButton.addEventListener('click', (event) => {
  modal.classList.remove('hide');
  modal.classList.add('show');
});

/*
 * 「モーダルを閉じる」をクリックしたときの非表示処理
 */
const closeModalButton = document.querySelector(
  '.closeModalButton'
);
closeModalButton.addEventListener('click', (event) => {
  modal.classList.remove('show');
  modal.classList.add('hide');
});

/*
classListは特定の要素のクラス名を追加したり、
削除したり、参照したりすることが出来る便利なプロパティ
 * modal以外をクリックしたときの示非表示処理
 */
modal.addEventListener('click', e => {
  if (event.target.closest('.modal__container') === null) {
    modal.classList.remove('show');
    modal.classList.add('hide');
    modal.classList.alert('外側をクリックされました。');
  }
});
