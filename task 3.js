"use strict";

const thArray = [11, "Red", true, 242, false, "White", false, -11313, "Black", 113, 1, -435 ,53];

const  fnArray = (arr) => {
    const counter = {};
    for (const element of arr){
        const type = typeof element;
        const count = counter[type] || 0;
        counter[type] = count + 1;

    }
    return counter
}
const resoult = fnArray(thArray);
console.dir(resoult);