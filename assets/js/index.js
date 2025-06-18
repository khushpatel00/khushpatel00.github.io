const headerElement = document.querySelector('header'); function updateHeaderBackground() { const headerRect = headerElement.getBoundingClientRect(); if (headerRect.top <= 20) { headerElement.classList.add('headerGlass'); headerElement.classList.remove('headerTransparent'); } else { headerElement.classList.add('headerTransparent'); headerElement.classList.remove('headerGlass'); } } window.addEventListener('scroll', updateHeaderBackground); document.addEventListener('DOMContentLoaded', updateHeaderBackground);

const iFrameOpen = function(){
    iFrameElement = document.getElementById("openSiteIframe");
    iFrameElementCoffee = document.getElementById("WebPreviewCoffee");
    iFrameImageCoffee = document.getElementById("coffeeImageIframe");
    // revertIFrame = document.getElementsByClassName("revertIFrame");
    iFrameElement.onclick = function(){
        iFrameElement.classList.remove("col-lg-6","col-12");
        iFrameElement.classList.add("col-10", "mx-auto", "mt-5");
        iFrameElementCoffee.classList.remove("h-0");
        // iFrameElementCoffee.classList.add("h-100");
        iFrameImageCoffee.classList.add("d-none");
        // revertIFrame.classList.add("d-flex");
        // revertIFrame.classList.remove("d-none");
    }; 
    // revertIFrame.onclick = function(){
    //     iFrameElement.classList.add("col-lg-6","col-10");
    //     iFrameElement.classList.remove("col-lg-10","col-10");
    //     iFrameElementCoffee.classList.add("d-none");
    //     revertIFrame.classList.remove("d-flex");
    //     revertIFrame.classList.add("d-none");
    // }
};
document.addEventListener('DOMContentLoaded', iFrameOpen);