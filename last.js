
// gr questions

// const c=10
// function a(){
// return c
// }
// let f=a()
// console.log(f);


// pass by value

// function a(x){
// x=10
// }
// var y=5;
// a(y)
// console.log(y);

// pass by reference

// const obj={
//     name:'fasal',
//     age:22
// }

// function a(b){
// b.name="hkfb"
// b.age=23
// }

// a(obj)
// console.log(obj.name);
// console.log(obj.age);

// closure,nested functions

// function a(name){
//     let a=10
//     function b(){
//         console.log("hi bro"+name);
//         console.log(a);
//     }
//     b()
// }

// a('fasalu')


// returning a function from another function

// function a(name){
//     function b(){
// console.log("helo"+name);
//     }
//     return b
// }

// let n=a("kj")
// n()


// const obj={
//     name:'fasal',
//     age:10
// }

// const v={...obj}
// console.log(v);


// const originalArray = [1, 2, 3];
// const c=[5,6,7]
// const copyArray = [...originalArray,...c]; 
// console.log(copyArray);


// function a(c,v,b){
// console.log(c,v,b);
// }
// const arr=[1,2,3]
// a(...arr)

// const string = 'hello';
// const charArray = [...string]; 
// console.log(charArray);

// const f="kgj"
// const g=f.split('')
// console.log(g);



// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// const combinedObj = { ...obj1, ...obj2 };
// console.log(combinedObj);


// const array = [1, 2, 3];
// const [first, ...rest] = array; 
// console.log(array);


// const obj = {
//     a: '1007',
//     b: '2678',
//     c: '6455',
//     d: '9899'
// }


// let larg=Infinity
// let largkey
// for(let i in obj){
//     if(typeof obj[i]==='string' && obj[i] <larg){
//         larg=obj[i]  
//         largkey=i
//     }
// }
// delete obj[largkey]
// console.log(obj);



// const newobj={}

// const a=Object.keys(obj).reverse()
// a.forEach(key=>{
//     newobj[key]=obj[key]
// })
// console.log(newobj);



// Object.values(obj).forEach(vl=>{
//     console.log(vl);
// })



// console.log(1/ 0); // Output: Infinity
// console.log(-1 / 0); // Output: -Infinity
// console.log(Infinity > 1000); // Output: true
// console.log(Infinity + 1); // Output: Infinity
// console.log(Infinity / Infinity); // Output: NaN


// const string = '-0.02+3.4+5.6666';
// // const numbers=string.match(/\d+/g)
// // const op=/[+-]/g
// const l=string.match(op)
// console.log(l); 

const string = '0.02+3.4+5.6666';
const arr=[...string]
var c='';
var sum=0
for(let i=0;i<arr.length;i++){
    if(!isNaN(parseInt(arr[i]))){
        c+=arr[i]
        sum+=parseFloat(c)
    }
} 

console.log(sum);








