'use strict';

const block1 = document.querySelector('.block1');
const block2 = document.querySelector('.block2');

let data, options, data_opt;
let year, month, day, hours, minutes, second;


const addZerro = (num) => (num < 10) ? '0' + num : num;

function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}

function showData () {
    options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    data = new Date();
    data_opt = data.toLocaleString('ru-RU', options);
    year = data.getFullYear();
    month = data.getMonth() + 1;
    day = data.getDate();
    hours = data.getHours();
    minutes = data.getMinutes();
    second = data.getSeconds();


    let arr = data_opt.split(', ');
    let dayOfWeek = arr[0];
    dayOfWeek = dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1);
    let today = arr[1].split('').slice(0, -3).join('');
    let time = arr[2].split(':');
    let timeString = ` ${+time[0]} ${declOfNum(+time[0], ['час', 'часа', 'часов'])} 
            ${+time[1]} ${declOfNum(+time[1], ['минута', 'минуты', 'минут'])} 
            ${+time[2]} ${declOfNum(+time[2], ['секунда', 'секунды', 'секунд'])} `;


    block1.textContent = 'Сегодня ' + dayOfWeek + ', ' + today + ' года' + ', ' + timeString;
    block2.textContent = addZerro(day) + '.' + addZerro(month) + '.' + year + ' - ' + addZerro(hours) + ':' + addZerro(minutes) + ':' + addZerro(second);
}


showData();

let update = setInterval(showData, 1000);









