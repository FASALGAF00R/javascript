//  add=(a,b)=>{
//     return a+b
// }
// console.log(add(2,4));

// default parameters
// function a(name="ll"){
//     console.log("hi",name);
// }
// console.log(a());


// const b=function() {
//     return "hello"
// }
// console.log(b());

// const square=n=>n*n
// console.log(square(5));

// const add=a=>a+a
// console.log(add(6));

// (function(){
//     console.log("hi");
// })();


// callback
// function s(e){
//     console.log("hi");
//     setTimeout(e,3000)
// }
//     function t(){
//         console.log("hello");
//     }

// console.log(s(t));



// constructor function
// function person(name,age){
// console.log(name,age,"ll");
// this.name=name
// this.age=age

// }
// const p=new person("fa",19)
// console.log(p.name);


// async
// async function a(){
//     console.log("hi");
//     const b=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("hello")
//         },3000) 
//     })
//     console.log(await b);
//     console.log("by");
// }
// a()


// function * numbers(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;

// }

// const num=numbers()
// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().value);


const a=(n,c)=>n+c
console.log(a(5,6));
