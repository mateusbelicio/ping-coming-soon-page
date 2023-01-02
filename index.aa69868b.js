"use strict";
/////////////////////
// GLOBAL DEFINITIONS
const MSG_ERROR_EMPTY = "Whoops! It looks like you forgot to add your email";
const MSG_ERROR_INVALID = "Please provide a valid email address";
/////////////////////
// SELECTING DOM ELEMENTS
const form = document.querySelector(".form");
const emailInput = document.querySelector(".form__input");
const errorMessage = document.querySelector(".form__error-msg");
const body = document.querySelector("body");
/////////////////////
// FUNCTIONS
/**
 * Function to validate an email using regular expression
 * @param {String} email - string of the email to be validated
 * @returns {Boolean} true || false
 */ const isValidEmail = function(email) {
    const emailRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return emailRegex.test(email);
};
/**
 * Function that renders the error message on the screen
 * @param {String} msg - error message
 */ const renderError = function(msg) {
    errorMessage.textContent = msg;
    form.dataset.valid = false;
};
/**
 * Function that clears the error message from the screen
 */ const clearError = function() {
    errorMessage.textContent = "";
    form.dataset.valid = true;
};
/**
 * Function that renders the thanks message on the screen and
 * add an event to close it
 */ const renderMessage = function() {
    const markup = `
    <div class="message">
      <p>Thank you for subscribing!</p>
      <button class="btn btn--close">Close</button>
    </div>
  `;
    if (!body.querySelector(".message")) {
        body.insertAdjacentHTML("beforeend", markup);
        // Add event handle to close message
        const close = document.querySelector(".message .btn--close");
        close.addEventListener("click", ()=>close.closest(".message").remove());
    }
};
/////////////////////
// EVENTS HANDLER
form.addEventListener("submit", function(event) {
    // To not reload the page on submit the form
    event.preventDefault();
    const email = emailInput.value;
    // Check if the input is not empty
    if (!email) {
        renderError(MSG_ERROR_EMPTY);
        return;
    }
    // Check if the email is valid
    if (!isValidEmail(email)) {
        renderError(MSG_ERROR_INVALID);
        return;
    }
    // Shows thanks message (form submited)
    renderMessage();
    clearError();
    // Clear input
    emailInput.value = "";
});

//# sourceMappingURL=index.aa69868b.js.map
