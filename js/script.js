/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)          ЕСТЬ

2) Изменить жанр фильма, поменять "комедия" на "драма"                   ЕСТЬ

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. ЕСТЬ
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла. 
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логанfff",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adds = document.querySelectorAll('.promo__adv'),
      comedy = document.querySelector(".promo__genre"),
      bg = document.querySelector('.promo__bg');
let list = document.querySelector(".promo__interactive-list");

adds.forEach(item => {
    item.remove();
});

comedy.replaceWith('ДРАМА');

bg.style.background = 'url(img/bg.jpg)';

list.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    list.innerHTML += `
    <li class="promo__interactive-item">${i + 1} - ${film}
        <div class="delete"></div>
    </li>
    `;
});