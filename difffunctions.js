

// (function(){
//     let t=9
//     console.log(t);
// })()

// function a(){
//     let i=8
//     console.log(i);
// }
// a()


// function reversearray(arr){
//     if(arr.length<=1){
//         return arr
//     }

//     return reversearray(arr.slice(1)).concat(arr[0])

// }

// const arr=[1,2,3,4,5]
// const res=reversearray(arr)
// console.log(res);


// const s='leveluuu'
// const c=s.split('')

// function a(c){
//     for(let i=0;i<c.length/2;i++){
//         if(c[i]==c[c.length-1-i]){
//             return true
//         }else{
//             return false
//         }
//     }
// }
// const res=a(c)
// console.log(res);


// const s='level'
// const c=s.split('')

// function palindrome(c){
//     if(c.length<=1){
//         return true
//     }
//     if(c[0]==c[c.length-1]){
//         return palindrome(c.slice(1,-1))
//     }else{
//         return false
//     }

// }
// console.log(palindrome(c));


// const num=[1,2,3,4,5]
// var fact=1
//     for (i = 1; i <= num.length; i++) {
//         fact =fact*i;
//     }
//     console.log(fact)


// const num=[1,2,3,4,5]
// function factorial (num){
//    if(num==1||num ==0){
//        return 1
//    }

//    return  num * factorial(num-1)

// }
// const factorialarray=num.map(n=>factorial(n))
// console.log( factorialarray);





// let arr = [1, 2, 3, 2, 3, 4, 5];

// const count = {};

// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     if (count[ele]) {
//         count[ele] += 1;
//     } else {
//         count[ele] = 1;
//     }
// }
// console.log(count);











