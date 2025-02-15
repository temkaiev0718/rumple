class CustomModal extends HTMLElement {

  constructor() {

    super();

    document.addEventListener('keyup', (e) => {

      if (e.key === "Escape") {
        if (this.classList.contains('active')) {
          this.close();
        }
      }
    });
  }

  open() {

    this.classList.add('active');
    document.querySelector('body')?.classList.add('overflow-hidden');
  }

  close() {

    this.classList.remove('active');
    document.querySelector('body')?.classList.remove('overflow-hidden');
  }
}

customElements.define('custom-modal', CustomModal);

class ModalTrigger extends HTMLElement {

  constructor() {

    super();

    this.target = document.querySelector(`[data-modal="${this.dataset.target}"]`) || false;

    this.querySelector('button').addEventListener('click', (e) => {

      if (!this.target) return;

      if (this.target.classList.contains('active')) {
        this.target.close();
      } else {
        this.target.open();
      }
    });
  }
}

customElements.define('modal-trigger', ModalTrigger);