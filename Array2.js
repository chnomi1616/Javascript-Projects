// --------------------Array High Order Function in JavaScripts----------------------------

let fruits = ["apple", "banana", "cherry", "date"];
let slicedFruits = fruits.slice(1, 3 + 1);
console.log(slicedFruits);


let numbers = [1, 2, 3, 4, 5];
let mapppedNumbers = numbers.map(num => num * num);
console.log(mapppedNumbers);


const  nums = [1, 2, 3, 4, 5, 6];   

let slicedNums = nums.slice(2, 5);
console.log(slicedNums);
console.log(nums);








let fruitsList = ["apple" ,"banana","cherry","date","fig","grape"];

let newArr = fruitsList.map( function(item, index){
 console.log(index,item);
 
})


let Double = [11,22,33,45,55,65,57,88,99,910]

let squared = Double.map( num => num * num )
console.log(squared);

let evenNumbers = [1,2,3,4,5,6,7,8,9,10]

let evens = evenNumbers.filter( num => num % 2 !== 0 )
console.log(evens);

