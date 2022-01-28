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


