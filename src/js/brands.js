const elem = document.querySelector('.elem')
const show = document.querySelector('.show')

show.addEventListener('click', function (event) {
  elem.classList.toggle('brands--hidden')
  if (show.classList.contains('btn__show')) {
    this.textContent = 'Скрыть'
  } else {
    this.textContent = 'Показать все'
  }
  show.classList.toggle('btn__show')
})
