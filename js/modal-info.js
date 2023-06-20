import Modal from "./modal.js"

const modal = new Modal(".backdrop", ".modal", ".modal__button")
const modalWindow = document.querySelector(`.modal`)

const modalBtn = document.querySelectorAll(`.modal-btn`)
const modalBtns = [...modalBtn]

modalBtns.forEach(btn => {

  btn.addEventListener(`click`, () => {

  modal.open()
  modal.init(modalWindow)
})
})