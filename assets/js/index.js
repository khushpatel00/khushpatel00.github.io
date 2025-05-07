const headerElement = document.querySelector('header');

function updateHeaderBackground() {
    const headerRect = headerElement.getBoundingClientRect();

    if (headerRect.top <= 10) {
        headerElement.classList.add('headerGlass');
        headerElement.classList.remove('headerTransparent');
    } else {
        headerElement.classList.add('headerTransparent');
        headerElement.classList.remove('headerGlass');
    }
}

window.addEventListener('scroll', updateHeaderBackground);

document.addEventListener('DOMContentLoaded', updateHeaderBackground);