const side = document.querySelector('.sideover')

const modalController = ({ modal, btnOpen, btnClose }) => {
  const iconOpen = document.querySelectorAll(btnOpen)
  const modalElem = document.querySelector(modal)
  const modalbtn = document.querySelector(btnClose)

  modalElem.style.cssText = `
  right: 0;
  visibility: visible;
`
  const closeModal = (event) => {
    const target = event.target

    if (target === modalbtn) {
      side.classList.remove('page-opacity')
      modalElem.style.visibility = 'hidden'
      modalElem.style.right = '-768px'
    }
  }

  const openModal = () => {
    modalElem.style.visibility = 'visible'
    modalElem.style.right = '0px'

    side.classList.add('page-opacity')
  }

  iconOpen.forEach((btn) => {
    btn.addEventListener('click', openModal)
  })

  modalbtn.addEventListener('click', closeModal)
}

modalController({
  modal: '.modal__call',
  btnOpen: '.item-page__icon-call',
  btnClose: '.modal__btn'
})

modalController({
  modal: '.modal__feedback',
  btnOpen: '.item-page__icon-chat',
  btnClose: '.close__feed'
})
