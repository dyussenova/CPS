const technique = document.querySelector('.elem-technique')
const show2 = document.querySelector('.show2')

show2.addEventListener('click', function (event) {
  technique.classList.toggle('technique--hidden')
  if (show2.classList.contains('btn__tech')) {
    this.textContent = 'Скрыть'
  } else {
    this.textContent = 'Показать все'
  }
  show2.classList.toggle('btn__tech')
})
