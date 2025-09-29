const hamMenu = document.querySelector('.ham-menu');
const ul = document.querySelector('.ul');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    ul.classList.toggle('active');
})