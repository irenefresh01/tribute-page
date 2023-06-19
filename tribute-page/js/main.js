
   

const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const slide1 = document.querySelector('.slide-1');
const slide2 = document.querySelector('.slide-2');

const slides = [slide1, slide2];

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide++;
    if(currentSlide>1){
        currentSlide = 0;
    }
    if(currentSlide<0){
        currentSlide  = 1;
    }
    slides[currentSlide].style.display = 'block';

})

prevBtn.addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide--;
    if(currentSlide>1){
        currentSlide = 0;
    }
    if(currentSlide<0){
        currentSlide  = 1;
    }
    slides[currentSlide].style.display = 'block';

})