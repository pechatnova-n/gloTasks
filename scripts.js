let num =  266219;

let arr = num.toString().split("");
console.log(arr);

let multi = 1;
for (let i = 0; i < arr.length; i++) {
    multi *= +arr[i];
}
console.log(multi);

multi = multi ** 3;
console.log(multi.toString().split("").slice(0,2).join(""));



const lang = 'ru';

if (lang == 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} if (lang == 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}


switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}


const days = {
    ru: ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
    en:  ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
 }
console.log(days[lang]);


const namePerson = 'Александр';
const nameCheck = (namePerson == 'Артем') ? console.log('директор'):
    (namePerson == 'Александр') ? console.log('преподаватель') : console.log('студент');





