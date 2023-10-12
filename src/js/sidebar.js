const page = document.querySelector('.page')

const modalController1 = ({ modal, btnOpen, btnClose }) => {
  const iconOpen = document.querySelectorAll(btnOpen)
  const modalElem = document.querySelector(modal)
  const modalbtn = document.querySelector(btnClose)

  modalElem.style.cssText = `
  left: 0;
  visibility: visible;
`

  const closeModal = (event) => {
    const target = event.target

    if (target === modalbtn) {
      page.classList.remove('page-opacity')
      modalElem.style.visibility = 'hidden'
      modalElem.style.left = '-768px'
    }
  }

  const openModal = () => {
    modalElem.style.visibility = 'visible'
    modalElem.style.left = '0px'

    page.classList.add('page-opacity')
  }

  iconOpen.forEach((btn) => {
    btn.addEventListener('click', openModal)
  })

  modalbtn.addEventListener('click', closeModal)
}

modalController1({
  modal: '.sidebar',
  btnOpen: '.burger',
  btnClose: '.close'
})

let list = document.querySelector('.sidebar__list')
let changeColor = {
  handleEvent(event) {
    const target = event.target.closest('.sidebar__item')
    if (!target) return
    target.classList.toggle('sidebar__item--active', event.type == 'mouseenter')
  }
}
list.addEventListener('mouseenter', changeColor, true)
list.addEventListener('mouseleave', changeColor, true)

let langs = document.querySelector('.sidebar__languages')
let changeLangs = {
  handleEvent(event) {
    const target = event.target.closest('.sidebar__item-lang')
    if (!target) return
    target.classList.toggle(
      'sidebar__item-lang--active',
      event.type == 'mouseenter'
    )
  }
}
langs.addEventListener('mouseenter', changeLangs, true)
langs.addEventListener('mouseleave', changeLangs, true)
