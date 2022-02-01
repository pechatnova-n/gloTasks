
function find(good) {
    if(typeof(good) != 'string') {
        console.log("Это не строка");
    } else {
        good = good.trim();
        if(good.length > 30) {
            let str = good.slice(0, 30);
            console.log(str + '...');
        } else {
            console.log(good);
        }
    }
}

find('   Мы ели-ели ершей у ели; их еле-еле у ели доели  ');




