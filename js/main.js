(()=>{var e={598:()=>{function e(e){var t=!0,o=!1,s=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function n(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function l(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){t=!1}function a(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(o){o.metaKey||o.altKey||o.ctrlKey||(n(e.activeElement)&&l(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",d,!0),document.addEventListener("pointerdown",d,!0),document.addEventListener("touchstart",d,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(o&&(t=!0),a())}),!0),a(),e.addEventListener("focus",(function(e){var o,s,d;n(e.target)&&(t||(s=(o=e.target).type,"INPUT"===(d=o.tagName)&&i[s]&&!o.readOnly||"TEXTAREA"===d&&!o.readOnly||o.isContentEditable))&&l(e.target)}),!0),e.addEventListener("blur",(function(e){var t;n(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(s),s=window.setTimeout((function(){o=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function o(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}(()=>{"use strict";o(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body},t=()=>{var t;const o=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),s=(document.body,parseInt(e.bodyEl.dataset.position,10));o.forEach((e=>{e.style.paddingRight="0px"})),e.bodyEl.style.paddingRight="0px",e.bodyEl.style.top="auto",e.bodyEl.classList.remove("dis-scroll"),window.scroll({top:s,left:0}),e.bodyEl.removeAttribute("data-position")};!function(){var o,s,i,n;const l=null===(o=document)||void 0===o?void 0:o.querySelector("[data-burger]"),d=null===(s=document)||void 0===s?void 0:s.querySelector("[data-menu]"),a=null===(i=document)||void 0===i?void 0:i.querySelectorAll("[data-menu-item]"),c=null===(n=document)||void 0===n?void 0:n.querySelector("[data-menu-overlay]");null==l||l.addEventListener("click",(o=>{null==l||l.classList.toggle("burger--active"),null==d||d.classList.toggle("menu--active"),null!=d&&d.classList.contains("menu--active")?(null==l||l.setAttribute("aria-expanded","true"),null==l||l.setAttribute("aria-label","Close menu"),null==c||c.classList.add("overlay--show"),(()=>{var t;const o=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),s=window.scrollY,i=window.innerWidth-e.bodyEl.offsetWidth+"px";e.htmlEl.style.scrollBehavior="none",o.forEach((e=>{e.style.paddingRight=i})),e.bodyEl.style.paddingRight=i,e.bodyEl.classList.add("dis-scroll"),e.bodyEl.dataset.position=s,e.bodyEl.style.top=`-${s}px`})()):(null==l||l.setAttribute("aria-expanded","false"),null==l||l.setAttribute("aria-label","Open menu"),null==c||c.classList.remove("overlay--show"),t())})),null==c||c.addEventListener("click",(()=>{null==l||l.setAttribute("aria-expanded","false"),null==l||l.setAttribute("aria-label","Open menu"),null==l||l.classList.remove("burger--active"),null==d||d.classList.remove("menu--active"),null==c||c.classList.remove("overlay--show"),t()})),null==a||a.forEach((e=>{e.addEventListener("click",(()=>{null!=l&&l.classList.contains("burger--active")&&(null==l||l.setAttribute("aria-expanded","false"),null==l||l.setAttribute("aria-label","Open menu"),null==l||l.classList.remove("burger--active"),null==d||d.classList.remove("menu--active"),null==c||c.classList.remove("overlay--show"),t())}))}))}(),new class{constructor(e,t){this.options=Object.assign({isOpen:()=>{},isClose:()=>{},defaultSpeed:300,autoFocusToCloseBtn:!1,modalOverlayName:"data-modal-overlay",modalWindowName:"data-modal-target",modalWindowSpeedName:"data-modal-speed",modalCloseBtnName:"data-modal-close",modalOverlayBlockName:"overlay-show",disableScrollName:"dis-scroll",modalWindowBlockName:"block",modalWindowShowName:"window-show",fixElemName:"data-modal-fix"},t),this.btns=document.querySelectorAll(e),this.modalOpened=!1,this.speed=null,this.modalOverlay=document.querySelector(`[${this.options.modalOverlayName}]`),this.window=null,this.modalCloseBtn=null,this.modalFocusElems=null,this.previusFocusElem=null,this.documentFocusElems=null,this.previusActiveWindow=null,this.focusElems=["a[href]","input","button","select","textarea","[tabindex]"],this.events()}events(){document.addEventListener("DOMContentLoaded",(()=>{this.btns.length>0&&(this.btns.forEach((e=>{document.addEventListener("click",(t=>{if(t.target==e){if(this.getDataPath(e),!this.modalOpened){if((new Date).getTime()-this.lastClick<this.speed)return;this.lastClick=(new Date).getTime(),this.openModal(this.window),t.preventDefault()}if(this.modalOpened){if((new Date).getTime()-this.lastClick<this.speed)return;this.lastClick=(new Date).getTime(),this.previusActiveWindow=document.querySelector(`.${this.options.modalWindowBlockName}.${this.options.modalWindowShowName}`),this.previusActiveWindow!=this.window&&this.reOpenModal(this.previusActiveWindow,this.window)}}if(t.target==this.modalCloseBtn||t.target==this.modalOverlay){if((new Date).getTime()-this.lastClick<this.speed)return;this.lastClick=(new Date).getTime(),this.modalOpened&&(this.closeModal(this.window),t.preventDefault())}}))})),document.addEventListener("keydown",(e=>{if(this.modalOpened&&("Tab"===e.code&&this.focusInModal(e),"Escape"===e.code)){if((new Date).getTime()-this.lastClick<this.speed)return;this.lastClick=(new Date).getTime(),this.closeModal(this.window),e.preventDefault()}})))}))}getDataPath(e){const t=e.dataset.modal;this.window=document.querySelector(`[${this.options.modalWindowName}="${t}"]`),this.modalCloseBtn=this.window.querySelector(`[${this.options.modalCloseBtnName}]`),e.hasAttribute(`${this.options.modalWindowSpeedName}`)?this.speed=e.dataset.modalSpeed:this.speed=this.options.defaultSpeed}openModal(e){this.options.isOpen(this),this.previusFocusElem=document.activeElement,this.documentFocusElems=document.querySelectorAll(this.focusElems),this.navigationOff(this.documentFocusElems),this.focusToModal(e),this.disableScroll(),this.modalOverlay.classList.add(this.options.modalOverlayBlockName),this.modalOverlay.style.setProperty("--transition-modal-time",this.speed/1e3+"s"),e.classList.add(this.options.modalWindowBlockName),setTimeout((()=>{e.classList.add(this.options.modalWindowShowName)})),setTimeout((()=>{this.modalOpened=!0,this.navigationOn(this.documentFocusElems)}),this.speed)}closeModal(e){this.focusToBtn(),this.modalOverlay.classList.remove(this.options.modalOverlayBlockName),e.classList.remove(this.options.modalWindowShowName),setTimeout((()=>{this.modalOverlay.removeAttribute("style"),e.classList.remove(this.options.modalWindowBlockName),this.modalOpened=!1,this.enableScroll(),this.navigationOn(this.documentFocusElems)}),this.speed),this.options.isClose(this)}focusToModal(e){this.modalFocusElems=Array.from(e.querySelectorAll(this.focusElems)),this.modalFocusElems.length>0&&setTimeout((()=>{this.modalFocusElems[0].focus()}),this.speed),this.modalCloseBtn&&this.options.autoFocusToCloseBtn&&setTimeout((()=>{this.modalCloseBtn.focus()}),this.speed)}focusToBtn(){setTimeout((()=>{this.previusFocusElem.focus()}),this.speed)}focusInModal(e){const t=Array.prototype.slice.call(this.modalFocusElems),o=t.indexOf(document.activeElement);!e.shiftKey&&o===t.length-1&&t.length>0&&(this.modalFocusElems[0].focus(),e.preventDefault()),0===t.length&&this.navigationOff(this.documentFocusElems),e.shiftKey&&0===o&&(this.modalFocusElems[this.modalFocusElems.length-1].focus(),e.preventDefault())}navigationOn(e){e.forEach((e=>{e.removeAttribute("tabIndex")}))}navigationOff(e){e.forEach((e=>{e.tabIndex=-1}))}disableScroll(){const e=document?.querySelectorAll(`[${this.options.fixElemName}]`),t=window.scrollY,o=window.innerWidth-document.body.offsetWidth+"px";document.documentElement.style.scrollBehavior="none",e.forEach((e=>{e.style.paddingRight=o})),document.body.style.paddingRight=o,document.body.classList.add(this.options.disableScrollName),document.body.dataset.position=t,document.body.style.top=`-${t}px`}enableScroll(){const e=document?.querySelectorAll(`[${this.options.fixElemName}]`);document.body.classList.remove(this.options.disableScrollName),document.body.removeAttribute("style"),e.forEach((e=>{e.removeAttribute("style")}));let t=parseInt(document.body.dataset.position,10);window.scroll({top:t,left:0}),document.body.removeAttribute("data-position")}reOpenModal(e,t){e.classList.remove(this.options.modalWindowShowName),setTimeout((()=>{this.enableScroll(),e.classList.remove(this.options.modalWindowBlockName),this.openModal(t)}),this.speed)}}("[data-modal]")})()})();