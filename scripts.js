'use strict';

const block = document.getElementById("block");
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const day = new Date();


week.forEach(function(item) {
    if(item == 'Суббота' || item == 'Воскресенье') {
        block.innerHTML += item.italics() + '</br>';
    } else if(week[day.getDay() -1] == item) {
        block.innerHTML += `<b>${item}</b></br>`;
    } else {
        block.innerHTML += item + '</br>';
    }
})