const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;

burger.addEventListener('click', burgerHandler);

function burgerHandler(event) {
    event.preventDefault();
    popup.classList.toggle('open');
    burger.classList.toggle('active');
    body.classList.toggle('noscroll');
    rendlerPopup();
}

function rendlerPopup() {
    popup.appendChild(menu);
}