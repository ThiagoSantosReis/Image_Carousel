const car_slide = document.querySelector('.slide');
const car_imgs = document.querySelectorAll('.slide img');
const btn_anterior = document.querySelector('.anterior');
const btn_proximo = document.querySelector('.proximo');

let cont = 0;
const slideW = car_imgs[0].clientWidth;

btn_anterior.addEventListener('click', (e) => {
    e.preventDefault()
     if (cont <= 0) return;
     cont--;
    car_slide.style.transform = `translateX(${-cont * slideW}px)`;
});

btn_proximo.addEventListener('click', (e) => {
    e.preventDefault()
    if (cont >= car_imgs.length - 1) return;
    cont++;
    car_slide.style.transform = `translateX(${-cont * slideW}px)`;
});