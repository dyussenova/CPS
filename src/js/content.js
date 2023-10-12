let list = document.querySelector('.page__list')
let changeLink = {
  handleEvent(event) {
    const target = event.target.closest('.page__item ')
    if (!target) return
    target.classList.toggle('page__item--active', event.type == 'mouseenter')
  }
}
list.addEventListener('mouseenter', changeLink, true)
list.addEventListener('mouseleave', changeLink, true)

let text = document.querySelector('.page__text')
let read = document.querySelector('.page__btn--read')

read.addEventListener('click', function (event) {
  text.classList.toggle('page__text--hidden')
  if (read.classList.contains('btn__read')) {
    this.textContent = 'Скрыть'
  } else {
    this.textContent = 'Читать далее'
  }
  read.classList.toggle('btn__read')
})
