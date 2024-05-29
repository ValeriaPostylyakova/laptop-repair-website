const containerElement = document.querySelectorAll('.slider__container'),
    sliderLine = document.querySelector('.slider__line'),
    btnPrev = document.querySelector('.slider__btn-prev'),
    btnNext = document.querySelector('.slider__btn-next'),
    chackpoit = document.querySelectorAll('.slider__chackpoint');

    let sliderCount = 0,
    sliderWidth;

    window.addEventListener('resize', showSlide);

    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prewSlide);


    function showSlide() {
        sliderWidth = document.querySelector('.slider-show').offsetWidth;
        sliderLine.style.width = sliderWidth * containerElement.length + 'px';
        containerElement.forEach(item => item.style.width = sliderWidth + 'px');
        rollSlider();
    }

    showSlide();

    function nextSlide() {
        sliderCount++;
        if (sliderCount >= containerElement.length) sliderCount = 0;

        rollSlider();
        thisSlide(sliderCount);
    }

    function prewSlide() {
        sliderCount--;
        if(sliderCount < 0) sliderCount = containerElement.length - 1;

        rollSlider();
        thisSlide(sliderCount);
    }


    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }

    function thisSlide(index) {
        chackpoit.forEach(item => item.classList.remove('active'));
        chackpoit[index].classList.add('active');
    } 

    chackpoit.forEach((point, index) => {
        point.addEventListener('click',() => {
            sliderCount = index;
            rollSlider();
            thisSlide(sliderCount);
        } )
    })