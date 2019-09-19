// Derived (with only minor modification) from a pen by Yariv Fruend (https://codepen.io/YarivFrd/pen/NXomOV)
const sf = {};

sf.container = document.querySelector('#signup-container');
sf.form = document.querySelector('#signup-container > #singular-form');
sf.trigger = document.querySelector('#signup-container > #singular-form > button#trigger');
sf.input = document.querySelector('#signup-container > #singular-form > #input-container > input');
sf.submitButton = document.querySelector('#signup-container > #singular-form > #input-container > button');
sf.successMessage = document.querySelector('#signup-container > #singular-form > #success');

sf.submitDelay = 1500;

sf.clickHandler = (e) => {
    switch (e.target) {
        case sf.trigger:
            sf.container.style.width = '100%'
            e.target.classList.remove('shown');
            sf.input.classList.add('shown');
            sf.submitButton.classList.add('shown');
            sf.input.focus();
            break;
        case sf.submitButton:
            sf.submitForm();
            break;
    }
}

sf.handleInputKeypress = (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        sf.submitForm();
    }
}

sf.submitForm = () => {
    sf.input.style.transition = 'all .4s ease';
    sf.submitButton.style.transition = 'all .4s ease';
    sf.input.classList.remove('shown');
    sf.submitButton.classList.remove('shown');
    sf.container.style.transition = 'all .4s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
    sf.container.style.width = '';
    sf.successMessage.classList.add('shown');
    let submission = setTimeout(() => sf.form.submit(), sf.submitDelay);
}

sf.input.addEventListener('keypress', (e) => sf.handleInputKeypress(e));
sf.container.addEventListener('click', (e) => sf.clickHandler(e));
