let sliderBlock = document.querySelector(".container");
let progress = document.querySelector('.progress-blue');
let offset = 302;
const interval = setInterval(scrollRight, 4000);
progress.style.width = (sliderBlock.clientWidth) / (sliderBlock.scrollWidth) / 2 * 100 + '%';

function scrollToPrev() {
    let scrolled = sliderBlock.scrollLeft;
    if (scrolled !== 0) {
        sliderBlock.scrollTo({left: scrolled - offset, behavior: "smooth"});
        progress.style.width = (sliderBlock.scrollLeft + sliderBlock.clientWidth) / (sliderBlock.scrollWidth ) * 100 + '%'
    }
}

function scrollRight() {
    let scrolled = sliderBlock.scrollLeft;
    if ((scrolled + sliderBlock.clientWidth) < (sliderBlock.scrollWidth)) {
        sliderBlock.scrollTo({left: scrolled + offset, behavior: "smooth"});
        progress.style.width = (scrolled + sliderBlock.clientWidth) / (sliderBlock.scrollWidth) * 100 + '%';
    } else {
        sliderBlock.scrollTo({left: 0, behavior: "smooth"});
        progress.style.width = (sliderBlock.clientWidth) / (sliderBlock.scrollWidth) / 2 * 100 + '%';
    }
}
