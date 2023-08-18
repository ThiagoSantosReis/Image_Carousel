const car_slide = document.querySelector('.slide');
const car_imgs = document.querySelectorAll('.slide img');
const btn_anterior = document.querySelector('.anterior');
const btn_proximo = document.querySelector('.proximo');

let cont = 0;
const slideW = car_imgs[0].clientWidth;
const intervalo = 3000

function proximo_slide(){
    if (cont >= car_imgs.length - 1) {
        cont = 0
    }else{
        cont++;
    }
    car_slide.style.transform = `translateX(${-cont * slideW}px)`;
}

btn_anterior.addEventListener('click', (e) => {
    e.preventDefault()
    if (cont <= 0){
        cont = car_imgs.length - 1
    }else{
        cont--;
    }
     
    car_slide.style.transform = `translateX(${-cont * slideW}px)`;
});

btn_proximo.addEventListener('click', (e) => {
    e.preventDefault()
    proximo_slide()
});

setInterval(proximo_slide, intervalo)