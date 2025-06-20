
// function greet(name) {
//     console.log(`Hello, ${name}! My name is ${this.name}.`);
//   }

//   const person = { name: "Alice" };
//   greet.apply(person, ["Bob"]); 

// function greet(name) {
//     console.log(`Hello, ${name}! My name is ${this.name}.`);
//   }

//   const person = { name: "Alice" };
//   let c=greet.bind(person); 
// c("Bob")



// function a(n){
//     console.log("hi");
//     n()
// }
// function b(){
//     console.log("hhhhh");
// }
// a(b)



// function greet(name) {
//     console.log(`hello,${name}!`);
// }
// greet.apply(null, ['John']);



//countdown recursion
// function countdown(n) {
//     if (n >= 0) {
//         setTimeout(() => {
//             if (n <= 10) {
//                 console.log(n);
//                 countdown(n - 1)
//             }
//         }, 1000);
//     }
// }
// countdown(10)



// function isPalindrome(arr, start, end) {
//     if (start >= end) {
//         return true;
//     }
//     if (arr[start] === arr[end]) {
//         return isPalindrome(arr, start + 1, end - 1)
//     } else {
//         return false
//     }
// }
// function palindrom(arr) {
//     return isPalindrome(arr, 0, arr.length - 1)
// }
// console.log(palindrom([1, 2, 1]));



// function isplaindrome(arr,s,e){
//     if(s>=e){
//         return true
//     }
//     if(arr[s]===arr[e]){
//         return isplaindrome(arr,s + 1,e -1)
//     }else{
//         return false
//     }
// }
// function pal(arr){  
//     return isplaindrome(arr,0,arr.length-1)
// }

// console.log(pal([1,2,1]));



// function countdown(n){
//     if(n>=0){
//         setTimeout(() => {
//             if(n<=10){
//                 console.log(n);
//                 countdown(n-1)
//             }
//         }, 1000);
//     }

// }

// countdown(10)


// sum=0;
// var i=0;
// const a=[1,2,3,4,5];
// while(i<a.length){
// sum=sum+a[i];
// i++;
// }
// console.log(`sum is:${sum}`)


// var sum=0;
// var i=0;
// var a=[1,2,3,4,5];
// do{
//     sum+=a[i];
//     i++;
// }
// while(i<a.length);
// console.log(sum);


// const s='abcd'
// const arr1=s.split('')
// const k=2
// const arr2=[]
// const arr3=[]
// for(let i=0;i<arr1.length;i++){
//     if(i<k){
//         arr2.push(arr1[i])
//         arr2.reverse()
//     }else{
//         arr3.push(arr1[i])
//     }

// }
// const ans=arr2.concat(arr3).join()
// console.log( ans)


// const candyType = [1, 1, 2, 2, 3, 3]
// const uninque = new Set(candyType)
// let arr=[...uninque]

// for (let i = 0; i < arr.length; i++) {
//     if (arr.length<arr.length/2) {
//         return arr.length
//     }else{
//         return arr.length/2
//     }
// }

// const s="aba"

// const ans=function(s){
//     const arr=[...s]
//     const arr2=arr.reverse()
//     if(arr===arr2){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(ans(s));


// const arr=[3,4,5,6,7,8,8]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%3==0){
//         console.log(arr[i]);
//     }
// }