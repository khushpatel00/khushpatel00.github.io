const headerElement = document.querySelector('header'); function updateHeaderBackground() { const headerRect = headerElement.getBoundingClientRect(); if (headerRect.top <= 20) { headerElement.classList.add('headerGlass'); headerElement.classList.remove('headerTransparent'); } else { headerElement.classList.add('headerTransparent'); headerElement.classList.remove('headerGlass'); } } window.addEventListener('scroll', updateHeaderBackground); document.addEventListener('DOMContentLoaded', updateHeaderBackground);

const iFrameOpen = function(){
    iFrameElement = document.getElementById("openSiteIframe");
    iFrameElementCoffee = document.getElementById("WebPreviewCoffee");
    iFrameElement.onclick = function(){
        iFrameElement.classList.remove("col-lg-6","col-10");
        iFrameElement.classList.add("col-lg-10","col-10");
        iFrameElementCoffee.classList.remove("d-none");
    }; 
};