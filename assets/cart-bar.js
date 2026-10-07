!function(){"use strict";class t extends HTMLElement{constructor(){super(),this.section=this.closest("product-info"),this.form=this.section.querySelector("[data-product-form]"),this.formWrapper=theme.settings.productPageSticky&&this.section.querySelector("[data-form-wrapper]")||this.form,this.handleProductAddError=this.handleProductAddError.bind(this),this.boundToggleCartBarOnScroll=this.toggleCartBarOnScroll.bind(this),this.boundSetCartBarHeight=this.setCartBarHeight.bind(this)}connectedCallback(){this.setCartBarHeight(),this.addEventListener("click",this.handleClick.bind(this)),document.addEventListener("theme:scroll",this.boundToggleCartBarOnScroll),document.addEventListener("theme:resize",this.boundSetCartBarHeight),document.addEventListener("theme:product:add-error",this.handleProductAddError)}handleClick(t){const e=t.target.closest("[data-cart-bar-add-to-cart]");e&&(t.preventDefault(),e.classList.add("is-loading"),e.setAttribute("disabled","disabled"),this.form.closest("product-form").onSubmitHandler(t));t.target.closest("[data-cart-bar-scroll]")&&(t.preventDefault(),this.scrollToTop())}handleProductAddError(){this.querySelector("[data-cart-bar-add-to-cart]")&&this.scrollToTop()}scrollToTop(){const t=this.section.querySelector("variant-selects"),e=(theme.isMobile?t||this.form:this.section).getBoundingClientRect().top;window.theme.scrollTo(theme.isMobile?e-10:e)}toggleCartBarOnScroll(){
  const colors=this.section.querySelector(".bestini-colors");
  const mobile=window.matchMedia("(max-width: 749px)").matches;
  this.classList.toggle("bestini-cart-bar",!!colors&&mobile);
  if(colors&&mobile){
    const button=this.form.querySelector("[data-add-to-cart]");
    if(button){
      const rect=button.getBoundingClientRect();
      const entered=colors.getBoundingClientRect().top<window.innerHeight-100;
      const mainButtonVisible=rect.top>=0&&rect.bottom<=window.innerHeight;
      this.classList.toggle("is-visible",entered&&!mainButtonVisible);
      return;
    }
  }
  const t=window.scrollY;
  if(this.formWrapper){const e=t>this.formWrapper.offsetTop+this.formWrapper.offsetHeight;this.classList.toggle("is-visible",e)}
}setCartBarHeight(){this.toggleCartBarOnScroll();const t=this.offsetHeight;document.documentElement.style.setProperty("--cart-bar-height",`${t}px`)}disconnectedCallback(){document.removeEventListener("theme:product:add-error",this.handleProductAddError),document.removeEventListener("theme:scroll",this.boundToggleCartBarOnScroll),document.removeEventListener("theme:resize",this.boundSetCartBarHeight)}}customElements.get("cart-bar")||customElements.define("cart-bar",t)}();

