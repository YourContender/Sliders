const images = document.querySelectorAll('.slider__images img');
const sliderList = document.querySelector('.slider__images');
let count = 0;
let width;

function createWidthSlider() {
    width = document.querySelector('.slider').offsetWidth;
    sliderList.style.width = width * images.length + 'px';

    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = 'auto'
    });

    console.log(width);
}

createWidthSlider();

document.querySelector('.btn__prev').addEventListener('click', () => {
    clickButton('prev');
});

document.querySelector('.btn__next').addEventListener('click', () => {
    clickButton('next');
});

function clickButton(value) {
    if (value === 'prev') {
        count--;

        if (count < 0) {
            count = images.length - 1;
        }

        translation()
    } else {
        count++;

        if (count >= images.length) {
            count = 0
        }
        
        translation()
    }
};

function translation() {
    sliderList.style.transform = 'translate(-' + count * width + 'px)';    
}