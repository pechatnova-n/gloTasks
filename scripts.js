'use strict';

const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');

let data, year, month;
let day, dayWeek;
let today1, today2;
let hours, minutes, seconds;
let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];


const addZerro = (num) => {
    if(num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}
const declinationMonths = (str) => {
    if (str === "Март" || str === "Август") {
        return str + "а";
    } else if (str === "Май") {
        return str.slice(0, -1) + "я";
    } else {
        return str.slice(0, -1) + "я";
    }
}
const declinationHours = (num) => {
    if (num == 1 || num == 21) {
        return "час";
    } else if (num == 2 || num == 3 || num == 4 ||  num == 22 ||  num == 23 ||  num == 24) {
        return "часа";
    } else {
        return "часов";
    }
}
const declinationMin = (num) => {
    if (num == 1 || num == 21 || num == 31 || num == 41 || num == 51) {
        return "минута";
    } else if ( 2 <= num && num <= 4 || 22 <= num && num <= 24 || 32 <= num && num <= 34 || 42 <= num && num <= 44 || 52 <= num && num <= 54) {
        return "минуты";
    } else {
        return "минут";
    }
}
const declinationSec = (num) => {
    if (num == 1 || num == 21 || num == 31 || num == 41 || num == 51) {
        return "секунда";
    } else if (2 <= num && num <= 4 || 22 <= num && num <= 24 || 32 <= num && num <= 34 || 42 <= num && num <= 44 || 52 <= num && num <= 54) {
        return "секунды";
    } else {
        return "секунд";
    }
}
function showData () {
    data = new Date();
    year = data.getFullYear();
    month =  (data.getMonth());
    day =  (data.getDate());
    dayWeek = week[data.getDay()];
    hours = data.getHours();
    minutes = data.getMinutes();
    seconds = data.getSeconds();
    today1 = `Сегодня ${dayWeek}, ${day} ${declinationMonths(months[month])} ${year} года, ${hours} 
        ${declinationHours(hours)} ${minutes} ${declinationMin(minutes)} ${seconds} ${declinationSec(seconds)}`;

    today2 = `${addZerro(day)}.${addZerro(month + 1)}.${year} - ${addZerro(hours)}:${addZerro(minutes)}:${addZerro(seconds)}`;
    block1.textContent = today1;
    block2.textContent = today2;
}

let update = setInterval(showData, 1000);









