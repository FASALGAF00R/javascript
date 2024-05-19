// const sum=(x,y)=>console.log(x+y);
// sum(20,50);


// const sum=()=>4+3;
// console.log(sum());

// const a=(x)=>x+3;
// console.log(a(10));

 

// const a=(x,y)=>{
// return (x+y);
// }
// console.log(a(10,60));

// const a=()=>({name:'fasalu',age:10})
// console.log(a());

// a()

// function a(){
//     console.log("hi");
// }



// function foo() {
//     return
//     {
//         message: "Hello World"
//     };
// }
// console.log(foo()); //Undefined


// function Vehicle(model, color, year, country) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }

// var car = Vehicle("Honda", "white", "2010", "UK");
// console.log(car);



// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }



// var y = 1;
// if (function f(){}) {
//     y += typeof f;
// }
// console.log(y);

// function f(){}
//     console.log(typeof f);

// f()



// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.getProfile = function() {
//         // Outer function context
//         console.log(this.constructor.name); // User
//         return function() {
//             // Inner function context
//             console.log(this.constructor.name); // Window
//             console.log("I'm " + this.name + ", " + this.age + " yrs old");
//         };
//     }
// }

// var user = new User('John', 25);
// var profile = user.getProfile();
// profile(); //I'm undefined, undefined yrs old



// console.log(0.1 + 0.2 === 0.3);


// const obj={
//     name:'fsalu',
//     person:()=>{
//         console.log(`my name is ${this.name}`);
//     }
// }
// obj.person()