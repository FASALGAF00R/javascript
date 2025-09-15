//  add=(a,b)=>{
//     return a+b
// }
// console.log(add(2,4));

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

const add=a=>a+a
console.log(add(6));

(function(){
    console.log("hi");
})();


// (function(){
//     let t=9
//     console.log(t);
// })()

// function a(){
//     let i=8
//     console.log(i);
// }
// a()


function s(e){
    console.log("hi");
    setTimeout(e,3000)
}
    function t(){
        console.log("hello");
    }

console.log(s(t));



function person(name,age){
console.log(name,age,"ll");
this.name=name
this.age=age

}
const p=new person("fa",19)
console.log(p.name);







