"use strict";const MSG_ERROR_EMPTY="Whoops! It looks like you forgot to add your email",MSG_ERROR_INVALID="Please provide a valid email address",form=document.querySelector(".form"),emailInput=document.querySelector(".form__input"),errorMessage=document.querySelector(".form__error-msg"),body=document.querySelector("body"),isValidEmail=function(e){return/^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(e)},renderError=function(e){errorMessage.textContent=e,form.dataset.valid=!1},clearError=function(){errorMessage.textContent="",form.dataset.valid=!0},renderMessage=function(){if(!body.querySelector(".message")){body.insertAdjacentHTML("beforeend",'\n    <div class="message">\n      <p>Thank you for subscribing!</p>\n      <button class="btn btn--close">Close</button>\n    </div>\n  ');const e=document.querySelector(".message .btn--close");e.addEventListener("click",(()=>e.closest(".message").remove()))}};form.addEventListener("submit",(function(e){e.preventDefault();const r=emailInput.value;r?isValidEmail(r)?(renderMessage(),errorMessage.textContent="",form.dataset.valid=!0,emailInput.value=""):renderError(MSG_ERROR_INVALID):renderError(MSG_ERROR_EMPTY)}));
//# sourceMappingURL=index.2a761df4.js.map
