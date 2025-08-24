
// function multiply(a,b,callback) {
//     let result =a*b;
//     callback(result);
// }
// multiply(2,3,function(result){
//     console.log(result);
// });

// console.log('hi');
// setTimeout(function() {console.log('Hello, world!');}, 5000);
//   function x(){
//     console.log("x");
//   }
//   x()


// function a(){
//     console.log("hii");
//     b()

// }
// function b(){
//     console.log("hhhhh");
// }
// a()

// async function fetch(){
//     const result= await ("hfdggggggg")
//     const data= await result.json();
//     return data;
// }




// function* generating(){
//     yield 1
//     yield 2
//     yield 3
//     yield 4

// }


// const generator=generating()

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);


// function a(s,call){
//     console.log("ji"+s);
//     call()
// }

// function b(){
//     console.log("hiu");
// }

// a(3,b)





// function a(x) {
//     return function (y) {
//         return x + y
//     }
// }

// const e=a(2)

// console.log(e(4));




// function a(a){
//     return function(b){
//         return function(d){
//             return a+b+d
//         }
//     }

// }

// console.log(a(1)(2)(3));


// function a(c,d){
//     return {
//         c,
//         d,
//     };
// }

// const person1=a("fa",3)
// console.log(person1);

//   (function (){
//     console.log("ko");
//   })()


// function a(...c){
//     console.log(c,";;");

// }

// a(1,2,3,4)



// const target={
//     name:'fasalu',
//     age:19
// }

// const handler={
//     get(target,prop,receiver){
//         return "suui"
//     }
// }

// const proxy1=new Proxy(target,handler)

// console.log(proxy1.age);
// console.log(proxy1.name);

console.log("hi");
function a(call) {
    setTimeout(() => {
        console.log("set time out");
    }, 5000)
    call()  
}
console.log(a(() => { console.log("callback function") }))
console.log("hello");




