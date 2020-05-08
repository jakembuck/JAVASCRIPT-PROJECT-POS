// Popup Menus and whatever
// Backgrounds popup menu
let fullBody = document.querySelector(".full-body");
let bpop = document.querySelector(".bpop");
let backgroundPop = document.querySelector(".background-popup");
const addFuncBpop = () => {
  bpop.style.display = "flex";
}
const removeFuncBpop = () => {
  bpop.style.display = "none";
}
backgroundPop.addEventListener("click", addFuncBpop);

// Extensions popup menu
let epop = document.querySelector(".epop");
let extensionsPop = document.querySelector(".extensions-popup");
const addFuncEpop = () => {
  epop.style.display = "flex";
}
const removeFuncEpop = () => {
  epop.style.display = "none";
}
extensionsPop.addEventListener("click", addFuncEpop);

// Products popup menu
let ppop = document.querySelector(".ppop");
let productsPop = document.querySelector(".products-popup");
const addFuncPpop = () => {
  ppop.style.display = "flex";
}
const removeFuncPpop = () => {
  ppop.style.display = "none";
}
productsPop.addEventListener("click", addFuncPpop);

// Checkout Popup
let cpop = document.querySelector(".fa-shopping-cart");
let checkoutPop = document.querySelector(".cart-container");
const addFuncCpop = () => {
  checkoutPop.style.display = "flex";
}
const removeFuncCpop = () => {
  checkoutPop.style.display = "none";
}
cpop.addEventListener("click", addFuncCpop);

// Exit button for Popup menus
let bexitButton = document.querySelector(".bexit");
bexitButton.addEventListener("click", removeFuncBpop);

let eexitButton = document.querySelector(".eexit");
eexitButton.addEventListener("click", removeFuncEpop);

let pexitButton = document.querySelector(".pexit");
pexitButton.addEventListener("click", removeFuncPpop);

let cexitButton = document.querySelector(".cexit");
cexitButton.addEventListener("click", removeFuncCpop);

// Cart and Checkout functions and such

let cartDeets = document.querySelector(".checkout-deets");
let cart = document.querySelector(".fa-shopping-cart");

fullBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    let cartItem = document.createElement("div");
    let titleP = document.createElement("p");
    let title = event.target.getAttribute("data-title");
    titleP.innerText = title;
    let priceP = document.createElement("p");
    let price = event.target.getAttribute("data-price");
    priceP.classList.add("price");
    priceP.innerText = price;
    cartItem.append(titleP, priceP);
    cartDeets.append(cartItem);
  }
});



let currentSubTotal = 0;
let subTotal = document.querySelector(".subtotal");
let currentTax = 0;
let tax = document.querySelector(".tax");
let currentTotal = 0;
let total = document.querySelector(".total");
let cartContainer = document.querySelector(".cart-container");

fullBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    let amount = Number(event.target.getAttribute("data-price"));
    currentSubTotal += amount;
    subTotal.innerText = `Subtotal $${currentSubTotal.toFixed(2)}`;
  }
});

fullBody.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    let taxAmount = Number(event.target.getAttribute("data-price"));
    currentTax = taxAmount *= .06;
    tax.innerText = `Tax $${currentTax.toFixed(2)}`;
  }
});

