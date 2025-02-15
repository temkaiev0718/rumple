"use strict";

// Required for Theme Addresses
import 'element-matches';

/*================ Theme Scripts ================*/
// import * as a11y from '@shopify/theme-a11y';
// import * as cart from '@shopify/theme-cart';
// import * as currency from '@shopify/theme-currency';
import { AddressForm } from '@shopify/theme-addresses';
// import * as sections from '@shopify/theme-sections';

/*================ Global Functions ================*/
window.debounce = function (callback, wait) {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
};

window.Events = function () {
  return {
    itemAdded: {
      name: "theme:itemAdded",
      _event: (cart) => {
        return new CustomEvent("theme:itemAdded", {
          bubbles: true,
          detail: {
            cart: cart
          }
        });
      }
    },
    itemUpdated: {
      name: "theme:itemUpdated",
      _event: (product) => {
        return new CustomEvent("theme:itemUpdated", {
          bubbles: true,
          detail: {
            product: product
          }
        });
      }
    },
    itemRemoved: {
      name: "theme:itemRemoved",
      _event: (product) => {
        return new CustomEvent("theme:itemRemoved", {
          bubbles: true,
          detail: {
            product: product
          }
        });
      }
    },
    cartUpdated: {
      name: "theme:cartUpdated",
      _event: (cart) => {
        return new CustomEvent("theme:cartUpdated", {
          bubbles: true,
          detail: {
            cart: cart
          }
        });
      }
    },
    formUpdated: {
      name: "theme:formUpdated",
      _event: (form) => {
        return new CustomEvent("theme:formUpdated", {
          bubbles: true,
          detail: {
            form: form
          }
        });
      }
    }
  }
};

/*
 * Helper to set a cookie.
 *
 * @param cname: Name of the cookie.
 * @param cvalue: Value of the cookie.
 * @param exdays: Days until the cookie expires.
 */
window.setCookie = function (cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/*
 * Helper to get a cookie.
 *
 * @param cname: Name of the cookie.
 */
window.getCookie = function (cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/*
 * Helper to check if a cookie exists.
 *
 * @param cname: Name of the cookie.
 */
window.hasCookie = function (cname) {
  let cookie = getCookie(cname);
  if (cookie != "") {
    return true;
  } else {
    return false;
  }
}

/*================ Theme Functions ================*/
class Theme {

  constructor() {

    // Define the cart objects
    this.cart = window.theme.cart;

    // Cache objects
    this.currencySelect = document.querySelectorAll('select[name="currency"]');
    this.cartCount = document.querySelectorAll('[data-cart-count]') || false;
  }

  /*
   * The Initializer
   */
  init() {

    this.listeners();
  }

  /*
   * The Listeners
   */
  listeners() {

    document.addEventListener(Events().cartUpdated.name, this.cartUpdated.bind(this));
  }

  /*
   * Cart updated callback
   */
  cartUpdated() {

    if (this.cartCount == false) return;

    this.cartCount.forEach((count) => {
      count.innerHTML = event.detail.cart.item_count;
    });
  }

  cookiesEnabled() {
  }

  /*
   * Currency Select
   *
   * Trigger the currency select form when the select input is changed.
   */
  currencySelect() {

    if (typeof this.currencySelect != "undefined" && this.currencySelect.length != 0) {
      this.currencySelect.forEach((selector) => {

        selector.addEventListener('change', function (event) {
          event.currentTarget.parentElement.submit();
        });
      });
    }
  }

  addressForms() {

    AddressForm(document.querySelector('[data-address=root]'), 'en');
  }
}

export default Theme;

const theme = new Theme();
theme.init();

class DrawerTrigger extends HTMLElement {

  constructor() {
    super();

    const self = this;

    this.target = document.querySelector(this.dataset.target);
    this.openClass = this.dataset.openClass;
    this.closeClass = this.dataset.closeClass;

    this.addEventListener('click', this.toggleTarget.bind(this));

    document.addEventListener('keyup', function (e) {

      if (e.key === "Escape") {
        self.close();
        self.triggerStatus();
      }
    });
  }

  open() {

    event.preventDefault();

    document.querySelector('body').classList.add('overflow-hidden', 'drawer-open');

    this.target.setAttribute("aria-hidden", "false");
  }

  close() {

    event.preventDefault();

    document.querySelector('body').classList.remove('overflow-hidden', 'drawer-open');

    this.target.setAttribute("aria-hidden", "true");
  }

  triggerStatus() {

    const triggers = document.querySelectorAll(`drawer-trigger[data-target="${this.dataset.target}"]`),
      _this = this;

    triggers.forEach((trigger) => {

      if (_this.target.getAttribute("aria-hidden") == "false") {
        trigger.classList.add('active');
      } else {
        trigger.classList.remove('active');
      }

    });
  }

  toggleTarget() {

    // this.closeAllOpenDrawers();

    // Target is open
    if (this.target.getAttribute("aria-hidden") == "true") {
      this.open();
    } else {
      this.close();
    }

    this.triggerStatus();
  }

  closeAllOpenDrawers() {

    const drawers = Array.from(document.querySelectorAll('[data-drawer]')).filter((drawer) => drawer.getAttribute('aria-hidden') == "false");

    drawers.forEach((drawer) => {
      drawer.setAttribute("aria-hidden", "true");
    });
  }
}

customElements.define('drawer-trigger', DrawerTrigger);

class SearchTrigger extends HTMLElement {

  constructor() {
    super();

    const self = this;

    this.search = document.querySelector('[data-search-box]');
    this.openIcon = this.querySelector('[data-open-icon]');
    this.closeIcon = this.querySelector('[data-close-icon]');

    this.addEventListener('click', this.toggleSearch.bind(this));

    document.addEventListener('keyup', (e) => {
      if (e.key === "Escape") {
        self.close();
      }
    });
  }

  open() {

    event.preventDefault();

    document.querySelector('body').classList.add('overflow-hidden');

    this.search?.classList.add('block');
    this.search?.classList.remove('hidden');

    this.openIcon?.classList.remove('block');
    this.openIcon?.classList.add('hidden');

    this.closeIcon?.classList.add('block');
    this.closeIcon?.classList.remove('hidden');
  }

  close() {

    event.preventDefault();

    document.querySelector('body').classList.remove('overflow-hidden');

    this.search?.classList.remove('block');
    this.search?.classList.add('hidden');

    this.openIcon?.classList.add('block');
    this.openIcon?.classList.remove('hidden');

    this.closeIcon?.classList.remove('block');
    this.closeIcon?.classList.add('hidden');
  }

  toggleSearch() {

    // Target is open
    if (this.search.classList.contains('block')) {
      this.close();
    } else {
      this.open();
    }
  }
}

customElements.define('search-trigger', SearchTrigger);

class LocalizationForm extends HTMLElement {

  constructor() {
    super();

    this.select = this.querySelector('select');
    this.form = this.querySelector('form');

    console.log(this.select);

    this.select.addEventListener('change', this.submitHandler.bind(this));
  }

  submitHandler() {

    console.log("submitHandler");
    console.log(this.form);

    this.form.submit();
  }

}

customElements.define('localization-form', LocalizationForm);

