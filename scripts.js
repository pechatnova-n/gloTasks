'use strict';
const arr = ['456', '333', '2323', '676', '787', '99', '223'];

for (let i = 0; i < arr.length; i++) {
    if(arr[i][0] == '2' || arr[i][0] == '4') {
        console.log(arr[i])
    }
}

//2 способ
/*for (let i = 0; i < arr.length; i++) {
    if(arr[i].substring(0, 1) == '2' || arr[i].substring(0, 1) == '4') {
        console.log(arr[i])
    }
}*/

next:
for (let i = 2; i <= 100; i++) {
    for (let k = 2; k < i; k++) {
        if(i % k == 0) continue next;
    }
    console.log(i, `Делители этого числа 1 и ${i}`);
}




