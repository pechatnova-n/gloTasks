'use strict';

const block = document.getElementById("block");
const week = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const day = new Date();


week.forEach(function(item) {
    if(item == 'Суббота' || item == 'Воскресенье') {
        if (week[day.getDay()] == item) {
            block.innerHTML += `<b>${item.italics()}</b></br>`;
        } else {
            block.innerHTML += `${item.italics()}</br>`;
        }
    } else if(week[day.getDay()] == item) {
         block.innerHTML += `<b>${item}</b></br>`;
    } else {
        block.innerHTML += item + '</br>';
    }
})