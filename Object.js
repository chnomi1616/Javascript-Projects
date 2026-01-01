// let person  = {
//     name:"jane willer",
//     age : "29 years",
//     city: "alipur",
//     profession: "developer",
//     greet: function(){
//         console.log(`Hello, my name is ${this.name}. I am  a ${this.profession}. I live in ${this.city} and I am ${this.age} old.`);
//         ;
        
//     }

// }



// const Subject = {name: "Mathematics"};
// const marks = {score: 95};

// let result1 = Object.assign({},Subject,marks)

// let result = Object.assign({},person,person1)
// console.log(result);


// person.city = "mirpurkhas" 
// person.greet();


// console.log(Object.keys(person));
// console.log(Object.entries(person));


let num = [1,2,3,4,5,6,7,8,9]
num.pop(8)
num.shift(0)
num.reverse()
console.log(num);




let employee = {
    id: 101,
    name: "william buyers",
    position: "software engineer",
    salary: 75000,
}

// console.log("Employee => ",employee);

// ====>Shallow Copy<====
let employeeCopy = {...employee}
employeeCopy.name = "sarah connor"

// console.log("Employee Copy => ",employeeCopy);
