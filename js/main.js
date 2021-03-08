const modalButton = document.querySelector('.jsModalButton')
const modalCloseButton = document.querySelector('.jsModalClose')
const modalOverlay = document.querySelector('.modal-overlay')

modalButton.addEventListener('click', event => {
  document.body.classList.add('modal-is-open')
})

modalCloseButton.addEventListener('click', event => {
  document.body.classList.remove('modal-is-open')
})

modalOverlay.addEventListener('click', event => {
  if (!event.target.closest('.modal')) {
    document.body.classList.remove('modal-is-open')
  }
})
