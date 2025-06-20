const a=[1,2,3,4,5]
const b=a.reduce((x,y)=>{
    if(y%2==0){
return x+y
    }else{
   return x
    }
},0)
console.log(b);



// const arr=[1,2,3,4,5]

// for(let i=0;i<arr.length;i++){
// for(let j=i+1;j<arr.length;j++){
//     if(arr[i]<arr[j]){
//    let temp=arr[i];
//    arr[i]=arr[j]
//    arr[j]=temp
// }
// }
// }
// console.log(arr[1])



// const person={
//     name:"fasal",
//     age:"12",
// };

// Object.keys(person).length



// const n=10
// function fib(n){
//     if(n <= 1){
//         return n
//     }
//     return fib(n-1)+fib(n-2)
// }

// for (let i = 0; i < n; i++) { 
//     console.log(fib(i)); 
// };



// function* fun(){
//     let num=2
//     while(true){
//         if(isprime){
//             yield num
//         }
//         num ++
//     }
// }

// function isprime(n){
//     for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {

//         if(n%i==0){
//             return false
//         }
//     }
//     return n>1
// }

// const c=fun()
// let b=c.next().value


// while(b<10){
//     console.log(b);
//     b=c.next().value
// }


// function calculateVolume(length) {
// 	return function (breadth) {
// 		return function (height) {
// 			return length * breadth * height;
// 		}
// 	}
// }
// console.log(calculateVolume(4)(5)(6));


// function a(...c){
//     console.log(c);
// }
// a(1,2,3,4)




