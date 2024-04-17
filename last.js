
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

// const string = '0.02+3.4+5.6666';
// const arr=[...string]
// var c='';
// var sum=0
// for(let i=0;i<arr.length;i++){
//     if(!isNaN(parseInt(arr[i]))){
//         c+=arr[i]
//         sum+=parseFloat(c)
//     }
// } 

// console.log(sum);


// const arr=undefined
// console.log(typeof arr);

// const c=new Date()
// const a= c.getHours()
// const b= c.getMinutes()
// const d= c.getSeconds()

// const time=a+':'+b
// console.log(time);



// try{
//     var a=10
//     a=b
//     console.log(a);
// }catch(error){
//     console.log(error.message,"error");
// }

// example of an asynchronus function

// async function c(time){
//     console.log(time);
// return new Promise((resolve,reject)=>{
//     if(time <0){
//         reject(new Error('invalid time'))
//     }else{

//         setTimeout(resolve,time)
//     }
// })

// }

// async function s(){
//     console.log("beginign");
//     await c(3000)
//     await c(-3000)

//     console.log("After waiting...");
//     console.log("Done!");
// }

// s()


// var num=1
// while(num <= 100){
//     console.log(num);
//     num ++
// }

// var num=1
// do{
//     console.log(num);
//     num++
// }while(num <=100)


// for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)
// }

// for (var i = 1; i <= 10; i++) {
//     (function (num) {
//         setTimeout(() => {
//             console.log(num);
//         }, num * 1000);
//     })(i);
// }



// function printNumbers() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }
// printNumbers();


// const numbers = [0,10,20,30,40];
// const c=numbers.map(vl=>(9/5)*vl+32)
// console.log(c);


// const a=[{firstName: 'John', lastName: 'Doe'}, {firstName: 'Jane', lastName: 'Smith'}]
// const v=a.map(vl=>({
//     fullname:`${vl.firstName}  ${vl.lastName}`
// }))
// console.log(v);

// const a=['John Doe', 'Jane Smith', 'Alice Johnson']
// const v=a.map(vl=>{
//     const lete=vl.split(' ')
//     console.log(lete);
//     const b=lete.map(part=>part[0]).join('')
//     return b
// })

// console.log(v);

// const words = ['apple', 'banana', 'cherry'];

// const capitalizedWords = words.map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// });

// console.log(capitalizedWords);


// const c=['hello', 'world', 'javascript']
// const b=c.map(vl=>{
//     return vl.split('').reverse().join('')
// })
// console.log(b);


// const a=arr.some(vl=>vowel.includes(vl))
// console.log(a);

// const s='level'.split('')
// for(let i=0;i<s.length/2;i++){
//     let temp=s[i]
//     s[i]=s[s.length-1-i];
//     s[s.length-1-i]=temp

// }

// console.log(s);



// const arr ="ai".split('');
// const vowell = ['a', 'e', 'i', 'o', 'u'];
// let count=0
// let temp=0
// function isVowel(char) {
//     return vowell.includes(char);
// }
// for (let i = 0; i < arr.length; i++) {
//     const char = arr[i];
//     if (isVowel(char)) {
//         count++;
//         if(count==2&&temp>=0){
//           let newtemp=arr[temp]
//           arr[temp]=arr[i]
//           arr[i]=newtemp
//             count=1
//         }
//          temp=i
//     }
// }

// console.log(arr.join(''));