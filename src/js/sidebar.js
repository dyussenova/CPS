const page = document.querySelector('.page')

const modalController1 = ({ modal, modal2, btnOpen, btnClose }) => {
  const iconOpen = document.querySelectorAll(btnOpen)
  const modalElem = document.querySelector(modal)
  const side = document.querySelector(modal2)

  const closeModal = (event) => {
    const target = event.target

    if (target === modalElem || target.closest(btnClose)) {
      side.classList.remove('sidebar-open')
      modalElem.classList.remove('sidebar-open')
      page.classList.remove('page-opacity')
    }
  }

  const openModal = () => {
    side.classList.add('sidebar-open')
    modalElem.classList.add('sidebar-open')
    page.classList.add('page-opacity')
  }

  iconOpen.forEach((btn) => {
    btn.addEventListener('click', openModal)
  })

  modalElem.addEventListener('click', closeModal)
}

modalController1({
  modal: '.overlay-sidebar',
  modal2: '.sidebar',
  btnOpen: '.burger',
  btnClose: '.close'
})

const list = document.querySelector('.sidebar__list')
const changeColor = {
  handleEvent(event) {
    const target = event.target.closest('.sidebar__item')
    if (!target) return
    target.classList.toggle('sidebar__item--active', event.type == 'mouseenter')
  }
}
list.addEventListener('mouseenter', changeColor, true)
list.addEventListener('mouseleave', changeColor, true)

const langs = document.querySelector('.sidebar__languages')
const changeLangs = {
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
