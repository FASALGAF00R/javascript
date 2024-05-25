// const a=[1,2,3,4,5]
// const b=a.reduce((x,y)=>{
// return x+y
// })
// console.log(b);



// const arr=[1,2,3,4,5]

// for(let i=0;i<arr.length;i++){
// for(let j=i+1;j<arr.length;j++){
//     if(arr[i]>arr[j]){
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



const n=10

function fib(n){
    if(n <= 1){
        return n
    }
    
    return fib(n-1)+fib(n-2)
}

for (let i = 0; i < n; i++) { 
    console.log(fib(i)); 
};















