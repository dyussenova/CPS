const side = document.querySelector('.sideover')

const modalController = ({ modal, modal2, btnOpen, btnClose }) => {
  const iconOpen = document.querySelectorAll(btnOpen)
  const modalElem = document.querySelector(modal)
  const side1 = document.querySelector(modal2)

  const closeModal = (event) => {
    let target = event.target

    if (target === modalElem || target.closest(btnClose)) {
      side1.classList.remove('modal-open')
      side.classList.remove('page-opacity')
      modalElem.classList.remove('modal-open')
    }
  }

  const openModal = () => {
    modalElem.classList.add('modal-open')
    side1.classList.add('modal-open')
    side.classList.add('page-opacity')
  }

  iconOpen.forEach((btn) => {
    btn.addEventListener('click', openModal)
  })

  modalElem.addEventListener('click', closeModal)
}
modalController({
  modal: '.overlay-modal',
  modal2: '.modal__call',
  btnOpen: '.item-page__icon-call',
  btnClose: '.modal__btn'
})

modalController({
  modal: '.overlay-modal',
  modal2: '.modal__feedback',
  btnOpen: '.item-page__icon-chat',
  btnClose: '.close__feed'
})
