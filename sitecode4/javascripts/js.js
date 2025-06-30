//медиатор

document.addEventListener("DOMContentLoaded", function () {
let shiftX, shiftY;
const mediator = document.querySelector(".mediator");
if (!mediator) return;

mediator.addEventListener('mousedown', (e) => {
const rect = mediator.getBoundingClientRect();
shiftX = e.clientX - rect.left;
shiftY = e.clientY - rect.top;

const moveAt = (e) => {
 mediator.style.left = (e.clientX - shiftX) + 'px';
 mediator.style.top = (e.clientY - shiftY) + 'px';
};

const onMouseMove = (e) => moveAt(e);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', () => {
document.removeEventListener('mousemove', onMouseMove);
mediator.style.cursor = 'grab';
    }, { once: true });

mediator.style.cursor = 'grabbing';
});

mediator.ondragstart = () => false;
});

//звезда

document.addEventListener("DOMContentLoaded", function () {
let shiftX, shiftY;
const star = document.querySelector(".star");
if (!star) return;

star.addEventListener('mousedown', (e) => {
const rect = star.getBoundingClientRect();
shiftX = e.clientX - rect.left;
shiftY = e.clientY - rect.top;

const moveAt = (e) => {
star.style.left = (e.clientX - shiftX) + 'px';
star.style.top = (e.clientY - shiftY) + 'px';
};

const onMouseMove = (e) => moveAt(e);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', () => {
document.removeEventListener('mousemove', onMouseMove);
star.style.cursor = 'grab';
    }, { once: true });

star.style.cursor = 'grabbing';
});

star.ondragstart = () => false;
});


document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.book-container img');
    let current = 0;
  
    // Создаем объект аудио и загружаем файл
    const clickSound = new Audio('./sounds/mixkit-single-book-paging-1101.wav');
  
    document.querySelector('.book-container').addEventListener('click', () => {
      // Воспроизводим звук
      clickSound.currentTime = 0; // чтобы звук всегда запускался с начала
      clickSound.play();
  
      // Переключаем страницы
      pages[current].classList.remove('active');
      current = (current + 1) % pages.length;
      pages[current].classList.add('active');
    });
  });

  document.addEventListener('DOMContentLoaded', () => {

  const cardContainer = document.querySelector('.card-container1');
  const card = document.querySelector('.card1');

  cardContainer.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

});


document.addEventListener('DOMContentLoaded', () => {

  const cardContainer = document.querySelector('.card-container2');
  const card = document.querySelector('.card2');

  cardContainer.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

});

document.addEventListener('DOMContentLoaded', () => {

  const cardContainer = document.querySelector('.card-container3');
  const card = document.querySelector('.card3');

  cardContainer.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const card1 = document.querySelector(".card1");
  const sound = document.getElementById("card1sound");
  
  card1 .addEventListener("click", () => {
      sound.currentTime = 0; 
      sound.play();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const card2 = document.querySelector(".card2");
  const sound = document.getElementById("card2sound");
  
  card2 .addEventListener("click", () => {
      sound.currentTime = 0; 
      sound.play();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const card3 = document.querySelector(".card3");
  const sound = document.getElementById("card3sound");
  
  card3 .addEventListener("click", () => {
      sound.currentTime = 0; 
      sound.play();
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const metal = document.querySelector(".metal");
  const sound = document.getElementById("metalsound");
  
  metal .addEventListener("click", () => {
      sound.currentTime = 0; 
      sound.play();
  });
});