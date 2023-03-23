// var numbers = [15, 25, 12, 4];
// var newarray = numbers.map(myFunction)

// function myFunction(num) {
//     return num * 10;
// }

// console.log(newarray);


// var numbers = [175, 50, 25];
// var val = numbers.reduce(myFunction)

// function myFunction(total, num) {
//     return total - num;
// }

// console.log(val);


const items = [1,29,47];
const copy = [];

items.forEach(function(item){
    copy.push(item*item);
});
console.log(copy);