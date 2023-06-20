const isMobileDevice = /Mobi/i.test(navigator.userAgent);

// Проверка на ширину экрана, чтобы убедиться, что это мобильное устройство
const isMobileWidth = window.innerWidth <= 767;

export default class Modal {
  constructor(backdropSelector, modalSelector, closeButtonSelector) {
    this.backdrop = document.querySelector(backdropSelector);
    this.modal = document.querySelector(modalSelector);
    this.closeButton = document.querySelector(closeButtonSelector);
  }

  open() {
    document.body.classList.add('modal-open')
    if (isMobileDevice && isMobileWidth) {
    // При открытии модального окна
    document.body.classList.add('mobile-modal-open');
  }
    this.backdrop.style.display = "block";
    this.modal.style.display = "flex";
  }

  close() {
    this.backdrop.style.display = "none";
    this.modal.style.display = "none";
    document.body.classList.remove('modal-open')
    if (isMobileDevice && isMobileWidth) {
    // При открытии модального окна
    document.body.classList.remove('mobile-modal-open');
  }
  }

  init(e) {
     this.closeButton.addEventListener("click", () => {
       e.style.animationName = `modalAnimClose`
       setTimeout(() => {
       this.close();
       e.style.animationName = `modalAnim`
       }, 150)
     });

     this.backdrop.addEventListener("click", (event) => {
       if (event.target === this.backdrop) {
         e.style.animationName = `modalAnimClose`
       setTimeout(() => {
       this.close();
       e.style.animationName = `modalAnim`
       }, 150)
       }
     });
   }
}