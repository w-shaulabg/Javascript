const modal = document.querySelector('.modal');
const openButton = document.querySelector('.openButton');

openButton.addEventListener('click', e => {
  modal.classList.remove('hide');
  modal.classList.add('show');
});

const closeModalButton = document.querySelector(
  '.closeModalButton'
);
closeModalButton.addEventListener('click', e => {
  modal.classList.remove('show');
  modal.classList.add('hide');
});

modal.addEventListener('click', e => {
  if (event.target.closest('.modal__container') === null) {
    modal.classList.remove('show');
    modal.classList.add('hide');
    // alert('外側をクリックされました。') ← こちらもやってみるとおもろいです！！
  }
});



