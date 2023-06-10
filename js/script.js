// mobile menu
const mobileBtn = document.querySelector('.navbar__btn')
const navBarMenu = document.querySelector('.navbar__mobile-menu')
const btnClose = document.querySelector('.navbar__btn-close')

mobileBtn.addEventListener(`click`, mobileMenu)

function mobileMenu() {
  mobileBtn.classList.add(`menu-open`)
  document.body.classList.add('disabled-scroll')

  if (mobileBtn.classList.contains('menu-open')) {
    navBarMenu.style.transform = `translateX(0)`
  }
}

// mob close btn
btnClose.addEventListener(`click`, () => {
  mobileBtn.classList.remove(`menu-open`)
  navBarMenu.style.transform = `translateX(100%)`
  document.body.classList.remove('disabled-scroll')
})
// -------