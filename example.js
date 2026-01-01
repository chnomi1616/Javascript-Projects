// function first() {
//   second();
//   console.log("First");
// }

// function second() {
//   console.log("Second");
// }

// first();


// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 60000);

// console.log("End");

// console.log("Start boiling water");

// setTimeout(() => {
//   console.log("Water boiled");
// }, 2000);

// console.log("Do homework");

// async function makeTea() {
//     const Specialtea  = await new Promise (resolve => {
//         setTimeout (() => resolve("Tea is Ready"),2000 )
//     })
//     console.log(Specialtea);
    
// }

// makeTea()
// console.log("Do Homework");



// let mytime = setInterval( function () {
//   console.log("hello there");
  
// },0)

// setTimeout(function () {
//   clearInterval(mytime)
// },1000)


let mylevel = setInterval(function() {
    let time = new Date().toLocaleTimeString();
    console.log(time); // updates every second
},0);


setTimeout(function () {
    clearInterval(mylevel)
},1000)

